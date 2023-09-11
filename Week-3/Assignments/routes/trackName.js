const express = require("express");
const router = express.Router();

// Use get here since we need to accept query strings from users
router.get("/", (req, res, next) => {
  try {
    if (req.query.name) {
      res.cookie("name", req.query.name);
      res.redirect("/myName");
    } else {
      res.redirect("/tellMeUrName.html");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
