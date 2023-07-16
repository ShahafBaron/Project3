import "./App.css";
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Members from "./pages/Members";
import Header from "./components/Header";
import EditMovie from "./components/EditMovie";
import EditMember from "./components/EditMember";
import OneMemberPage from "./components/OneMemberPage";
import OneMoviePage from "./components/OneMoviePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/AllMovies" exact element={<Movies />} />
        <Route path="/EditMovie" exact element={<EditMovie />} />
        <Route path="/AllMembers" exact element={<Members />} />
        <Route path="/EditMember" exact element={<EditMember />} />
        <Route path="/Member/:id" exact element={<OneMemberPage />} />
        <Route path="/Movie/:id" exact element={<OneMoviePage />} />
      </>
    );
  } else {
    routes = <Route path="/" exact element={<Login login={login} />} />;
  }

  return (
    <div>
      <h1>Movies - Subscriptions Web Site</h1>
      <div>
        {isLoggedIn ? <Header logout={logout} /> : null}
        <Routes>{routes}</Routes>
      </div>
    </div>
  );
}

export default App;
