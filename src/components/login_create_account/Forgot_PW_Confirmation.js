import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Forgot_PW_Confirmation = () => {
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
                <Typography className="white-text" component="h4" variant="h">
                  We have successfully sent instructions for resetting your
                  password to the email address you provided. Please follow the
                  email instructions to reset your password. It may take a few
                  minutes to receive the email.
                </Typography>
                <div className="email-instructions white-text">
                  <ul>
                    If you don't receive the email:
                    <li>Check your junk mail folder</li>
                    <li>
                      or to re-send the email,{" "}
                      <Link style={{ textDecoration: "none" }} to="forgot_pw">
                        click here
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="click-to-sign-in-f">
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

export default Forgot_PW_Confirmation;
