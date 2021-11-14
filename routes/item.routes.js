const express = require("express");
const {
  addItem,
  getAllItems,
  removeItem,
  updateItem,
} = require("../controllers/item.controller.js");

const router = express.Router();

router.post("/", addItem);

router.get("/", getAllItems);

router.delete("/:id", removeItem);

router.put("/", updateItem);

module.exports = router;
