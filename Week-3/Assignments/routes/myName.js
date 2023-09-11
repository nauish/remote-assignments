const express = require("express");
const router = express.Router();

// Assignment 4: HTTP Cookie
router.get("/", (req, res, next) => {
  try {
    const storedTrackName = req.cookies.name;
    if (!storedTrackName) {
      res.redirect("/tellMeUrName.html");
    } else {
      res.send(`Hello, ${storedTrackName}`);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
