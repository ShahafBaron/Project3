const Movie = require("./moviesSchema");
const Subscription = require("./subscriptionsSchema");
const axios = require("axios");

const getAllMoviesFromAPI = async () => {
  let resp = await axios.get("https://api.tvmaze.com/shows");

  resp.data.map((obj) => {
  let movie = {
    Name: obj.name,
    Year_premiered: obj.premiered.slice(0, 4),
    Genres: obj.genres,
    Image_URL: obj.image.medium,
  }
    addMovie(movie);
  });
  return resp.data
};

const getAllMovies = async () => {
  let data = await Movie.find({});
  return data;
};

const getMovie = async (id) => {
  let data = await Movie.findById(id);
  return data;
};

const addMovie = async (obj) => {
  let movie = new Movie({
    Name: obj.Name,
    Year_premiered: obj.Year_premiered,
    Genres: obj.Genres,
    Image_URL: obj.Image_URL,
  });

  await movie.save();
  return movie._id;
};

const updateMovie = async (id, obj) => {
  await Movie.findByIdAndUpdate(id, {
    Name: obj.Name,
    Year_premiered: obj.Year_premiered,
    Genres: obj.Genres,
    Image_URL: obj.Image_URL,
  });
};

const deleteMovie = async (id) => {
  await Movie.findByIdAndRemove(id);
  await Subscription.deleteMany({ MovieID: id });
};

const deleteAllMovies = async () => {
  await Movie.deleteMany({});
};

module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  addMovie,
  deleteAllMovies,
  getAllMoviesFromAPI
};
