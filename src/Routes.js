import { useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { me } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Pre_Login_Page from "./components/login_create_account/Pre_Login_Page";
import Login_Page from "./components/login_create_account/Login_Page";
import Create_Account_Page from "./components/login_create_account/Create_Account_Page";
import Leaderboard_Page from "./components/leaderboard/Leaderboard_Page";
import Group_Details_Page from "./components/group_details/Group_Details_Page";
import Rules_Page from "./components/rules/Rules_Page";
import My_Picks_Locked_Page from "./components/my_picks/locked/My_Picks_Locked_Page";
import My_Picks_Unlocked_Page from "./components/my_picks/unlocked/My_Picks_Unlocked_Page";
import Pool_Picks_Page from "./components/pool_picks/Pool_Picks_Page";
import User_Admin_Page from "./components/admin/user/User_Admin_Page";

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
      {auth.email === "joe@gmail.com" && (
        <Route exact path="/admin/user" component={User_Admin_Page} />
      )}
      <Route exact path="/leaderboard" component={Leaderboard_Page} />
      <Route exact path="/my_picks" component={My_Picks_Locked_Page} />
      <Route
        exact
        path="/my_picks_edit_group"
        component={My_Picks_Unlocked_Page}
      />
      <Route
        exact
        path="/my_picks_edit_ko"
        component={My_Picks_Unlocked_Page}
      />
      <Route exact path="/pool_picks" component={Pool_Picks_Page} />
      <Route exact path="/group_details" component={Group_Details_Page} />
      <Route exact path="/rules" component={Rules_Page} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Pre_Login_Page} />
      <Route exact path="/login" component={Login_Page} />
      <Route exact path="/create_account" component={Create_Account_Page} />
      <Route exact path="/rules" component={Rules_Page} />
      {/* <Redirect to="/login" /> */}
    </Switch>
  );
};

export default withRouter(Routes);
