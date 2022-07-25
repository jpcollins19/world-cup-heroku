import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatSelectedUser, loadUsers } from "../../store";
import Dropdown from "../Misc/Dropdown";
import Point_System_Cont from "../my_picks/locked/Point_System_Cont";
import Single_Group_Cont from "../my_picks/locked/group/Single_Group_Cont_Locked";
import Total_Points_Cont from "../my_picks/locked/Total_Points_Cont";
import Knockout_Cont from "../my_picks/locked/ko/Knockout_Cont_Locked";
import Box from "@mui/material/Box";
import "./Pool_Picks.css";

const Pool_Picks_Page = () => {
  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState(
    formatSelectedUser(useSelector((state) => state.auth))
  );

  const user = useSelector((state) => state.auth);

  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  const users = useSelector((state) => state.users)
    .filter((user) => user.tiebreaker)
    .map((user) => {
      return { value: user, label: user.name };
    });

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const onChange = async (userId) => {
    const newUser = users.find((user) => user.value.id === userId);
    setSelectedUser(newUser);
  };

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="pool-picks-page"
    >
      {joe && joe.tourneyStage === 1 ? (
        <div className="stage-1-header white-text">
          <h1>
            Pool Picks will not be available until the tournament commences on
            11/21/22
          </h1>
        </div>
      ) : (
        <div className="pool-picks-container">
          {user.tiebreaker && (
            <div className="pool-picks-header">
              <h1 className="white-text">Picks for:</h1>
              <Dropdown
                options={users}
                width="13rem"
                defaultValue={selectedUser}
                set={(value) => onChange(value.value.id)}
              />
            </div>
          )}

          {joe && joe.tourneyStage === 3 && user.tiebreaker && (
            <Point_System_Cont />
          )}

          {joe && joe.tourneyStage === 5 && user.tiebreaker && (
            <div className="top box">
              <div className="box left">
                <div className="predictions-cont">
                  <Knockout_Cont
                    selectedUser={selectedUser && selectedUser.value}
                  />
                </div>
              </div>
              <div className="box right">
                <Total_Points_Cont
                  selectedUser={selectedUser && selectedUser.value}
                />
              </div>
            </div>
          )}

          <div className="top box">
            <div className="box left">
              {joe && joe.tourneyStage === 5 && user.tiebreaker && (
                <Point_System_Cont />
              )}
              <div className="predictions-cont">
                {letters.map((letter) => (
                  <Single_Group_Cont
                    key={letter}
                    group={letter}
                    selectedUser={selectedUser && selectedUser.value}
                  />
                ))}
              </div>
            </div>
            <div className="box right">
              {joe && joe.tourneyStage < 5 && user.tiebreaker && (
                <Total_Points_Cont selectedUser={selectedUser.value} />
              )}
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Pool_Picks_Page;
