const express = require("express");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static("public")); // Static HTML & CSS files for Assignment 3 & 4

const mainRoutes = require("./routes");
const dataRoutes = require("./routes/data");
const myNameRoutes = require("./routes/myName");
const trackNameRoutes = require("./routes/trackName");

app.use(mainRoutes); // Assignment 1
app.use("/data", dataRoutes); // Assignment 2
app.use("/myName", myNameRoutes); // Assignment 4
app.use("/trackName", trackNameRoutes); // Assignment 4

app.all("*", (req, res) => res.status(404).send("404 Page Not Found"));
app.use(errorHandler); // 500 error handler for generic errors

app.listen(port, () => console.log(`The app is running on port ${port}`));
