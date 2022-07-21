import { useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { me } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Pre_Login_Page from "./components/user_account/login/Pre_Login_Page";
import Sign_In_Page from "./components/userAccount/SignIn/Sign_In_Page";
import Login_Page_Leaderboard from "./components/leaderboard/Login_Page_Leaderboard";
import Create_Account_Page from "./components/userAccount/CreateAccount/Create_Account_Page";
import Action_Confirmation from "./components/userAccount/Action_Confirmation";
import Forgot_PW_Page from "./components/user_account/forgot_pw/Forgot_PW_Page";
import Reset_PW_Page from "./components/user_account/forgot_pw/Reset_PW_Page";
import Leaderboard_Page from "./components/leaderboard/Leaderboard_Page";
import Group_Details_Page from "./components/group_details/Group_Details_Page";
import Rules_Page from "./components/rules/Rules_Page";
import My_Picks_Locked_Page from "./components/my_picks/locked/My_Picks_Locked_Page";
import My_Picks_Unlocked_Page from "./components/my_picks/unlocked/My_Picks_Unlocked_Page";
import Pool_Picks_Page from "./components/pool_picks/Pool_Picks_Page";
import User_Profile_Page_L from "./components/UserAccount/UserProfile/Locked/User_Profile_Page_L";
import User_Profile_Page_UL from "./components/UserAccount/UserProfile/UnLocked/User_Profile_Page_UL";
import User_Admin_Page from "./components/admin/user/User_Admin_Page";
import Group_Admin_Page from "./components/admin/group/Group_Admin_Page";
import Team_Admin_Page from "./components/admin/team/Team_Admin_Page";
import NoMatch from "./components/Misc/No_Match";

const Routes = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  const token = window.localStorage.getItem("token");

  useEffect(() => dispatch(me()), []);

  const nonUserRoutes = [
    { path: "/", component: Pre_Login_Page },
    { path: "/sign_in", component: Sign_In_Page },
    { path: "/create_account", component: Create_Account_Page },
    {
      path: "/account_created",
      component: Action_Confirmation,
    },
    {
      path: "/pw_reset_confirmation",
      component: Action_Confirmation,
    },
    {
      path: "/forgot_pw_confirmation",
      component: Action_Confirmation,
    },
    { path: "/rules", component: Rules_Page },
    { path: "/leaderboard", component: Login_Page_Leaderboard },
    { path: "/forgot_pw", component: Forgot_PW_Page },
    { path: "/reset_pw/:id", component: Reset_PW_Page },
  ];

  return (
    <div>
      <Switch>
        {!token &&
          nonUserRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact
              component={route.component}
            />
          ))}

        <Route path="/rules" exact component={Rules_Page} />

        {token && (
          <Route exact path="/">
            <Redirect to="/leaderboard" />
          </Route>
        )}

        {user && user.email === "joe@gmail.com" && (
          <Route path="/admin/users">
            {!token ? <Redirect to="/" /> : <User_Admin_Page />}
          </Route>
        )}

        {user && user.email === "joe@gmail.com" && (
          <Route path="/admin/groups">
            {!token ? <Redirect to="/" /> : <Group_Admin_Page />}
          </Route>
        )}

        {user && user.email === "joe@gmail.com" && (
          <Route path="/admin/teams">
            {!token ? <Redirect to="/" /> : <Team_Admin_Page />}
          </Route>
        )}

        {user && user.email === "joe@gmail.com" && user.tourneyStage === 1 && (
          <Route path="/my_picks_edit_group">
            {!token ? <Redirect to="/" /> : <My_Picks_Unlocked_Page />}
          </Route>
        )}

        {user && user.email === "joe@gmail.com" && user.tourneyStage === 4 && (
          <Route path="/my_picks_edit_ko">
            {!token ? <Redirect to="/" /> : <My_Picks_Unlocked_Page />}
          </Route>
        )}

        <Route path="/leaderboard">
          {!token ? <Redirect to="/" /> : <Leaderboard_Page />}
        </Route>
        <Route path="/my_picks">
          {!token ? <Redirect to="/" /> : <My_Picks_Locked_Page />}
        </Route>
        <Route path="/pool_picks">
          {!token ? <Redirect to="/" /> : <Pool_Picks_Page />}
        </Route>
        <Route path="/group_details">
          {!token ? <Redirect to="/" /> : <Group_Details_Page />}
        </Route>
        <Route path="/my_profile">
          {!token ? <Redirect to="/" /> : <User_Profile_Page_L />}
        </Route>

        <Route path="/edit_profile_name">
          {!token ? <Redirect to="/" /> : <User_Profile_Page_UL />}
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );

  //   <Switch>
  //     {joe && joe.tourneyStage !== 1
  //       ? routeObjs[1]
  //           .filter((route) => route.path !== "/create_account")
  //           .map((route) => (
  //             <Route
  //               key={route.path}
  //               exact
  //               path={route.path}
  //               component={route.component}
  //             />
  //           ))
  //       : routeObjs[1].map((route) => (
  //           <Route
  //             key={route.path}
  //             exact
  //             path={route.path}
  //             component={route.component}
  //           />
  //         ))}
  //   </Switch>
  // );
};

export default withRouter(Routes);
