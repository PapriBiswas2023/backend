
const Item = require('../models/hotel');

// CRUD operations
exports.getHotelItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createHotelItem = async (req, res) => {
    const item = new Item({
      name: req.body.name
    });
  
    try {
      const newItem = await item.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateHotelItem = async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  exports.deleteHotelItem = async (req, res) => {
    try {
      const deletedItem = await Item.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Implement other CRUD operations like createItem, updateItem, deleteItem
