import { useSelector } from "react-redux";
import { knockoutPartTeamPush, knockoutPartClassPush } from "../../../../store";

const S_Right = ({ user }) => {
  const teams = useSelector((state) => state.teams);

  const userAudit = user && user.knockChamp;
  const advancingTeams = teams.filter((team) => team.advanceToS);

  return (
    <div className="semis">
      <h2>Semis</h2>
      <div className="white-text">
        <div
          className={`S1L ${
            advancingTeams.length >= 3 &&
            knockoutPartClassPush(user, teams, "S3")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "S3")}
        </div>
        <div
          className={`S2L ${
            advancingTeams.length >= 4 &&
            knockoutPartClassPush(user, teams, "S4")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "S4")}
        </div>
      </div>
    </div>
  );
};

export default S_Right;
