import { selectUserByEmail, insertUser } from "../models/db.js";
import { hash } from "bcrypt";

const register = async (req, res, next) => {
  try {
    const { email, password, confirmation } = req.body;

    const user = await selectUserByEmail(email);
    if (user.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User email is already in the database",
      });
    } else if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill out you email and password!",
      });
    } else if (password !== confirmation) {
      return res.status(400).json({
        success: false,
        message: "Password and confirmation do not match!",
      });
    }

    const hashedPassword = await hash(password, 10);
    await insertUser(email, hashedPassword);
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

export default register;
