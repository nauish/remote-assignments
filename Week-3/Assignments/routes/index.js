const express = require("express");
const router = express.Router();

// Assignment 1: Your First Web Server
router.get("/", (req, res) => res.send("<h1>Hello, My Server!</h1>"));

module.exports = router;
