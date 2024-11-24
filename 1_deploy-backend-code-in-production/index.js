require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.port || 8000;

app.get("/", (req, res) => {
  res.send("Hello from server !");
});

app.get("/twitter", (req, res) => {
  res.send("shivraj.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>");
});

app.get("/logout", (req, res) => {
  res.send("<h1>Please logout</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
