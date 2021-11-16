const express = require("express");
const {
  addItem,
  getAllItems,
  removeItem,
  updateItem,
  getItemById,
} = require("../controllers/item.controller.js");

const router = express.Router();

router.post("/", addItem);

router.get("/", getAllItems);

router.get("/:id", getItemById);

router.delete("/:id", removeItem);

router.put("/", updateItem);

module.exports = router;
