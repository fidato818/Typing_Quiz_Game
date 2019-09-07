const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://fidato:YarKeTwOEZBFowaj@cluster0-tvc7c.mongodb.net/test";
mongoose.connect(mongoURI);

module.exports = mongoose;
