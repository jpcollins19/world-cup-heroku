import { useSelector } from "react-redux";
import { currentScoresObj } from "../../store";
import Rank from "./Rank";
import Name from "./Name";
import Score from "./Score";

const Leaderboard_Cont = () => {
  const users = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker
  );
  const auth = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  let rankInfo = currentScoresObj(users && users, teams && teams, 152);

  rankInfo = rankInfo && rankInfo.sort((a, b) => a.rank - b.rank);

  return (
    auth.tiebreaker && (
      <div>
        <Rank rankInfo={rankInfo && rankInfo} />
        <Name rankInfo={rankInfo && rankInfo} />
        <Score rankInfo={rankInfo && rankInfo} />
      </div>
    )
  );
};

export default Leaderboard_Cont;
