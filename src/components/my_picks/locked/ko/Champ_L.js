import { useSelector } from "react-redux";
import { knockoutPartTeamPush, knockoutPartClassPush } from "../../../../store";

const Champ_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
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
    </div>
  );
};

export default Champ_L;
