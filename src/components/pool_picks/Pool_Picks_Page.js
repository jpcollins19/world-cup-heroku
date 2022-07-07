import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatSelectedUser, loadUsers } from "../../store";
import Point_System_Cont from "../my_picks/locked/Point_System_Cont";
import Single_Group_Cont from "../my_picks/locked/group/Single_Group_Cont_Locked";
import Total_Points_Cont from "../my_picks/locked/Total_Points_Cont";
import Knockout_Cont from "../my_picks/locked/ko/Knockout_Cont_Locked";
import Select from "react-select";
import "./Pool_Picks.css";

const Pool_Picks_Page = () => {
  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState(
    formatSelectedUser(useSelector((state) => state.auth))
  );

  const auth = useSelector((state) => state.auth);

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

  const onChange = async (user) => {
    const part = users.find((part) => part.value.id === user.value.id);
    setSelectedUser(part);
  };

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const styles = {
    placeholder: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
    dropdownIndicator: (styles) => {
      return {
        ...styles,
        color: "black",
        "&:hover": {
          color: "black",
        },
      };
    },
    indicatorSeparator: (styles) => {
      return {
        ...styles,
        background: "black",
      };
    },
    control: (styles) => {
      return {
        ...styles,
        background: "none",
        color: "black",
        border: "solid black 1px",
        cursor: "pointer",
        width: "13rem",
        height: 38,
        minHeight: 38,
        fontSize: "1rem",
        textAlign: "center",
        "&:hover": {
          border: "solid black 1px",
        },
      };
    },
    option: (styles) => {
      return {
        ...styles,
        background: "white",
        color: "black",
        borderBottom: "solid lightGrey 2px",
        cursor: "pointer",
        width: "12.5rem",
        height: "2.5rem",
        fontSize: "1rem",
        textAlign: "center",
        "&:hover": {
          background: "rgb(242, 242, 234)",
        },
      };
    },
  };

  return (
    <main className="pool-picks-page white text">
      {joe && joe.tourneyStage === 1 ? (
        <div>
          <h1 className="pre-tourney-header">
            Pool Picks will not be available until the tournament commences on
            11/21/22
          </h1>
        </div>
      ) : (
        <div className="pool-picks-container">
          <div className="pool-picks-header">
            {joe &&
            joe.tourneyStage >= 3 &&
            joe.tourneyStage <= 4 &&
            auth.tiebreaker ? (
              <Point_System_Cont />
            ) : (
              <div className="point-system-table-cont"></div>
            )}
            {auth.tiebreaker && (
              <div className="pool-picks-header-name">
                <h1 className="white-text">
                  Picks for: {selectedUser.value.name}
                </h1>
              </div>
            )}
            {auth.tiebreaker && (
              <div className="pool-picks-part-dropdown-cont">
                <h3 className="white-text">View Pool Picks</h3>
                <Select
                  options={users}
                  defaultValue={selectedUser}
                  onChange={(value) => onChange(value)}
                  styles={styles}
                  isSearchable={false}
                  className="pool-picks-dropdown"
                />
              </div>
            )}
          </div>
          {joe && joe.tourneyStage === 5 && auth.tiebreaker && (
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
              {joe && joe.tourneyStage === 5 && auth.tiebreaker && (
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
              {joe && joe.tourneyStage < 5 && auth.tiebreaker && (
                <Total_Points_Cont selectedUser={selectedUser.value} />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Pool_Picks_Page;
