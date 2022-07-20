import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logout } from "../../../store";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import UserIcon from "@mui/icons-material/AccountBox";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

const User_Details_Dropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button ref={ref} onClick={onMouseEnter}>
          <UserIcon sx={{ fontSize: 50 }} />
        </Button>
        <Popper
          open={dropdown}
          anchorEl={ref.current}
          placement="bottom-start"
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={onMouseLeave}>
                  <MenuList
                    autoFocusItem={dropdown}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <Link style={{ textDecoration: "none" }} to="/profile">
                      <MenuItem>My Profile</MenuItem>
                    </Link>

                    <MenuItem onClick={() => dispatch(logout(history))}>
                      Sign Out
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default User_Details_Dropdown;
