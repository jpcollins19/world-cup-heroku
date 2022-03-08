import { useDispatch } from "react-redux";
import { logout } from "../../store";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import "./Headers.css";

const Header_U = () => {
  const dispatch = useDispatch();

  return (
    <div>
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
            Qatar World Cup
          </Typography>
        </Toolbar>
        <Toolbar sx={{ justifyContent: "center" }}>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#/leaderboard"
              sx={{ my: 1, mx: 1.5 }}
            >
              Leaderboard
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#/my_picks"
              sx={{ my: 1, mx: 1.5 }}
            >
              My Picks
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#/pool_picks"
              sx={{ my: 1, mx: 1.5 }}
            >
              Pool Picks
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#/group_details"
              sx={{ my: 1, mx: 1.5 }}
            >
              Group Details
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#rules"
              sx={{ my: 1, mx: 1.5 }}
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
