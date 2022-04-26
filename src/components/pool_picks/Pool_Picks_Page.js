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

  const users = useSelector((state) => state.users);

  const onChangeHandler = async (id) => {
    const part = users.find((part) => part.id === id);
    setSelectedUser(part);
  };

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <main className="pool-picks-page white text">
      <div className="pool-picks-container">
        <div className="pool-picks-header">
          <Point_System_Cont />
          <div className="pool-picks-header-name">
            <h1 className="white-text">Picks for: {selectedUser.name}</h1>
          </div>
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
        </div>
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
        <div className="top box">
          <div className="box left">
            <Point_System_Cont />
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
            <Total_Points_Cont selectedUser={selectedUser} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pool_Picks_Page;
