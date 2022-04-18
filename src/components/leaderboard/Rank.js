import { useSelector } from "react-redux";
import "./Leaderboard.css";

const Rank = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="rank-column">
      <h2 className="white-text">Rank</h2>
      {users &&
        users.map((user, idx) => (
          <div key={user.name}>
            <input className="small-box center bold" defaultValue={idx + 1} />
          </div>
        ))}
    </div>
  );
};

export default Rank;
