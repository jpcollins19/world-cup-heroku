import Q_Game_L from "./games/Q_Game_L";

const Q_L = ({ side }) => {
  const nums = [1, 2, 3, 4];

  return (
    <div className="quarters">
      <h2>Quarters</h2>
      {nums.map((num, idx) => {
        const gameNum = side && side === "left" ? num : num + 4;

        return <Q_Game_L key={idx} game={`Q${gameNum}`} />;
      })}
    </div>
  );
};

export default Q_L;
