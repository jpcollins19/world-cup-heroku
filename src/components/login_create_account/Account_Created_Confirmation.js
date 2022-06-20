import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Account_Created_Confirmation = () => {
  return (
    <main className="create-account-page">
      <div className="main-cont-account-created">
        <div className="account-created">
          <div className="main-text-container-login black-text">
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
                <div className="account-created-header"></div>
                <Typography className="white-text" component="h1" variant="h">
                  Account Succesfully Created!
                </Typography>
                <div className="click-to-sign-in">
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Click here to sign in
                  </Link>
                </div>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account_Created_Confirmation;
