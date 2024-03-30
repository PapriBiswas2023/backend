const express = require('express');
const hotelController = require('../controllers/hotelController');

const hotelRouter = express.hotelRouter();

router.get('/', hotelController.getHotelItems);
router.post('/', hotelController.createHotelItem);
router.put('/:id', hotelController.updateHotelItem);
router.delete('/:id', hotelController.deleteHotelItem);


module.exports = hotelRouter;