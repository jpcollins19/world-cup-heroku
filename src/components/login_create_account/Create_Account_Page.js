import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addUser, formatEmail, getUserNames } from "../../store";
import { makeStyles } from "@material-ui/core/styles";
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

const Create_Account_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState("");

  const users = useSelector((state) => state.users);
  const userNames = users && getUserNames(users);

  const userEmails = useSelector((state) => state.users).map(
    (user) => user.email
  );

  const classes = useStyles();

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const validateEmail = (inputText) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };

  const joe = useSelector((state) => state.users).find(
    (user) => user.name === "Joe"
  );

  if (!joe) {
    return null;
  }

  const inputs = [
    { label: "Email Address", name: "email", marginLeft: "25%", type: "" },
    { label: "Name", name: "name", marginLeft: "35%", type: "" },
    {
      label: "Password",
      name: "password",
      marginLeft: "30%",
      type: showPW ? "text" : "password",
    },
    {
      label: "Confirm Password",
      name: "password1",
      marginLeft: "20%",
      type: showPW ? "text" : "password",
    },
  ];

  const onChange = (ev) => {
    setError("");
    switch (ev.target.name) {
      case "email":
        setEmail(formatEmail(ev.target.value));
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
      if (!validateEmail(email)) {
        return setError("Email format not valid");
      }

      if (userEmails.includes(email)) {
        return setError("Email is already in use");
      }

      if (userNames.includes(formatEmail(name))) {
        return setError("Name is already in use");
      }

      if (password !== password1) {
        return setError("Password is not identical");
      }

      dispatch(addUser({ email, name, password }, history));
    } catch (err) {
      console.log("nugget", err);
    }
  };

  return (
    <main className="create-account-page">
      <div className="main-cont-create-account">
        <div className="main-cont1-create-account">
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
                  Create Account
                </Typography>
                <div className="error-cont-login">
                  {error && <Alert severity="error">{error}</Alert>}
                </div>
                <Box
                  component="form"
                  onSubmit={onSubmit}
                  sx={{ mt: 1 }}
                  display="flex"
                  flexDirection="column"
                >
                  {inputs.map((input, idx) => (
                    <TextField
                      key={idx}
                      onChange={onChange}
                      sx={{
                        margin: 0.5,
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
                    <button
                      disabled={!email || !name || !password || !password1}
                    >
                      Create Account
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
