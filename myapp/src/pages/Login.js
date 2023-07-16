import React, { useState } from "react";
import utils from "../utils/utils";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const validLoggedIn = props.login;

  const [user, setUser] = useState({ Username: "", Password: "" });
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [validUserMsg, setValidUserMsg] = useState(false);
  const navigate = useNavigate();

  const customSubmit = async (e) => {
    e.preventDefault();
    if (user.Username !== "" && user.Password !== "") {
      setShowErrorMsg(false);
    } else {
      setShowErrorMsg(true);
    }
  };

  const userValidation = async () => {
    let valid = await utils.userPost(user.Username, user.Password);

    if (valid) {
      sessionStorage["fname"] = valid;
      setValidUserMsg(false);
      validLoggedIn(true);
      navigate("/AllMovies");
    } else {
      setValidUserMsg(true);
    }
  };

  return (
    <div className="App">
      <h3>Login Page</h3>

      <form onSubmit={customSubmit}>
        User Name:{" "}
        <input
          type="text"
          onChange={(e) => setUser({ ...user, Username: e.target.value })}
          name="User_name"
          className="title_name"
        />
        <br />
        Password:{" "}
        <input
          type="password"
          onChange={(e) => setUser({ ...user, Password: e.target.value })}
          name="Password"
          className="title_password"
        />
        <br />
        <input
          type="submit"
          value="Login"
          className="btn"
          onClick={userValidation}
        />
        {showErrorMsg && <div>Enter Both Username and Password!</div>}
        {validUserMsg && <div>Enter Valid Username and Password!</div>}
      </form>
    </div>
  );
}
export default Login;
