import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./User_Profile.css";

const User_Profile = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="edit-name-page">
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
                  My Profile
                </Typography>
                <div className="input-cont profile">
                  <h4>Name: </h4>
                  <div>{auth && auth.name}</div>
                </div>
                <Link to="/edit_name">Edit Name</Link>
                <Link to="/change_password">Change Password</Link>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Profile;
