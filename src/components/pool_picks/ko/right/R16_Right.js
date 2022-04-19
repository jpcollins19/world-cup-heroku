import { useSelector } from "react-redux";
import { knockoutR16Push } from "../../../../store";

const R16_Right = () => {
  const teams = useSelector((state) => state.teams);

  return (
    <div className="R16-pp R-pp">
      <h2>Round of 16</h2>
      <div className="white-text">
        <div>{teams.length && knockoutR16Push(teams, "B1")}</div>
        <div>{teams.length && knockoutR16Push(teams, "A2")}</div>
      </div>
      <div className="white-text">
        <div>{teams.length && knockoutR16Push(teams, "D1")}</div>
        <div>{teams.length && knockoutR16Push(teams, "C2")}</div>
      </div>
      <div className="white-text">
        <div>{teams.length && knockoutR16Push(teams, "F1")}</div>
        <div>{teams.length && knockoutR16Push(teams, "E2")}</div>
      </div>
      <div className="white-text">
        <div>{teams.length && knockoutR16Push(teams, "H1")}</div>
        <div>{teams.length && knockoutR16Push(teams, "G2")}</div>
      </div>
    </div>
  );
};

export default R16_Right;
