const express = require("express");
const router = express.Router();
const moviesBL = require("../models/moviesBL");

function once(fn, context) {
  var result;

  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}

const getMoviesFromAPI = once(async () => {
  let resp = await moviesBL.getAllMoviesFromAPI();
  return resp;
});

router.get("/", async function (req, resp) {
  let data = await moviesBL.getAllMovies();
  return resp.json(data);
});

router.get("/:id", async function (req, resp) {
  let id = req.params.id;
  let data = await moviesBL.getMovie(id);
  return resp.json(data);
});

router.post("/", async function (req, resp) {
  let obj = req.body;
  let movieid = await moviesBL.addMovie(obj);
  return resp.json("Created with id: " + movieid);
});

router.put("/:id", async function (req, resp) {
  let obj = req.body;
  let id = req.params.id;
  await moviesBL.updateMovie(id, obj);
  return resp.json("Updated!");
});

router.delete("/:id", async function (req, resp) {
  let id = req.params.id;
  await moviesBL.deleteMovie(id);
  return resp.json("Deleted!");
});

router.delete("/", async function (req, resp) {
  await moviesBL.deleteAllMovies();
  return resp.json("All Movies are Deleted!");
});

module.exports = router;
module.exports = getMoviesFromAPI;
