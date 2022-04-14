import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const S_Left_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const teamAudit = teams.filter((team) => team.advanceToS);

  return teamAudit.length > 0 ? (
    <div className="semis">
      <h2>Semis</h2>
      <div className="white-text">
        <div className={`S1L ${knockoutPartClassPush(user, teams, "S1")}`}>
          {knockoutPartTeamPush(user, "S1")}
        </div>
        <div className={`S2L ${knockoutPartClassPush(user, teams, "S2")}`}>
          {knockoutPartTeamPush(user, "S2")}
        </div>
      </div>
    </div>
  ) : userAudit ? (
    <div className="semis">
      <h2>Semis</h2>
      <div className="white-text">
        <div>{knockoutPartTeamPush(user, "S1")}</div>
        <div>{knockoutPartTeamPush(user, "S2")}</div>
      </div>
    </div>
  ) : (
    <div className="semis">
      <h2>Semis</h2>
      <div className="white-text">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default S_Left_L;
