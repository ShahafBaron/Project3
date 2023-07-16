import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Header(props) {
  const LoggedOut = props.logout;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let fname = sessionStorage.getItem("fname");

  function GoToAllMovies() {
    navigate("/AllMovies");
  }
  function GoToSubscriptions() {
    navigate("/AllMembers");
  }
  function Logout() {
    dispatch({ type: "ClearMovie" });
    dispatch({ type: "ClearMember" });
    sessionStorage.clear("fname");
    LoggedOut(false);
    navigate("/");
  }

  return (
    <div>
      <h3>Welcome {fname}</h3>

      <input
        type="button"
        value="All Movies"
        className="btn"
        onClick={GoToAllMovies}
      />
      <input
        type="button"
        value="Subscriptions"
        className="btn"
        onClick={GoToSubscriptions}
      />
      <input type="button" value="Logout" className="btn" onClick={Logout} />
    </div>
  );
}

export default Header;
