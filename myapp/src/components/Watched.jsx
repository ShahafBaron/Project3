import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import utils from "../utils/utils";
import SubPage from "./SubPage";

function Watched(props) {
  const [subscribe, setSubscribe] = useState([]);
  const [whatToShow, setWhatToShow] = useState(true);
  const [subToMovie, setSubToMovie] = useState(false);

  useEffect(() => {
    switch (props.flag) {
      case 1:
        setWhatToShow(true);
        const getSubscription = async () => {
          let resp = await utils.getSubWatched(props.MovieID);
          setSubscribe(resp.data);
        };
        getSubscription();
        break;
      case 2:
        setWhatToShow(false);
        const getSubscribedTo = async () => {
          let resp = await utils.getSubTo(props.MemberID);
          setSubscribe(resp.data);
        };
        getSubscribedTo();
        break;
    }
  }, [subToMovie]);

  const showAddSub = useCallback(() => {
    setSubToMovie(false);
  }, []);

  return (
    <div
      style={{
        width: "300px",
        height: "fit",
        margin: "10px",
        border: "solid black 4px",
      }}
    >
      {whatToShow ? (
        <div>
          <span style={{ fontWeight: "bold" }}>Subscription Watched</span>
          <ul>
            {subscribe.map((item) => {
              return (
                <li key={item.SubscriptionID}>
                  <Link to={"/Member/" + item.MemberID}>{item.Full_name}</Link>,{" "}
                  {item.Date}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <div style={{ fontWeight: "bold" }}>Movies Watched</div>
          <input
            type="button"
            value="Subscribe to new movie"
            className="btn"
            onClick={() => setSubToMovie(!subToMovie)}
          />
          {subToMovie && (
            <div>
              <SubPage
                subscribe={subscribe}
                MemberID={props.MemberID}
                showAddSub={showAddSub}
              />
            </div>
          )}
          <ul>
            {subscribe.map((item) => {
              return (
                <li key={item.SubscriptionID}>
                  <Link to={"/Movie/" + item.MovieID}>{item.Name}</Link>,{" "}
                  {item.Date}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Watched;
