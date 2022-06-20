import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateUser, getUserNames } from "../../store";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import "./Edit_Name.css";

const Edit_Name_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);

  const [name, setName] = useState(auth.name);
  const [error, setError] = useState(null);

  const users = useSelector((state) => state.users);

  const userNames = users && getUserNames(users);

  const onChange = (ev) => {
    setName(ev.target.value);
    setError(null);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const nameLowerCased = name
        .split("")
        .map((letter) => letter.toLowerCase())
        .join("");

      if (userNames.includes(nameLowerCased)) {
        return setError("Name already in Use");
      }

      const obj = {
        id: auth && auth.id,
        name,
      };

      dispatch(updateUser(obj, history, "name"));
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="edit-name-page">
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
                <div className="error-cont-login-edit-name">
                  {error && <Alert severity="error">{error}</Alert>}
                </div>
                <input
                  onChange={onChange}
                  defaultValue={auth && auth.name}
                ></input>
                <button>Submit</button>
                <Link style={{ textDecoration: "none" }} to="/my_picks">
                  cancel
                </Link>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Edit_Name_Page;
