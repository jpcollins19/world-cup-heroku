import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authenticate, formatEmail } from "../../store";
import { makeStyles } from "@material-ui/core/styles";
import { SpinnerCircularFixed } from "spinners-react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 2px black",
    borderRadius: "9px",
  },
}));

const Login_Page_Leaderboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPW, setShowPW] = useState(false);

  const [loading, setLoading] = useState(true);

  const joe = useSelector((state) => state.users).find(
    (user) => user.name === "Joe"
  );

  const inputs = [
    { label: "Email Address", name: "email", marginLeft: "25%", type: "" },
    {
      label: "Password",
      name: "password",
      marginLeft: "30%",
      type: showPW ? "text" : "password",
    },
  ];

  const classes = useStyles();

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const onChange = (ev) => {
    ev.target.name === "email"
      ? setEmail(formatEmail(ev.target.value))
      : setPassword(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      dispatch(authenticate(email, password, history));
      location.hash = "#/leaderboard";
    } catch (err) {
      console.log(err.response);
      setError(err.response);
    }
  };

  return loading ? (
    <div className="loading-cont">
      <SpinnerCircularFixed
        size={100}
        thickness={100}
        speed={147}
        color="white"
        secondaryColor="black"
      />
    </div>
  ) : (
    <main className="login-page">
      <div className="main-cont-login">
        <div className="main-cont1-login">
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
                <Typography component="h1" variant="h">
                  Sign in
                </Typography>

                <div className="error-cont-login">
                  <Alert severity="error">Invalid Email and/or Password</Alert>
                </div>
                <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
                  {inputs.map((input) => (
                    <TextField
                      key={input.name}
                      onChange={onChange}
                      sx={{
                        margin: 1,
                        padding: 0,
                        width: 275,
                      }}
                      margin="normal"
                      required
                      label={input.label}
                      variant="filled"
                      name={input.name}
                      InputProps={{ disableUnderline: true }}
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
                          marginLeft: input.marginLeft,
                        },
                      }}
                      className={classes.textField}
                      type={input.type}
                    />
                  ))}
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
                    {joe && joe.tourneyStage === 1 && (
                      <Link
                        to="/create_account"
                        style={{ textDecoration: "none" }}
                      >
                        <h4>Create Account</h4>
                      </Link>
                    )}
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

export default Login_Page_Leaderboard;
