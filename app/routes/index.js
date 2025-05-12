//index.js
const express = require("express");
const router = express.Router();

//in memory data storage
const arr = [];

//get all method
("localhost:3000/api/");
router.get("/", (req, res) => {
  res.status(200).json({ data: arr });
});

//get method by id
router.get("/id", (req, res) => {
  const { id } = req.params;
  const item = arr.find((o) => o.id === id);
  if (!item) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.status(200).json({ data: item });
});

//Delete method
("localhost:3000/api/:id");
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const idx = arr.findIndex((obj) => obj.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: "Not Found" });
  }
  const [removed] = arr.splice(idx, 1);
  res.status(200).json({ data: removed });
});

//Post Method
router.post("/", (req, res) => {
  const { data } = req.body;
  if (data == null) {
    return res.status(400).json({ message: "No Data provided" });
  }
  const newItem = { id: Date.now().toString(), data };
  arr.push(newItem);
  res.status(201).json({ data: newItem });
});

//Put Method
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  const idx = arr.findIndex((o) => o.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: "Not Found" });
  }
  arr[idx].data = data;
  res.status(200).json({ data: arr[idx] });
});

module.exports = router;
