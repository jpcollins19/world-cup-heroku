import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const F_Right_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const teamAudit = teams.filter((team) => team.advanceToF);

  return teamAudit.length > 0 ? (
    <div className="final">
      <h2>Final</h2>
      <div className="white-text">
        <div className={`F1L ${knockoutPartClassPush(user, teams, "F2")}`}>
          {knockoutPartTeamPush(user, "F2")}
        </div>
      </div>
    </div>
  ) : userAudit ? (
    <div className="final">
      <h2>Final</h2>
      <div className="white-text">
        <div>{knockoutPartTeamPush(user, "F2")}</div>
      </div>
    </div>
  ) : (
    <div className="final">
      <h2>Final</h2>
      <div className="white-text">
        <div></div>
      </div>
    </div>
  );
};

export default F_Right_L;
