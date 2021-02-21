const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

router.use(require('./auth'));
router.use('/adv', authMiddleware, require('./adverts'));
router.use('/users', authMiddleware, require('./user'));

module.exports = router;