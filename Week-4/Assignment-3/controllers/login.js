import { selectUserByEmail } from "../models/db.js";
import { compare } from "bcrypt";

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [user] = await selectUserByEmail(email);
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

export default login;
