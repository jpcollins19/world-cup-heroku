import { useSelector } from "react-redux";
import R16_Game from "./games/R16_Game";

const R16_UL = ({
  side,
  setTeam,
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
  const nums = [1, 2, 3, 4];

  return (
    teams.length && (
      <div className="R16">
        <h2>Round of 16</h2>
        {nums.map((num, idx) => {
          return (
            <R16_Game
              key={idx}
              setTeam={setTeam}
              game={`Q${side === "left" ? num : num + 4}`}
              setQ1={setQ1}
              setQ2={setQ2}
              setQ3={setQ3}
              setQ4={setQ4}
              setQ5={setQ5}
              setQ6={setQ6}
              setQ7={setQ7}
              setQ8={setQ8}
            />
          );
        })}
      </div>
    )
  );
};

export default R16_UL;
