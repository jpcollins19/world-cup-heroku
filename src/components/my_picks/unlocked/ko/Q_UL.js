import Q_Game from "./games/Q_Game";

const Q_UL = ({ side, setTeam, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8 }) => {
  const nums = [1, 2, 3, 4];

  return (
    <div className="quarters">
      <h2>Quarters</h2>
      {nums.map((num, idx) => {
        const game = eval(`Q${side === "left" ? num : num + 4}`);

        return (
          <Q_Game
            key={idx}
            game={`Q${num}`}
            Q1={game}
            Q2={game}
            Q3={game}
            Q4={game}
            Q5={game}
            Q6={game}
            Q7={game}
            Q8={game}
          />
        );
      })}
    </div>
  );
};

export default Q_UL;
