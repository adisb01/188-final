const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const movieRouter = require("./routes/movie-router");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/api", movieRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Don't listen here so we can use supertest to test the API
module.exports = app;
