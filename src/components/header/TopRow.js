import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store";
import Link from "@mui/material/Link";
import LastUpdated from "./LastUpdated";

const TopRow = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  return (
    <div className="login-row">
      <LastUpdated />
      {auth.id ? (
        <div className="login-cont" onClick={() => dispatch(logout())}>
          <Link href="#/login" style={{ textDecoration: "none" }}>
            Sign Out
          </Link>
        </div>
      ) : (
        <div className="login-cont">
          <Link href="#/login" style={{ textDecoration: "none" }}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopRow;
