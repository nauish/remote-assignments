const express = require("express");
const router = express.Router();

// Assignment 2: Build Backend API for Front-End
router.get("/", (req, res, next) => {
  try {
    const { number } = req.query;
    if (!number) {
      res.send("Lack of parameter");
    } else if (Number.isInteger(+number) && +number > 0) {
      /** Since the algorithm for calculating triangle numbers (1 + n )* n / 2 calculates the result directly.
          it should have the time complexity of O(1), which would be suitable for calculating large numbers */
      res.send(`${((1 + +number) * +number) / 2}`);
    } else {
      res.status(400).send("Wrong parameter!");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
