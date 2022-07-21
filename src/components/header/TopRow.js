import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { me } from "../../store";
import Link from "@mui/material/Link";
import User_Profile_Dropdown from "../userAccount/User_Profile_Dropdown";
import LastUpdated from "./LastUpdated";

const TopRow = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(me()), []);

  const auth = useSelector((state) => state.auth);

  return (
    <div className="login-row">
      <LastUpdated />
      <div className="login-cont">
        {auth.id ? (
          <User_Profile_Dropdown />
        ) : (
          <Link
            href="#/sign_in"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopRow;
