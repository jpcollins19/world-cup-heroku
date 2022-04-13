import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../store";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 2px black",
    borderRadius: "9px",
  },
}));

const Login_Page = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState("");

  const classes = useStyles();

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const joe = useSelector((state) => state.users).find(
    (user) => user.name === "Joe"
  );

  if (!joe) {
    return null;
  }

  const onChange = (ev) => {
    ev.target.name === "email"
      ? setEmail(ev.target.value)
      : setPassword(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      dispatch(authenticate(email, password));
      location.hash = "#/leaderboard";
    } catch (err) {
      console.log(err.response);
      setError(err.response);
    }
  };

  return (
    <main id="login-page">
      <div className="main-cont-login">
        <div className="main-cont1-login">
          <div id="main-text-container-login" className="black-text">
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
                  Sign in
                </Typography>

                <div className="error-cont-login">
                  <Alert severity="error">Alert goes here blah blah blah</Alert>
                </div>
                <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
                  <TextField
                    onChange={onChange}
                    sx={{
                      margin: 1,
                      padding: 0,
                      width: 275,
                    }}
                    margin="normal"
                    required
                    label="Email Address"
                    name="email"
                    inputProps={{
                      style: {
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        color: "black",
                        marginLeft: "25%",
                      },
                    }}
                    className={classes.textField}
                  />
                  <TextField
                    onChange={onChange}
                    sx={{
                      margin: 1,
                      padding: 0,
                      width: 275,
                    }}
                    margin="normal"
                    required
                    label="Password"
                    name="password"
                    inputProps={{
                      style: {
                        textAlign: "center",
                        color: "black",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        textAlign: "center",
                        color: "black",
                        marginLeft: "30%",
                      },
                    }}
                    className={classes.textField}
                    // type={showPW ? "text" : "password"}
                  />
                  <div className="view-pw" onClick={() => showPwClick()}>
                    View Password
                  </div>
                  <div className="button-cont">
                    <button disabled={!email || !password}>
                      <span className="button_top"> Sign In</span>
                    </button>
                  </div>
                  <div className="forgot-pw-cont">
                    <Link to="/forgot_pw" style={{ textDecoration: "none" }}>
                      <h4>Forgot Password</h4>
                    </Link>
                    <Link
                      to="/create_account"
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Create Account</h4>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <h4>Cancel</h4>
                    </Link>
                  </div>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login_Page;
