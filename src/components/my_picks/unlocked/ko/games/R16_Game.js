import { useSelector } from "react-redux";
import { knockoutR16Push } from "../../../../../store";

const R16_Game = ({
  setTeam,
  game,
  setQ1,
  setQ2,
  setQ3,
  setQ4,
  setQ5,
  setQ6,
  setQ7,
  setQ8,
}) => {
  const teams = useSelector((state) => state.teams);

  const obj = {
    Q1: ["A1", "B2"],
    Q2: ["C1", "D2"],
    Q3: ["E1", "F2"],
    Q4: ["G1", "H2"],
    Q5: ["B1", "A2"],
    Q6: ["D1", "C2"],
    Q7: ["F1", "E2"],
    Q8: ["H1", "G2"],
  };

  const setGame = eval(`set${game}`);

  const twoTeams = [1, 1];

  return (
    <div className="white-text">
      {twoTeams.map((team, idx) => (
        <input
          key={idx}
          readOnly="readonly"
          className="reg-input"
          defaultValue={knockoutR16Push(teams, obj[game][idx])}
          onClick={(ev) => setTeam(setGame, ev.target.value)}
        ></input>
      ))}
    </div>
  );
};

export default R16_Game;
