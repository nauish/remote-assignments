const express = require("express");
const router = express.Router();

// Assignment 2: Build Backend API for Front-End
router.get("/", (req, res, next) => {
  try {
    const n = +req.query.number;
    if (isFinite(n) && n > 0) {
      res.send(`${((1 + n) * n) / 2}`);
    } else {
      res.status(400).send("Wrong parameter!");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
