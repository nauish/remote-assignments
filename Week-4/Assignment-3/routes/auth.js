const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt"); // Password encryption
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const router = express.Router();

const pool = mysql
  .createPool({
    host: "127.0.0.1", // Localhost
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "assignment",
  })
  .promise();

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await pool.query(`INSERT INTO user (email, password) VALUES (?, ?)`, [
      email,
      hash,
    ]);
    res
      .status(201)
      .json({ success: true, message: "Registered successfully!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [query] = await pool.query(`SELECT * FROM user WHERE email = ?`, [
      email,
    ]);
    const user = query[0];
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        res
          .status(200)
          .json({ success: true, message: "Valid Email and Password" });
      } else {
        res.status(401).json({ success: false, error: "Wrong Password" });
      }
    } else {
      res.status(404).json({ success: false, error: "User not found!" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

router.post("/register", register);
router.post("/login", login);

module.exports = router;
