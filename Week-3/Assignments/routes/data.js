const express = require("express");
const getSum = require("../controllers/getSum");
const router = express.Router();

// Assignment 2: Build Backend API for Front-End
router.get("/", getSum);

module.exports = router;
