import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const F_Left_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const teamAudit = teams.filter((team) => team.advanceToF);

  return teamAudit.length > 0 ? (
    <div className="final">
      <h2>Final</h2>
      <div className="white-text">
        <div className={knockoutPartClassPush(user, teams, "F1")}>
          {knockoutPartTeamPush(user, "F1")}
        </div>
      </div>
    </div>
  ) : userAudit ? (
    <div className="final">
      <h2>Final</h2>
      <div className="white-text">
        <div>{knockoutPartTeamPush(user, "F1")}</div>
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

export default F_Left_L;
