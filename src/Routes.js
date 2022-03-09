import { useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { me } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Pre_Login_Page from "./components/login_create_account/Pre_Login_Page";
import Login_Page from "./components/login_create_account/Login_Page";
import Create_Account_Page from "./components/login_create_account/Create_Account_Page";
import Leaderboard_Page from "./components/leaderboard/Leaderboard_Page";
import Group_Details_Page from "./components/group_details/Group_Details_Page";

const Routes = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => dispatch(me()), []);

  const joe = useSelector((state) => state.users).find(
    (user) => user.name === "Joe"
  );

  if (!auth || !joe) {
    return null;
  }

  return auth.id ? (
    <Switch>
      <Route exact path="/leaderboard" component={Leaderboard_Page} />
      <Route exact path="/group_details" component={Group_Details_Page} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Pre_Login_Page} />
      <Route exact path="/login" component={Login_Page} />
      <Route exact path="/create_account" component={Create_Account_Page} />
    </Switch>
  );
};

export default withRouter(Routes);
