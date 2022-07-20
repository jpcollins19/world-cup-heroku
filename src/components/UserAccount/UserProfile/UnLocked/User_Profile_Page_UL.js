import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserNames, formatEmail, updateUser } from "../../../../store";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../Misc/Loading";
import Error from "../../../Misc/Error";
import Button from "../../../Misc/Button";
import Cancel from "../../../Misc/Cancel";
import Input_Cont from "./Input_Cont";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const User_Profile_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.auth);

  if (!user) return null;

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  setTimeout(() => {
    name === null && setName(user.name);
    setLoading(false);
  }, 1000);

  const userNames = getUserNames(useSelector((state) => state.users));

  const messageSent = () => {
    toast(
      `Thank you Joe!\n\nYour information has been sent to Adam Hoover, he will respond shortly.`,
      { duration: 50000 }
    );
  };

  const onChange = (ev) => {
    setError(null);
    setName(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      if (userNames.includes(formatEmail(name)))
        return setError("Name is already in use");

      const userObj = {
        id: user.id,
        name,
      };

      dispatch(updateUser(userObj, history, "my_profile"));
      messageSent();
    } catch (err) {
      console.log(err);
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
      className="user-profile-page"
    >
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={onSubmit}
          id="update-profile"
          className="user-profile-page"
        >
          <div className="user-profile-outside">
            <div className="user-profile-inside">
              <Container component="main" maxWidth="xs">
                <Box
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h"
                    sx={{
                      color: "yellow",
                      // mb: ".5rem",
                    }}
                  >
                    Edit Name
                  </Typography>

                  {error ? (
                    <Error error={error} />
                  ) : (
                    <Button text={"Submit"} form={"update-profile"} />
                  )}

                  <Input_Cont
                    onChange={onChange}
                    name={"Name"}
                    defaultValue={name}
                  />

                  <Cancel link="/my_profile" />
                </Box>
              </Container>
            </div>
          </div>
          <Toaster
            toastOptions={{
              className: "toaster-submit-confirmation",
            }}
          />
        </form>
      )}
    </Box>
  );
};

export default User_Profile_Page;
