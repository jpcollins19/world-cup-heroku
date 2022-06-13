import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from "../../store";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import "./Edit_Name.css";

const Edit_Name_Page = () => {
  const auth = useSelector((state) => state.auth);

  const userNames = useSelector((state) => state.users).map((user) => {
    const name = user.name
      .split("")
      .map((letter) => letter.toLowerCase())
      .join("");
    return name;
  });

  return (
    <main className="edit-name-page">
      <div className="main-cont-edit-name">
        <div className="main-cont1-edit-name">
          <div className="main-text-container-edit-name black-text">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h">
                  Edit Name
                </Typography>
                <div className="error-cont-login">
                  <Alert severity="error">Alert goes here blah blah blah</Alert>
                </div>
                <input defaultValue={auth && auth.name}></input>
                <Link to="/my_picks">
                  <button>Submit</button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/my_picks">
                  cancel
                </Link>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Edit_Name_Page;
