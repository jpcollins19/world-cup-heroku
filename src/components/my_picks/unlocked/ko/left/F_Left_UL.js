import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const F_Left_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const advancingTeams = teams.filter((team) => team.advanceToF);

  return (
    <div className="final">
      <h2>Final</h2>
      <div className="white-text">
        <div
          className={`F1L ${
            advancingTeams.length >= 1 &&
            knockoutPartClassPush(user, teams, "F1")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "F1")}
        </div>
      </div>
    </div>
  );
};

export default F_Left_L;
