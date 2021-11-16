const { Item } = require("../models");

module.exports = {
  addItem: async function (req, res) {
    try {
      const { category, brand, model, price } = req.body;
      const item = await Item.create({ category, brand, model, price });
      res.status(201).json(item);
    } catch (err) {
      res.json({ message: err });
    }
  },

  getAllItems: async function (req, res) {
    try {
      const items = await Item.findAll();
      if (items.length === 0) {
        res.json({ message: "There are no items!" });
      } else {
        res.status(200).json(items);
      }
    } catch (err) {
      res.json({ message: err });
    }
  },

  getItemById: async function (req, res) {
    try {
      const { id } = req.params;
      const items = await Item.findAll({ where: { id } });
      if (items.length === 0) {
        res.json({ message: "There are no items!" });
      } else {
        res.status(200).json(items);
      }
    } catch (err) {
      res.json({ message: err });
    }
  },

  removeItem: async function (req, res) {
    try {
      const { id } = req.params;
      const deletedItem = await Item.destroy({ where: { id } });
      res.status(200).json(deletedItem);
    } catch (err) {
      res.json({ message: err });
    }
  },

  updateItem: async function (req, res) {
    try {
      const { id } = req.query;
      const { category, brand, model, price } = req.body;
      const updatedItem = await Item.update(
        { category, brand, model, price },
        { where: { id } }
      );
      res.status(201).json(updatedItem);
    } catch (err) {
      res.json({ message: err });
    }
  },
};
