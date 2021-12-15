const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URI;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;