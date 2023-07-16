const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  Full_name: String,
  Username: String,
  Password: String,
 }, { versionKey: false });

module.exports = mongoose.model("users", usersSchema);
