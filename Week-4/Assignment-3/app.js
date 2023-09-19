const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const registerRoutes = require("./routes/register.js");

app.use("/", registerRoutes);

app.all("*", (req, res) => res.status(404).send("404 Page Not Found"));
app.use(errorHandler); // 500 error handler for generic errors

app.listen(port, () => console.log(`The app is running on port ${port}`));
