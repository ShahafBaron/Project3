import React, { useState, useEffect } from "react";
import utils from "../utils/utils";

function SubPage(props) {
  const changeDisplay = props.showAddSub;
  const [movies, setMovies] = useState([]);
  const [newSub, setNewSub] = useState({});
  const [filteredArr, setFilteredArr] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      let resp = await utils.getAllMovies();
      setMovies(resp.data);
      movies.forEach((item) => {
        let Watched = props.subscribe.some(
          (element) => item._id === element.MovieID
        );

        if (!Watched) {
          setFilteredArr((filteredArr) => [
            ...filteredArr,
            {
              _id: item._id,
              Name: item.Name,
            },
          ]);
        }
      });
    };
    getMovies();
  }, []);

  const addNewSub = async () => {
    let obj = {
      Date: newSub.Date,
    };
    await utils.addSubscription(props.MemberID, newSub.MovieID, obj);
    changeDisplay(false);
  };

  function onSelect(event) {
    const selectedIndex = event.target.options.selectedIndex;
    setNewSub({
      ...newSub,
      MovieID: event.target.options[selectedIndex].getAttribute("movieid"),
    });
  }

  return (
    <div
      style={{
        width: "250px",
        height: "fit",
        border: "solid red 4px",
      }}
    >
      <h5>Add a new movie</h5>
      <select onChange={onSelect}>
        {filteredArr.map((item) => {
          return (
            <option key={item._id} movieid={item._id} value={item.Name}>
              {item.Name}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        onChange={(e) => setNewSub({ ...newSub, Date: e.target.value })}
        placeholder="DD/MM/YYYY"
        name="Date"
        className="title_date"
      />
      <br />
      <input
        type="button"
        value="Subscribe"
        className="btn"
        onClick={addNewSub}
      />
    </div>
  );
}

export default SubPage;
