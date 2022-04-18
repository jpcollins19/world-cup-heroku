import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const Q_Left_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const advancingTeams = teams.filter((team) => team.advanceToQ);

  return (
    <div className="quarters">
      <h2>Quarters</h2>

      <div className="white-text">
        <div
          className={`Q1L ${
            advancingTeams.length >= 1 &&
            knockoutPartClassPush(user, teams, "Q1")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "Q1")}
        </div>
        <div
          className={`Q2L ${
            advancingTeams.length >= 2 &&
            knockoutPartClassPush(user, teams, "Q2")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "Q2")}
        </div>
      </div>
      <div className="white-text">
        <div
          className={`Q3L ${
            advancingTeams.length >= 3 &&
            knockoutPartClassPush(user, teams, "Q3")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "Q3")}
        </div>
        <div
          className={`Q4L ${
            advancingTeams.length >= 4 &&
            knockoutPartClassPush(user, teams, "Q4")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "Q4")}
        </div>
      </div>
    </div>
  );
};

export default Q_Left_L;
