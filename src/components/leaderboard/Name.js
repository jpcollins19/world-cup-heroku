import { useSelector } from "react-redux";
import { paidStatus } from "../../store";
import "./Leaderboard.css";

const Name = ({ rankInfo }) => {
  const users = useSelector((state) => state.users);
  const names = Object.keys(rankInfo && rankInfo);

  return (
    <div className="name-column">
      <h2 className="white-text">Name</h2>
      {names &&
        names.map((name) => {
          const paid = paidStatus(users, name);
          return (
            <div key={name}>
              <input
                className={`name-box center bold ${
                  rankInfo[name].tie && "tie-tie"
                } ${!paid && "not-paid"}`}
                defaultValue={`${name}${!paid ? " - not paid" : ""}`}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Name;
