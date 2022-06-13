import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { urlWord } from "../../store";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import TopRow from "./TopRow";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  const auth = useSelector((state) => state.auth);
  const adminOptions = ["users", "groups", "teams"];
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
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <TopRow />
        <Toolbar>
          <Typography
            variant="h2"
            color="inherit"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              cursor: "default",
              zIndex: 5,
            }}
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
