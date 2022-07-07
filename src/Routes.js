import { useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { me } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Pre_Login_Page from "./components/user_account/login/Pre_Login_Page";
import Login_Page from "./components/user_account/login/Login_Page";
import Login_Page_Leaderboard from "./components/leaderboard/Login_Page_Leaderboard";
import Create_Account_Page from "./components/user_account/create_account/Create_Account_Page";
import Action_Confirmation from "./components/user_account/Action_Confirmation";
import Forgot_PW_Page from "./components/user_account/forgot_pw/Forgot_PW_Page";
import Reset_PW_Page from "./components/user_account/forgot_pw/Reset_PW_Page";
import Leaderboard_Page from "./components/leaderboard/Leaderboard_Page";
import Group_Details_Page from "./components/group_details/Group_Details_Page";
import Rules_Page from "./components/rules/Rules_Page";
import My_Picks_Locked_Page from "./components/my_picks/locked/My_Picks_Locked_Page";
import My_Picks_Unlocked_Page from "./components/my_picks/unlocked/My_Picks_Unlocked_Page";
import Pool_Picks_Page from "./components/pool_picks/Pool_Picks_Page";
import Edit_Name_Page from "./components/edit-name/Edit_Name_Page";
import User_Admin_Page from "./components/admin/user/User_Admin_Page";
import Group_Admin_Page from "./components/admin/group/Group_Admin_Page";
import Team_Admin_Page from "./components/admin/team/Team_Admin_Page";

const Routes = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  useEffect(() => dispatch(me()), []);

  const routeObjsAdmin = [
    { path: "/admin/users", component: User_Admin_Page },
    { path: "/admin/groups", component: Group_Admin_Page },
    { path: "/admin/teams", component: Team_Admin_Page },
  ];

  const routeObjs = [
    [
      { path: "/leaderboard", component: Leaderboard_Page },
      { path: "/my_picks", component: My_Picks_Locked_Page },
      { path: "/pool_picks", component: Pool_Picks_Page },
      { path: "/group_details", component: Group_Details_Page },
      { path: "/rules", component: Rules_Page },
      { path: "/edit_name", component: Edit_Name_Page },
    ],
    [
      { path: "/", component: Pre_Login_Page },
      { path: "/login", component: Login_Page },
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
    ],
  ];

  return auth.id ? (
    <Switch>
      {auth.email === "joe@gmail.com" &&
        routeObjsAdmin.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      {routeObjs[0].map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={route.component}
        />
      ))}
      {joe && joe.tourneyStage === 1 && (
        <Route
          exact
          path="/my_picks_edit_group"
          component={My_Picks_Unlocked_Page}
        />
      )}
      {joe && joe.tourneyStage === 4 && (
        <Route
          exact
          path="/my_picks_edit_ko"
          component={My_Picks_Unlocked_Page}
        />
      )}
    </Switch>
  ) : (
    <Switch>
      {joe && joe.tourneyStage !== 1
        ? routeObjs[1]
            .filter((route) => route.path !== "/create_account")
            .map((route) => (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            ))
        : routeObjs[1].map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
    </Switch>
  );
};

export default withRouter(Routes);
