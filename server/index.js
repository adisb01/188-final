const app = require("./app.js");
require("dotenv").config();
const db = require("./db");

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.listen(process.env.SERVER_PORT, () => "Listening on port 5000");
