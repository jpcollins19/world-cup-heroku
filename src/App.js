import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { loadUsers, loadTeams, me } from "./store";
import Header_U from "./components/headers/Header_U";
import Header_NU from "./components/headers/Header_NU";
import Routes from "./Routes";

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
      <Routes />
    </Router>
  );
};

export default App;
