const express = require('express');
const hotelRouter = express.hotelRouter();

router.get('/', hotelController.getItems);


module.exports = hotelRouter;