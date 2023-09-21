import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/auth.js";
import memberRoutes from "./routes/member.js";
import session from "express-session"; // Store user session
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use("/auth", authRoutes);
app.use("/member", memberRoutes);

app.all("*", (req, res) =>
  res.status(404).json({ error: "404 Page Not Found" })
);
app.use(errorHandler); // 500 error handler for generic errors

app.listen(port, () => console.log(`The app is running on port ${port}`));
