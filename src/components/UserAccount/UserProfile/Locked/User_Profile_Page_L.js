import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { me } from "../../../../store";
import Loading from "../../../Misc/Loading";
// import Name from "../../../MyPicks/Name";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const User_Profile_Page = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.auth);

  if (!user) return null;

  useEffect(() => {
    dispatch(me());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const options = [
    { route: "/edit_profile_name", text: "Edit Name" },
    { route: "/edit_profile_pw", text: "Change Password" },
  ];

  const inputs = [
    { text: "My Profile:", component: "h1" },
    { text: user && user.name, component: "h2" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="user-profile-page"
    >
      {loading ? (
        <Loading />
      ) : (
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
                {inputs.map((input) => (
                  <Typography
                    key={input.text}
                    className="white-text"
                    component={input.component}
                    variant="h"
                    sx={{
                      color: "white",
                      margin: "1rem",
                    }}
                  >
                    {input.text}
                  </Typography>
                ))}
                <div className="user-profile-options">
                  {options.map((option) => (
                    <Link
                      key={option.route}
                      to={option.route}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {option.text}
                    </Link>
                  ))}
                </div>
              </Box>
            </Container>
          </div>
        </div>
      )}
    </Box>
  );
};

export default User_Profile_Page;
