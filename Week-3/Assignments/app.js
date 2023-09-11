const express = require("express");
const app = express();
const port = 3000;

// Assignment 1
app.get("/", (request, response) => {
  response.send("<h1>Hello, My Server!</h1>");
});

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});

// Assignment 2
app.get("/data", (request, response) => {
  const n = +request.query.number;
  if (isFinite(n) && n > 0) {
    response.send(`${((1 + n) * n) / 2}`);
  } else {
    response.send("Wrong parameter!");
  }
});

// Assignment 3
app.use(express.static("public"));
