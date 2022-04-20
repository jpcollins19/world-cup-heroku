import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const S_Left_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const advancingTeams = teams.filter((team) => team.advanceToS);

  return (
    <div className="semis">
      <h2>Semis</h2>
      <div className="white-text">
        <div
          className={`S1L ${
            advancingTeams.length >= 1 &&
            knockoutPartClassPush(user, teams, "S1")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "S1")}
        </div>
        <div
          className={`S2L ${
            advancingTeams.length >= 2 &&
            knockoutPartClassPush(user, teams, "S2")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "S2")}
        </div>
      </div>
    </div>
  );
};

export default S_Left_L;
