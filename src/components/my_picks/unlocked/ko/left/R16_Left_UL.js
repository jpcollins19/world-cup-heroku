import { useSelector } from "react-redux";
import { knockoutR16Push } from "../../../../../store";
import R16_Game from "../R16_Game";

const R16_Left_UL = ({ setTeam, setQ1, setQ2 }) => {
  const teams = useSelector((state) => state.teams);

  return (
    teams.length && (
      <div className="R16 L">
        <h2>Round of 16</h2>
        <R16_Game setTeam={setTeam} game={"Q1"} setQ1={setQ1} />
        <R16_Game setTeam={setTeam} game={"Q2"} setQ2={setQ2} />
        <div className="white-text">
          <div>{teams.length && knockoutR16Push(teams, "E1")}</div>
          <div>{teams.length && knockoutR16Push(teams, "F2")}</div>
        </div>
        <div className="white-text">
          <div>{teams.length && knockoutR16Push(teams, "G1")}</div>
          <div>{teams.length && knockoutR16Push(teams, "H2")}</div>
        </div>
      </div>
    )
  );

  // return (
  //   teams.length && (
  //     <div className="R16 L">
  //       <h2>Round of 16</h2>
  //       <div className="white-text">
  //         <input
  //           readonly="readonly"
  //           defaultValue={knockoutR16Push(teams, "A1")}
  //           onClick={(ev) => setTeam(setQ1, ev.target.value)}
  //         ></input>
  //         <div>{teams.length && knockoutR16Push(teams, "B2")}</div>
  //       </div>
  //       <div className="white-text">
  //         <div>{teams.length && knockoutR16Push(teams, "C1")}</div>
  //         <div>{teams.length && knockoutR16Push(teams, "D2")}</div>
  //       </div>
  //       <div className="white-text">
  //         <div>{teams.length && knockoutR16Push(teams, "E1")}</div>
  //         <div>{teams.length && knockoutR16Push(teams, "F2")}</div>
  //       </div>
  //       <div className="white-text">
  //         <div>{teams.length && knockoutR16Push(teams, "G1")}</div>
  //         <div>{teams.length && knockoutR16Push(teams, "H2")}</div>
  //       </div>
  //     </div>
  //   )
  // );
};

export default R16_Left_UL;
