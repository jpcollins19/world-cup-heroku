import { useSelector } from "react-redux";
import { knockoutR16Push } from "../../../../store";

const R16_Game = ({ setTeam, game, setQ1, setQ2 }) => {
  const teams = useSelector((state) => state.teams);

  const obj = {
    Q1: ["A1", "B2"],
    Q2: ["C1", "D2"],
  };

  const setGame = eval(`set${game}`);

  return (
    <div className="white-text">
      <input
        readOnly="readonly"
        defaultValue={knockoutR16Push(teams, obj[game][0])}
        onClick={(ev) => setTeam(setGame, ev.target.value)}
      ></input>
      <input
        readOnly="readonly"
        defaultValue={knockoutR16Push(teams, obj[game][1])}
        onClick={(ev) => setTeam(setGame, ev.target.value)}
      ></input>
    </div>
  );
};

export default R16_Game;
