import "./Leaderboard.css";

const Score = ({ rankInfo }) => {
  if (!rankInfo) {
    return null;
  }

  const scores = Object.values(rankInfo);

  return (
    <div className="score-column">
      <h2 className="white-text">Score</h2>
      {scores &&
        scores.map((score, idx) => (
          <div key={idx}>
            <input className="small-box center bold" defaultValue={score} />
          </div>
        ))}
    </div>
  );
};

export default Score;
