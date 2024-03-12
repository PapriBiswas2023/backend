
const Item = require('../models/hotel');

// CRUD operations
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Implement other CRUD operations like createItem, updateItem, deleteItem
