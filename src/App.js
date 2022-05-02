import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { loadUsers, loadTeams } from "./store";
import Header_U from "./components/headers/Header_U";
import Header_NU from "./components/headers/Header_NU";
import Routes from "./Routes";
import "./components/headers/Headers.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTeams());
  }, []);

  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      {auth.id ? <Header_U /> : <Header_NU />}
      <div className="body-cont">
        <Routes />
      </div>
    </Router>
  );
};

export default App;
