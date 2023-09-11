const express = require("express");
const router = express.Router();

// Assignment 4: HTTP Cookie
router.get("/", (req, res) => {
  const storedTrackName = req.cookies.name;
  if (!storedTrackName) {
    res.redirect("/tellMeUrName.html");
  } else {
    res.send(`Hello, ${storedTrackName}`);
  }
});

module.exports = router;
