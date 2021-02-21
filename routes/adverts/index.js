const express = require('express');
const router = express.Router();
const AdvertController = require('../../controllers/AdvertController');

router.get('/lost', AdvertController.getLostAdverts);
router.get('/found', AdvertController.getFoundAdverts);
router.post('/found', AdvertController.addFoundAdvert);
router.post('/lost', AdvertController.addLostAdvert);

module.exports = router;