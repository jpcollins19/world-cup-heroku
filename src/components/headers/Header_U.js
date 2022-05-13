import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useLocation } from "react-router-dom";
import "./Headers.css";

const Header_U = () => {
  const auth = useSelector((state) => state.auth);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const submittedPicks = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker !== null
  );

  return (
    <div className="header-cont">
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <div className="login-row">
          <div className="last-updated-cont">
            Last Updated: 10/20/21 at 10:36 pm CT
            <br></br>
            <div className="submitted-picks">
              # of submitted picks: {submittedPicks.length}
            </div>
          </div>
          <div onClick={() => dispatch(logout())} className="login-cont">
            <Link href="#/login" style={{ textDecoration: "none" }}>
              Sign Out
            </Link>
          </div>
        </div>
        <Toolbar>
          <Typography
            variant="h2"
            color="inherit"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Qatar 2022 World Cup
          </Typography>
        </Toolbar>
        <Toolbar sx={{ justifyContent: "center" }}>
          <nav>
            {auth.email === "joe@gmail.com" && (
              <Link
                variant="button"
                href="#/admin/user"
                sx={{ my: 1, mx: 1.5 }}
                color={pathname === "/admin/user" ? "#ede7f6" : "text.primary"}
                fontWeight="bold"
                backgroundColor={
                  pathname === "/admin/user" ? "#115293" : "inherit"
                }
                borderRadius="4rem"
                padding="7"
              >
                Admin - User
              </Link>
            )}
            {auth.email === "joe@gmail.com" && (
              <Link
                variant="button"
                href="#/admin/group"
                sx={{ my: 1, mx: 1.5 }}
                color={pathname === "/admin/group" ? "#ede7f6" : "text.primary"}
                fontWeight="bold"
                backgroundColor={
                  pathname === "/admin/group" ? "#115293" : "inherit"
                }
                borderRadius="4rem"
                padding="7"
              >
                Admin - Group
              </Link>
            )}
            <Link
              variant="button"
              href="#/leaderboard"
              sx={{ my: 1, mx: 1.5 }}
              color={pathname === "/leaderboard" ? "#ede7f6" : "text.primary"}
              fontWeight="bold"
              backgroundColor={
                pathname === "/leaderboard" ? "#115293" : "inherit"
              }
              borderRadius="4rem"
              padding="7"
            >
              Leaderboard
            </Link>
            <Link
              variant="button"
              href="#/my_picks"
              sx={{ my: 1, mx: 1.5 }}
              color={pathname === "/my_picks" ? "#ede7f6" : "text.primary"}
              fontWeight="bold"
              backgroundColor={pathname === "/my_picks" ? "#115293" : "inherit"}
              borderRadius="4rem"
              padding="7"
            >
              My Picks
            </Link>
            <Link
              variant="button"
              href="#/pool_picks"
              sx={{ my: 1, mx: 1.5 }}
              color={pathname === "/pool_picks" ? "#ede7f6" : "text.primary"}
              fontWeight="bold"
              backgroundColor={
                pathname === "/pool_picks" ? "#115293" : "inherit"
              }
              borderRadius="4rem"
              padding="7"
            >
              Pool Picks
            </Link>
            <Link
              variant="button"
              href="#/group_details"
              sx={{ my: 1, mx: 1.5 }}
              color={pathname === "/group_details" ? "#ede7f6" : "text.primary"}
              fontWeight="bold"
              backgroundColor={
                pathname === "/group_details" ? "#115293" : "inherit"
              }
              borderRadius="4rem"
              padding="7"
            >
              Group Details
            </Link>
            <Link
              variant="button"
              href="#rules"
              sx={{ my: 1, mx: 1.5 }}
              color={pathname === "/rules" ? "#ede7f6" : "text.primary"}
              fontWeight="bold"
              backgroundColor={pathname === "/rules" ? "#115293" : "inherit"}
              borderRadius="4rem"
              padding="7"
            >
              Rules / General Information
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header_U;
