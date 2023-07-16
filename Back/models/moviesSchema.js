const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  Name: String,
  Year_premiered: String,
  Genres: [String],
  Image_URL: String,
}, { versionKey: false });

module.exports = mongoose.model("movies", moviesSchema);
