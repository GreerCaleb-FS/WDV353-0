// routes/index.js
const express = require("express");
const router = express.Router();

// in-memory data storage
const arr = [];

// GET ALL
router.get("/", (req, res) => {
  res.status(200).json({ data: arr });
});

// GET BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const item = arr.find((o) => o.id === id);
  if (!item) {
    return res.status(404).json({ message: "Not Found", status: 404 });
  }
  res.status(200).json({ data: item });
});

// DELETE BY ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const idx = arr.findIndex((obj) => obj.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: "Not Found", status: 404 });
  }
  const [removed] = arr.splice(idx, 1);
  res.status(200).json({ data: removed });
});

// POST
router.post("/", (req, res) => {
  console.log("POST /api body:", req.body);
  const body = req.body || {};
  const data = body.data;
  if (data == null) {
    return res.status(400).json({ message: "No Data provided", status: 400 });
  }
  const newItem = { id: Date.now().toString(), data };
  arr.push(newItem);
  res.status(201).json({ data: newItem });
});

// UPDATE BY ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body || {};
  const idx = arr.findIndex((o) => o.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: "Not Found", status: 404 });
  }
  arr[idx].data = data;
  res.status(200).json({ data: arr[idx] });
});

module.exports = router;
