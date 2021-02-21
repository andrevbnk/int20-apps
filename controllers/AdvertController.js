const Advert = require('../models/Advert');

exports.getLostAdverts = async (req, res) => {
    const lostAdvertsCollection = Advert.findAll({ where: { type: 'lost' } });
    res.status(200).json(lostAdvertsCollection);
};

exports.getFoundAdverts = async (req, res) => {
    const foundAdvertsCollection = Advert.findAll({ where: { type: 'found' } });
    res.status(200).json(foundAdvertsCollection);
};

exports.addLostAdvert = async (req, res) => {
    const advert = Advert.build({
        userId: req.user.user.id,
        title: req.body.title,
        description: req.body.description,
        type: 'lost',
        animalType: req.body.animalType,
        animalSize: req.body.size,
        animalColor: req.body.color,
        location: req.body.location,
        lostDate: req.body.lostDate,
        createdAt: Date.now(),
    });
    await advert.save();

    res.status(201).json(advert);
};

exports.addFoundAdvert = async (req, res) => {
    const advert = Advert.build({
        userId: req.user.user.id,
        title: req.body.title,
        description: req.body.description,
        type: 'found',
        animalType: req.body.animalType,
        animalSize: req.body.size,
        animalColor: req.body.color,
        createdAt: Date.now(),
    });
    await advert.save();

    res.status(201).json(advert);
};