const mongoose = require("mongoose");
const Schema = mongoose.Schema

const subscriptionsSchema = new mongoose.Schema({
  MovieID: {type: Schema.Types.ObjectId, ref: "movies"},
  MemberID: {type: Schema.Types.ObjectId, ref: "members"},
  Date: String,
}, { versionKey: false });

module.exports = mongoose.model("subscriptions", subscriptionsSchema);
