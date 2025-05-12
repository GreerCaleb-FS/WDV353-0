//app.js
const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.json());

app.get("/", (req, res) => {
  console.log("GET");
  res.json({ message: "Service is Up!" });
});

app.use("/api", router);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  //console.log("ERROR >>>", err);
  res
    .status(err.status || 500)
    .json({ message: err.message, status: err.status });
});

module.exports = app;
