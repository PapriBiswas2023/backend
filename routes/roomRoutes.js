const express = require('express');
const roomRouter = express.roomRouter();

router.get('/', roomController.getItems);
module.exports = roomRouter;