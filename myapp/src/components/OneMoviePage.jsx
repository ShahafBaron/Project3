import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import utils from "../utils/utils";
import Watched from "./Watched";

function Movie() {
  const params = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      let resp = await utils.getSingleMovie(params.id);
      setMovie(resp.data);
    };
    getMovie();
  }, [params.id]);

  function EditMovie() {
    dispatch({ type: "EditMovie", payload: movie });
    navigate("/EditMovie");
  }

  const DeleteMovie = async () => {
    await utils.deleteSingleMovie(movie._id);
  };

  return (
    <div>
      <div style={{ width: "400px", height: "fit", border: "solid black 4px" }}>
        <h3>
          {movie.Name}, {movie.Year_premiered}
        </h3>
        <div>
          genres:
          {movie.Genres?.map((item) => {
            return <span key={item}> "{item}",</span>;
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            style={{ width: "75px", height: "100px", margin: "10px" }}
            src={movie.Image_URL}
            alt="Movie Cover"
          />
          <Watched MovieID={params.id} flag={1} key={params.id} />
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
