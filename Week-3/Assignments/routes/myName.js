const express = require("express");
const getName = require("../controllers/getName");
const router = express.Router();

// Assignment 4: HTTP Cookie
router.get("/", getName);

module.exports = router;
