import { useSelector } from "react-redux";
import {
  singleGroupCalc,
  knockoutRoundCalc,
  totalScoreCalc,
} from "../../store";

const Total_Points_Cont = () => {
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
                {Object.values(knockoutRoundCalc("quarters", user, teams))[0]}
              </div>
              <div>
                {Object.values(knockoutRoundCalc("semis", user, teams))[0]}
              </div>
              <div>
                {Object.values(knockoutRoundCalc("finals", user, teams))[0]}
              </div>
              <div>
                {Object.values(knockoutRoundCalc("champ", user, teams))[0]}
              </div>
              <div className="bold">
                {totalScoreCalc(
                  singleGroupCalc(user, teams, "A"),
                  singleGroupCalc(user, teams, "B"),
                  singleGroupCalc(user, teams, "C"),
                  singleGroupCalc(user, teams, "D"),
                  singleGroupCalc(user, teams, "E"),
                  singleGroupCalc(user, teams, "F"),
                  singleGroupCalc(user, teams, "G"),
                  singleGroupCalc(user, teams, "H"),
                  knockoutRoundCalc("quarters", user, teams),
                  knockoutRoundCalc("semis", user, teams),
                  knockoutRoundCalc("finals", user, teams),
                  knockoutRoundCalc("champ", user, teams)
                )}
              </div>
            </div>
          </div>
          {user.tiebreaker && (
            <h3>Tiebreaker: {user.tiebreaker} goals scored</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Total_Points_Cont;
