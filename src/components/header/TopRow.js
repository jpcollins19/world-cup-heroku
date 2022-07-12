import { useSelector } from "react-redux";
import Link from "@mui/material/Link";
import User_Details_Dropdown from "../user_account/user_details/User_Details_Dropdown";
import LastUpdated from "./LastUpdated";

const TopRow = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="login-row">
      <LastUpdated />
      <div className="login-cont">
        {auth.id ? (
          <User_Details_Dropdown />
        ) : (
          <Link href="#/login" style={{ textDecoration: "none" }}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopRow;
