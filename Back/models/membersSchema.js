const mongoose = require("mongoose");

const membersSchema = new mongoose.Schema({
  Full_name: String,
  Email: String,
  City: String,
}, { versionKey: false });

module.exports = mongoose.model("members", membersSchema);
