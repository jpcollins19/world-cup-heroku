import { useSelector } from "react-redux";
import { currentScoresObj } from "../../store";
import Rank from "./Rank";
import Name from "./Name";
import Score from "./Score";
import "./Leaderboard.css";

const Leaderboard_Cont = () => {
  const users = useSelector((state) => state.users);
  const teams = useSelector((state) => state.teams);

  const rankInfo = currentScoresObj(users, teams, 152);

  return (
    <div>
      <Rank />
      <Name rankInfo={rankInfo && rankInfo} />
      <Score rankInfo={rankInfo && rankInfo} />
    </div>
  );
};

export default Leaderboard_Cont;
