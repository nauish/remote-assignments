const express = require("express");
const setName = require("../controllers/setName");
const router = express.Router();

// Use get here since we need to accept query strings from users
router.get("/", setName);

module.exports = router;
