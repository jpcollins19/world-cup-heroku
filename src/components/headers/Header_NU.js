import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import "./Headers.css";

const Header_NU = () => {
  return (
    <div>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <div className="login-row">
          <div className="last-updated-cont-NU">{""}</div>
          <div className="login-cont">
            <Link href="#/login" style={{ textDecoration: "none" }}>
              Sign In
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
              href="#/rules"
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

export default Header_NU;
