import { useSelector } from "react-redux";
import { singleGroupCalc } from "../../../store";

const Points_Cont = ({ group, user }) => {
  const teams = useSelector((state) => state.teams);

  const pointObj = singleGroupCalc(user, teams, group);

  return (
    <div className="points-cont-pp">
      <h5>Points</h5>
      <div
        className={
          pointObj.R1 === 3 ? "blue" : pointObj.R1 === 1 ? "orange" : ""
        }
      >
        {pointObj.R1}
      </div>
      <div
        className={
          pointObj.R2 === 2 ? "yellow" : pointObj.R2 === 1 ? "orange" : ""
        }
      >
        {pointObj.R2}
      </div>
      <div className={pointObj.R3 === 1 ? "green" : ""}>{pointObj.R3}</div>
      <div className={pointObj.R4 === 1 ? "green" : ""}>{pointObj.R4}</div>
    </div>
  );
};

export default Points_Cont;
