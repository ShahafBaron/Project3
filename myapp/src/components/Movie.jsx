import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import utils from "../utils/utils";
import Watched from "./Watched";

function Movie(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function EditMovie() {
    dispatch({ type: "EditMovie", payload: props.movie });
    navigate("/EditMovie");
  }

  const DeleteMovie = async () => {
    await utils.deleteSingleMovie(props.movie._id);
  };

  return (
    <div>
      <div style={{ width: "400px", height: "fit", border: "solid black 4px" }}>
        <h3>
          {props.movie.Name}, {props.movie.Year_premiered}
        </h3>
        <div>
          genres:
          {props.movie.Genres?.map((item) => {
            return <span key={item}> "{item}",</span>;
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            style={{ width: "75px", height: "100px", margin: "10px" }}
            src={props.movie.Image_URL}
            alt="Movie Cover"
          />
          <Watched MovieID={props.movie._id} flag={1} key={props.movie._id} />
        </div>

        <input type="button" value="Edit" className="btn" onClick={EditMovie} />

        <input
          type="button"
          value="Delete"
          className="btn"
          onClick={DeleteMovie}
        />
      </div>
      <br />
    </div>
  );
}

export default Movie;
