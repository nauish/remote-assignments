import { Router } from "express";
import { createPool } from "mysql2";
import { hash as _hash, compare } from "bcrypt"; // Password encryption
import { config } from "dotenv";

config({ path: "./.env" });

const router = Router();

const pool = createPool({
  host: "127.0.0.1", // Localhost
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "assignment",
}).promise();

const register = async (req, res, next) => {
  try {
    const { email, password, confirmation } = req.body;

    const [query] = await pool.query(`SELECT * FROM user WHERE email = ?`, [
      email,
    ]);

    if (query.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User email is already in the database",
      });
    } else if (!password) {
      return res.status(400).json({
        success: false,
        message: "You must enter a password!",
      });
    } else if (password !== confirmation) {
      return res.status(400).json({
        success: false,
        message: "Password and confirmation do not match!",
      });
    }

    const hash = await _hash(password, 10);
    await pool.query(`INSERT INTO user (email, password) VALUES (?, ?)`, [
      email,
      hash,
    ]);
    req.session.status = "login success";
    req.session.email = `${email}`;
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
      const validPassword = await compare(password, user.password);
      if (validPassword) {
        req.session.status = "login success";
        req.session.email = `${email}`;
        res
          .status(200)
          .json({ success: true, message: "Valid Email and Password" });
      } else {
        res.status(401).json({ success: false, message: "Wrong Password!" });
      }
    } else {
      res.status(404).json({ success: false, message: "Email not found!" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Log out
const logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
    } else {
      res.redirect("/");
    }
  });
};

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
