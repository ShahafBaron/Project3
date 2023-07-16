import React, { useState } from "react";
import utils from "../utils/utils";

const AddMovie = (props) => {
  
  const changeDisplay = props.showAddMovie;

  const [movie, setMovie] = useState({
    Name: "",
    Year_premiered: "",
    Genres: "",
    Image_URL: "",
  });

  const addNewMovie = async () => {
    let obj = {
      Name: movie.Name,
      Year_premiered: movie.Year_premiered,
      Genres: movie.Genres,
      Image_URL: movie.Image_URL,
    };
    await utils.addMovieToDB(obj);
    changeDisplay(true);
  };

  return (
    <div>

      Name:{" "}
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, Name: e.target.value })}
        name="Name"
        className="title_name"
      />
      <br />
      Genres:{" "}
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, Genres: e.target.value })}
        name="Genres"
        className="title_genres"
      />
      <br />
      Image URL:{" "}
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, Image_URL: e.target.value })}
        name="Image_URL"
        className="title_Image_URL"
      />
      <br />
      Premiered:{" "}
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, Year_premiered: e.target.value })}
        name="Premiered"
        className="title_Year_premiered"
      />
      <br />
      <br />
      <input type="button" value="Save" className="btn" onClick={addNewMovie} />
      <input type="button" value="Cancel" className="btn" onClick={() => changeDisplay(true)} />
    </div>
  );
};

export default AddMovie;
