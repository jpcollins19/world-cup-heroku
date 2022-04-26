import { useSelector } from "react-redux";
import {
  singleGroupCalc,
  knockoutRoundCalc,
  totalScoreCalc,
} from "../../../store";
import { useLocation } from "react-router-dom";

const Total_Points_Cont = ({ selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const groupTotal = totalScoreCalc(
    singleGroupCalc(user, teams, "A"),
    singleGroupCalc(user, teams, "B"),
    singleGroupCalc(user, teams, "C"),
    singleGroupCalc(user, teams, "D"),
    singleGroupCalc(user, teams, "E"),
    singleGroupCalc(user, teams, "F"),
    singleGroupCalc(user, teams, "G"),
    singleGroupCalc(user, teams, "H")
  );

  return (
    <div>
      <div>
        <h2 className="white-text">Total Points</h2>
        <div className="total-points-cont">
          <div>
            <div className="total-points-text-cont">
              <h4>Stage</h4>
              <div>Group</div>
              <div>Quarters</div>
              <div>Semis</div>
              <div>Final</div>
              <div>Champion</div>
              <div className="bold">Total</div>
            </div>
            <div className="total-points-points-cont">
              <h4>Points</h4>
              <div>{groupTotal}</div>
              <div>
                {
                  Object.values(
                    knockoutRoundCalc(
                      "quarters",
                      pathname === "/pool_picks" ? selectedUser : user,
                      teams
                    )
                  )[0]
                }
              </div>
              <div>
                {
                  Object.values(
                    knockoutRoundCalc(
                      "semis",
                      pathname === "/pool_picks" ? selectedUser : user,
                      teams
                    )
                  )[0]
                }
              </div>
              <div>
                {
                  Object.values(
                    knockoutRoundCalc(
                      "finals",
                      pathname === "/pool_picks" ? selectedUser : user,
                      teams
                    )
                  )[0]
                }
              </div>
              <div>
                {
                  Object.values(
                    knockoutRoundCalc(
                      "champ",
                      pathname === "/pool_picks" ? selectedUser : user,
                      teams
                    )
                  )[0]
                }
              </div>
              <div className="bold">
                {totalScoreCalc(
                  singleGroupCalc(
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams,
                    "A"
                  ),
                  singleGroupCalc(
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams,
                    "B"
                  ),
                  singleGroupCalc(
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams,
                    "C"
                  ),
                  singleGroupCalc(
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams,
                    "D"
                  ),
                  singleGroupCalc(
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams,
                    "E"
                  ),
                  singleGroupCalc(
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams,
                    "F"
                  ),
                  singleGroupCalc(
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams,
                    "G"
                  ),
                  singleGroupCalc(
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams,
                    "H"
                  ),
                  knockoutRoundCalc(
                    "quarters",
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams
                  ),
                  knockoutRoundCalc(
                    "semis",
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams
                  ),
                  knockoutRoundCalc(
                    "finals",
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams
                  ),
                  knockoutRoundCalc(
                    "champ",
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams
                  )
                )}
              </div>
            </div>
          </div>
          {
            <h3>
              Tiebreaker:{" "}
              {selectedUser ? selectedUser.tiebreaker : user.tiebreaker} goals
            </h3>
          }
        </div>
      </div>
    </div>
  );
};

export default Total_Points_Cont;
