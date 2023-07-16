import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function GoToAllMovies() {
    navigate("/AllMovies");
  }
  function GoToSubscriptions() {
    navigate("/AllMembers");
  }
  function Logout() {
    navigate("/")
  }

  return (
    <div>
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

export default Home;
