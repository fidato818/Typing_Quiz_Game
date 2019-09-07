const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const mongoose = require("./config/db");
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.once("open", () => {
  console.log("Database Connected Successfully");
});

app.listen(port, () => {
  console.log(`server is listen on ${port}`);
});

app.use(express.json());

app.use("/", require("./routes/index"));
