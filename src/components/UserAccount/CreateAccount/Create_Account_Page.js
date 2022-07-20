import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  addUser,
  formatEmail,
  validateEmail,
  getUserNames,
} from "../../../store";
import Error from "../../Misc/Error";
import Button from "../../Misc/Button";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 2px yellow",
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
  const [error, setError] = useState(null);

  const classes = useStyles();

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const inputs = [
    { label: "Email Address", name: "Email", marginLeft: "20%", type: "" },
    { label: "Name", name: "Name", marginLeft: "35%", type: "" },
    {
      label: "Password",
      name: "Password",
      marginLeft: "28%",
      type: showPW ? "text" : "password",
    },
    {
      label: "Confirm Password",
      name: "Password1",
      marginLeft: "18%",
      type: showPW ? "text" : "password",
    },
  ];

  const options = [
    { route: "/sign_in", text: "Sign In here" },
    { route: "/forgot_pw", text: "Forgot Password" },
    { route: "/", text: "Cancel" },
  ];

  const users = useSelector((state) => state.users);

  const userEmails = users.map((user) => user.email);

  const userNames = getUserNames(users);

  const onChange = (ev) => {
    setError(null);

    const set = eval(`set${ev.target.name}`);

    ev.target.name === "Email"
      ? set(formatEmail(ev.target.value))
      : set(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      if (!validateEmail(email)) return setError("Invalid Email Address");

      if (userEmails.includes(email))
        return setError("Email is already in use");

      if (userNames.includes(formatEmail(name)))
        return setError("Name is already in use");

      if (password !== password1) return setError("Password is not identical");

      const user = {
        email,
        name,
        password,
      };

      dispatch(addUser(user, history));
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="100vh"
      className="create-account-page"
    >
      <div className="create-account-cont-outside white-text">
        <div className="create-account-cont-inside">
          <div>
            <Container component="main" maxWidth="s">
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
                <Error error={error} />
                <Box
                  component="form"
                  onSubmit={onSubmit}
                  id="create-account"
                  sx={{ mt: 1 }}
                  display="flex"
                  flexDirection="column"
                >
                  {inputs.map((input) => (
                    <TextField
                      key={input.name}
                      onChange={onChange}
                      sx={{
                        margin: 1,
                        padding: 0,
                      }}
                      margin="normal"
                      required
                      fullWidth
                      label={input.label}
                      variant="filled"
                      name={input.name}
                      InputProps={{ disableUnderline: true }}
                      inputProps={{
                        style: {
                          textAlign: "center",
                          color: "#ECEFF1",
                          fontWeight: "bold",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          textAlign: "center",
                          color: "#ECEFF1",
                          marginLeft: input.marginLeft,
                        },
                      }}
                      className={classes.textField}
                      type={input.type}
                    />
                  ))}
                  <div className="view-pw" onClick={() => showPwClick()}>
                    View Passwords
                  </div>
                  <Button
                    text="Create Account"
                    disabled={!email || !name || !password || !password1}
                    form="create-account"
                  />
                  {options.map((option) => (
                    <div key={option.text} className="option-cont">
                      {option.route === "/sign_in" && (
                        <div>Already have an account?</div>
                      )}
                      <Link
                        to={option.route}
                        style={{ textDecoration: "none" }}
                      >
                        <h4 className="white-text">{option.text}</h4>
                      </Link>
                    </div>
                  ))}
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Create_Account_Page;
