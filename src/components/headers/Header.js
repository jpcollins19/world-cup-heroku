import { useDispatch, useSelector } from "react-redux";
import { logout, urlWord } from "../../store";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useLocation } from "react-router-dom";
import "./Headers.css";

const Header = () => {
  const auth = useSelector((state) => state.auth);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const submittedPicks = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker !== null
  );

  const adminOptions = ["users", "groups"];

  const navOptions = ["leaderboard", "my picks", "pool picks", "group details"];

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
          <div
            className={auth.id ? "last-updated-cont" : "last-updated-cont-NU"}
          >
            {auth.id ? " Last Updated: 10/20/21 at 10:36 pm CT" : ""}
            {auth.id && <br></br>}
            {auth.id && (
              <div className="submitted-picks">
                # of submitted picks: {submittedPicks.length}
              </div>
            )}
          </div>
          {auth.id ? (
            <div className="login-cont" onClick={() => dispatch(logout())}>
              <Link href="#/login" style={{ textDecoration: "none" }}>
                Sign Out
              </Link>
            </div>
          ) : (
            <div className="login-cont">
              <Link href="#/login" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </div>
          )}
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
            {auth.email === "joe@gmail.com" &&
              adminOptions.map((word) => (
                <Link
                  key={word}
                  variant="button"
                  href={`#/admin/${urlWord(word)}`}
                  sx={{ my: 1, mx: 1.5 }}
                  color={
                    pathname === `/admin/${urlWord(word)}`
                      ? "#ede7f6"
                      : "text.primary"
                  }
                  fontWeight="bold"
                  backgroundColor={
                    pathname === `/admin/${urlWord(word)}`
                      ? "#115293"
                      : "inherit"
                  }
                  borderRadius="4rem"
                  padding="7"
                >
                  Admin - {word}
                </Link>
              ))}
            {auth.id &&
              navOptions.map((word) => (
                <Link
                  key={word}
                  variant="button"
                  href={`#/${urlWord(word)}`}
                  sx={{ my: 1, mx: 1.5 }}
                  color={
                    pathname === `/${urlWord(word)}`
                      ? "#ede7f6"
                      : "text.primary"
                  }
                  fontWeight="bold"
                  backgroundColor={
                    pathname === `/${urlWord(word)}` ? "#115293" : "inherit"
                  }
                  borderRadius="4rem"
                  padding="7"
                >
                  {word}
                </Link>
              ))}
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

export default Header;
