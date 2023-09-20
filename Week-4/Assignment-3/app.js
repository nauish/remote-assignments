import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/auth.js";
import session from "express-session";
import { config } from "dotenv";

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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRoutes);

app.get("/", (req, res) => res.render("index.ejs", { errorMessage: null }));
app.get("/member", (req, res) => {
  if (req.session.status) {
    res.render("member.ejs", { email: req.session.email });
  } else {
    res.redirect("/");
  }
});

app.all("*", (req, res) => res.status(404).send("404 Page Not Found"));
app.use(errorHandler); // 500 error handler for generic errors

app.listen(port, () => console.log(`The app is running on port ${port}`));
