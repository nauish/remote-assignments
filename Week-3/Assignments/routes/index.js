const express = require("express");
const helloWorld = require("../controllers/helloWorld");
const router = express.Router();

// Assignment 1: Your First Web Server
router.get("/", helloWorld);

module.exports = router;
