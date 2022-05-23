import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 2px black",
    borderRadius: "9px",
  },
}));

const Create_Account_Page = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
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
    switch (ev.target.name) {
      case "email":
        setEmail(ev.target.value);
        break;
      case "name":
        setName(ev.target.value);
        break;
      case "password":
        setPassword(ev.target.value);
        break;
      case "password1":
        setPassword1(ev.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      dispatch(addUser({ email, name, password }));
      location.hash = "#/login";
    } catch (err) {
      console.log(err.response);
      setError(err.response);
    }
  };

  return (
    <main id="create-account-page">
      <div className="main-cont-create-account">
        <div className="main-cont1-create-account">
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
                  Create Account
                </Typography>
                <div className="error-cont-login">
                  <Alert severity="error">Alert goes here blah blah blah</Alert>
                </div>
                <Box
                  component="form"
                  onSubmit={onSubmit}
                  sx={{ mt: 1 }}
                  display="flex"
                  flexDirection="column"
                >
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
                    variant="filled"
                    name="email"
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
                    label="Name"
                    variant="filled"
                    name="name"
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
                        marginLeft: "35%",
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
                    variant="filled"
                    name="password"
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
                        marginLeft: "30%",
                      },
                    }}
                    className={classes.textField}
                    // type={showPW ? "text" : "password"}
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
                    label="Confirm Password"
                    variant="filled"
                    name="password1"
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
                        marginLeft: "20%",
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
                      <span className="button_top"> Submit</span>
                    </button>
                  </div>
                  <div className="forgot-pw-cont">
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

export default Create_Account_Page;
