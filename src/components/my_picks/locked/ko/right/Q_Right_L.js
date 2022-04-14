import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const Q_Right_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;

  const teamAudit = teams.filter((team) => team.advanceToQ);

  return teamAudit.length > 1 ? (
    <div className="quarters">
      <h2>Quarters</h2>
      <div className="white-text">
        <div className={knockoutPartClassPush(user, teams, "Q5")}>
          {knockoutPartTeamPush(user, "Q5")}
        </div>
        <div className={knockoutPartClassPush(user, teams, "Q6")}>
          {knockoutPartTeamPush(user, "Q6")}
        </div>
      </div>
      <div className="white-text">
        <div className={knockoutPartClassPush(user, teams, "Q7")}>
          {knockoutPartTeamPush(user, "Q7")}
        </div>
        <div className={knockoutPartClassPush(user, teams, "Q8")}>
          {knockoutPartTeamPush(user, "Q8")}
        </div>
      </div>
    </div>
  ) : userAudit ? (
    <div className="quarters">
      <h2>Quarters</h2>
      <div className="white-text">
        <div>{knockoutPartTeamPush(user, "Q5")}</div>
        <div>{knockoutPartTeamPush(user, "Q6")}</div>
      </div>
      <div className="white-text">
        <div>{knockoutPartTeamPush(user, "Q7")}</div>
        <div>{knockoutPartTeamPush(user, "Q8")}</div>
      </div>
    </div>
  ) : (
    <div className="quarters">
      <h2>Quarters</h2>
      <div className="white-text">
        <div></div>
        <div></div>
      </div>
      <div className="white-text">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Q_Right_L;
