import { useState } from "react";
import { useSelector } from "react-redux";
import Point_System_Cont from "../my_picks/locked/Point_System_Cont";
import Single_Group_Cont from "../my_picks/locked/group/Single_Group_Cont_Locked";
import Total_Points_Cont from "../my_picks/locked/Total_Points_Cont";
import Knockout_Cont from "../my_picks/locked/ko/Knockout_Cont_Locked";
import "./Pool_Picks.css";

const Pool_Picks_Page = () => {
  const [selectedUser, setSelectedUser] = useState(
    useSelector((state) => state.auth)
  );

  const auth = useSelector((state) => state.auth);

  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  const users = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker
  );

  const onChangeHandler = async (id) => {
    const part = users.find((part) => part.id === id);
    setSelectedUser(part);
  };

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

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
                <h1 className="white-text">Picks for: {selectedUser.name}</h1>
              </div>
            )}
            {auth.tiebreaker && (
              <div className="pool-picks-part-dropdown-cont">
                <h3 className="white-text">View Pool Picks</h3>
                <select onChange={(ev) => onChangeHandler(ev.target.value)}>
                  <option key={selectedUser.id}>{selectedUser.name}</option>
                  {users &&
                    users
                      .filter((part) => selectedUser.id !== part.id)
                      .map((part) => (
                        <option key={part.id} value={part.id}>
                          {part.name}
                        </option>
                      ))}
                </select>
              </div>
            )}
          </div>
          {joe && joe.tourneyStage === 5 && auth.tiebreaker && (
            <div className="top box">
              <div className="box left">
                <div className="predictions-cont">
                  <Knockout_Cont selectedUser={selectedUser} />
                </div>
              </div>
              <div className="box right">
                <Total_Points_Cont selectedUser={selectedUser} />
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
                    selectedUser={selectedUser}
                  />
                ))}
              </div>
            </div>
            <div className="box right">
              {joe && joe.tourneyStage < 5 && auth.tiebreaker && (
                <Total_Points_Cont selectedUser={selectedUser} />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Pool_Picks_Page;
