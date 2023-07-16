import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import utils from "../utils/utils";

const EditMovie = () => {
  const storeData = useSelector((state) => state);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [movie, setMovie] = useState({
    Name: storeData.movie[0].Name,
    Year_premiered: storeData.movie[0].Year_premiered,
    Genres: storeData.movie[0].Genres,
    Image_URL: storeData.movie[0].Image_URL,
  });

  const updateMovie = async () => {
    let obj = {
      Name: movie.Name,
      Year_premiered: movie.Year_premiered,
      Genres: movie.Genres,
      Image_URL: movie.Image_URL,
    };

    await utils.editMovie(storeData.movie[0]._id, obj);
    dispatch({ type: "ClearMovie" });
    navigate("/AllMovies");
  };

  function cancel() {
    dispatch({ type: "ClearMovie" });
    navigate("/AllMovies");
  }

  return (
    <div>
      <h3>Edit Movie: {storeData.movie[0].Name}</h3>
      Name:{" "}
      <input
        type="text"
        value={movie.Name}
        onChange={(e) => setMovie({ ...movie, Name: e.target.value })}
        name="Name"
        className="title_name"
      />
      <br />
      Genres:{" "}
      <input
        type="text"
        value={movie.Genres}
        onChange={(e) => setMovie({ ...movie, Genres: e.target.value })}
        name="Genres"
        className="title_genres"
      />
      <br />
      Image URL:{" "}
      <input
        type="text"
        value={movie.Image_URL}
        onChange={(e) => setMovie({ ...movie, Image_URL: e.target.value })}
        name="Image_URL"
        className="title_Image_URL"
      />
      <br />
      Premiered:{" "}
      <input
        type="text"
        value={movie.Year_premiered}
        onChange={(e) => setMovie({ ...movie, Year_premiered: e.target.value })}
        name="Premiered"
        className="title_Year_premiered"
      />
      <br />
      <br />
      <input
        type="button"
        value="Update"
        className="btn"
        onClick={updateMovie}
      />
      <input type="button" value="Cancel" className="btn" onClick={cancel} />
    </div>
  );
};

export default EditMovie;
