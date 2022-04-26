import { useSelector } from "react-redux";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";
import { useLocation } from "react-router-dom";

const Champ_Game_L = ({ selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;
  const advancingTeams = teams.filter((team) => team.advanceToChamp);

  return (
    <div className="white-text CL">
      <div
        className={
          advancingTeams.length
            ? knockoutPartClassPush(
                pathname === "/pool_picks" ? selectedUser : user,
                teams,
                "Champ"
              )
            : ""
        }
      >
        {userAudit &&
          knockoutPartTeamPush(
            pathname === "/pool_picks" ? selectedUser : user,
            "Champ"
          )}
      </div>
    </div>
  );
};

export default Champ_Game_L;
