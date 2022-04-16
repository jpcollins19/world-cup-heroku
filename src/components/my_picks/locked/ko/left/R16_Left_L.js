import { useSelector } from "react-redux";
import { knockoutR16Push } from "../../../../../store";

const R16_Left_L = () => {
  const teams = useSelector((state) => state.teams);

  return (
    <div className="R16">
      <h2>Round of 16</h2>
      <div className="white-text">
        <div>{teams.length && knockoutR16Push(teams, "A1")}</div>
        <div>{teams.length && knockoutR16Push(teams, "B2")}</div>
      </div>
      <div className="white-text">
        <div>{teams.length && knockoutR16Push(teams, "C1")}</div>
        <div>{teams.length && knockoutR16Push(teams, "D2")}</div>
      </div>
      <div className="white-text">
        <div>{teams.length && knockoutR16Push(teams, "E1")}</div>
        <div>{teams.length && knockoutR16Push(teams, "F2")}</div>
      </div>
      <div className="white-text">
        <div>{teams.length && knockoutR16Push(teams, "G1")}</div>
        <div>{teams.length && knockoutR16Push(teams, "H2")}</div>
      </div>
    </div>
  );
};

export default R16_Left_L;
