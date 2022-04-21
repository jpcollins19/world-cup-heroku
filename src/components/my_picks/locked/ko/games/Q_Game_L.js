import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const Q_Game_L = ({ game }) => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const advancingTeams = teams.filter((team) => team.advanceToQ);

  const teamNum = game.split("")[1];

  return (
    <div className="white-text">
      <div
        className={
          advancingTeams.length >= teamNum
            ? knockoutPartClassPush(user, teams, game)
            : ""
        }
      >
        {userAudit && knockoutPartTeamPush(user, game)}
      </div>
    </div>
  );
};

export default Q_Game_L;
