import React, { useState, useEffect, useCallback } from "react";
import utils from "../utils/utils";
import Movie from "../components/Movie";
import AddMovie from "../components/AddMovie";

function Movies() {
  const [showDefault, setShowDefault] = useState(true);
  const [movies, setMovies] = useState([]);
  const [find, setFind] = useState(" ");

  const showAddMovie = useCallback(() => {
    setShowDefault(true);
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      let resp = await utils.getAllMovies();
      setMovies(resp.data);
    };
    getMovies();
  }, [find]);

  function findMovie() {
    setMovies(
      movies.filter(
        (item) =>
          item.Name.startsWith(find) || item.Year_premiered.startsWith(find)
      )
    );
  }

  return (
    <div style={{ width: "99%", border: "solid black 4px" }}>
      <h1>Movies</h1>
      <span>
        <input
          type="button"
          value="All Movies"
          className="btn"
          onClick={() => setShowDefault(true)}
        />
        <input
          type="button"
          value="Add Movie"
          className="btn"
          onClick={() => setShowDefault(false)}
        />
      </span>

      <div>
        {showDefault ? (
          <div>
            Find Movie:{" "}
            <input
              type="text"
              placeholder="by Name or Year"
              onChange={(e) => setFind(e.target.value)}
              name="find"
              className="find"
            />
            <input
              type="button"
              value="Find"
              className="btn"
              onClick={findMovie}
            />
            {movies.map((item) => {
              return <Movie movie={item} key={item._id} />;
            })}
          </div>
        ) : (
          <div>
            <AddMovie showAddMovie={showAddMovie} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
