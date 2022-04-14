import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const Q_Left_L = () => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const teamAudit = teams.filter((team) => team.advanceToQ);

  return teamAudit.length > 0 ? (
    <div className="quarters">
      <h2>Quarters</h2>

      <div className="white-text">
        <div className={`Q1L ${knockoutPartClassPush(user, teams, "Q1")}`}>
          {knockoutPartTeamPush(user, "Q1")}
        </div>
        <div className={`Q2L ${knockoutPartClassPush(user, teams, "Q2")}`}>
          {knockoutPartTeamPush(user, "Q2")}
        </div>
      </div>
      <div className="white-text">
        <div className={`Q3L ${knockoutPartClassPush(user, teams, "Q3")}`}>
          {knockoutPartTeamPush(user, "Q3")}
        </div>
        <div className={`Q4L ${knockoutPartClassPush(user, teams, "Q4")}`}>
          {knockoutPartTeamPush(user, "Q4")}
        </div>
      </div>
    </div>
  ) : userAudit ? (
    <div className="quarters">
      <h2>Quarters</h2>
      <div className="white-text">
        <div>{knockoutPartTeamPush(user, "Q1")}</div>
        <div>{knockoutPartTeamPush(user, "Q2")}</div>
      </div>
      <div className="white-text">
        <div>{knockoutPartTeamPush(user, "Q3")}</div>
        <div>{knockoutPartTeamPush(user, "Q4")}</div>
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

export default Q_Left_L;
