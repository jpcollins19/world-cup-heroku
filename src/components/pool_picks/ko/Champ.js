import { useSelector } from "react-redux";
import { knockoutPartTeamPush, knockoutPartClassPush } from "../../../store";

const Champ = ({ user }) => {
  const teams = useSelector((state) => state.teams);

  const userAudit = user && user.knockChamp;
  const advancingTeams = teams.filter((team) => team.advanceToChamp);

  return (
    <div className="champ">
      <h2>Champion</h2>

      <div className="white-text">
        <div
          className={
            advancingTeams.length && knockoutPartClassPush(user, teams, "Champ")
          }
        >
          {userAudit && knockoutPartTeamPush(user, "Champ")}
        </div>
      </div>
      <div className="trophy"></div>
    </div>
  );
};

export default Champ;
