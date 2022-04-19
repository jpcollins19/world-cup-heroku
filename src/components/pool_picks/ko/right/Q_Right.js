import { useSelector } from "react-redux";
import { knockoutPartTeamPush, knockoutPartClassPush } from "../../../../store";

const Q_Right = ({ user }) => {
  const teams = useSelector((state) => state.teams);

  const userAudit = user && user.knockChamp;
  const advancingTeams = teams.filter((team) => team.advanceToQ);

  return (
    <div className="quarters">
      <h2>Quarters</h2>
      <div className="white-text">
        <div
          className={`Q1L ${
            advancingTeams.length >= 5 &&
            knockoutPartClassPush(user, teams, "Q5")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "Q5")}
        </div>
        <div
          className={`Q2L ${
            advancingTeams.length >= 6 &&
            knockoutPartClassPush(user, teams, "Q6")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "Q6")}
        </div>
      </div>
      <div className="white-text">
        <div
          className={`Q3L ${
            advancingTeams.length >= 7 &&
            knockoutPartClassPush(user, teams, "Q7")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "Q7")}
        </div>
        <div
          className={`Q4L ${
            advancingTeams.length >= 8 &&
            knockoutPartClassPush(user, teams, "Q8")
          }`}
        >
          {userAudit && knockoutPartTeamPush(user, "Q8")}
        </div>
      </div>
    </div>
  );
};

export default Q_Right;
