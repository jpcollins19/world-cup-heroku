import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const F_Right_L = () => {
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
            advancingTeams.length >= 2 &&
            knockoutPartClassPush(user, teams, "F2")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "F2")}
        </div>
      </div>
    </div>
  );
};

export default F_Right_L;
