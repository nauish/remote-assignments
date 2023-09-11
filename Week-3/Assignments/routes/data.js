const express = require("express");
const router = express.Router();

// Assignment 2: Build Backend API for Front-End
router.get("/", (req, res) => {
  const n = +req.query.number;
  if (isFinite(n) && n > 0) {
    res.send(`${((1 + n) * n) / 2}`);
  } else {
    res.send("Wrong parameter!");
  }
});

module.exports = router;
