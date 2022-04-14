import { useSelector } from "react-redux";
import { knockoutPartTeamPush, knockoutPartClassPush } from "../../../../store";

const Champ_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const teamAudit = teams.filter((team) => team.advanceToChamp);

  return teamAudit.length > 0 ? (
    <div className="champ">
      <h2>Champion</h2>
      <div className="white-text">
        <div className={knockoutPartClassPush(user, teams, "Champ")}>
          {knockoutPartTeamPush(user, "Champ")}
        </div>
      </div>
    </div>
  ) : userAudit ? (
    <div className="champ">
      <h2>Champion</h2>
      <div className="white-text">
        <div>{knockoutPartTeamPush(user, "Champ")}</div>
      </div>
    </div>
  ) : (
    <div className="champ">
      <h2>Champion</h2>
      <div className="white-text">
        <div></div>
      </div>
    </div>
  );
};

export default Champ_L;
