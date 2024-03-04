const express = require('express');
const router = express.Router();

router.get('/', userController.getItems);
// Implement other CRUD routes here

module.exports = router;