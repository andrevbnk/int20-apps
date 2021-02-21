const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const createError = require('http-errors');

exports.login = async (req, res, next) => {
    const user = await User.findOne({ where: { email: req.body.email }});

    if (!user) {
        return next(createError(404, 'User with such email not found!'));
    }

    const passwordsMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordsMatch) {
        return next(createError(400, 'Wrong password!'));
    }

    const token = jwt.sign(
        { user },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 3600 });

    res.status(200).json({
        accessToken: token
    });
};

exports.register = async (req, res, next) => {
    let user = await User.findOne({ where: { email: req.body.email }});

    if (user) {
        return next(createError(400, 'User with such email already exists!'));
    }

    user = await User.findOne({ where: { phone: req.body.phone }});

    if (user) {
        return next(createError(400, 'User with such phone already exists!'));
    }

    if (req.body.password !== req.body.password_confirmation) {
        return next(createError(400, "Passwords don't match!"));
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user = User.build({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
        createdAt: Date.now(),
        updatedAt: null
    });

    await user.save();

    return res.status(200).json('You successfully registered!');
};

exports.logout = async (req, res) => {
    req.user = null;
    res.status(204).json('Logged out!');
};