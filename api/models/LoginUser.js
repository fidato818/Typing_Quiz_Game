const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String
    // required: true
    // unique: true
  }
});

const Users = mongoose.model("User", UserSchema);
module.exports = Users;
