import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { loadUsers, loadTeams } from "./store";
import Header from "./components/headers/Header";
import Routes from "./Routes";
import "./components/headers/Headers.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTeams());
  }, []);

  return (
    <Router>
      <Header />
      <div className="body-cont">
        <Routes />
      </div>
    </Router>
  );
};

export default App;
