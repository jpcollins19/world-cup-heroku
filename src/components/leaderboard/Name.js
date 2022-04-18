import "./Leaderboard.css";

const Name = ({ rankInfo }) => {
  if (!rankInfo) {
    return null;
  }

  const names = Object.keys(rankInfo);

  return (
    <div className="name-column">
      <h2 className="white-text">Name</h2>
      {names &&
        names.map((name) => (
          <div key={name}>
            <input
              className={`name-box center bold ${
                rankInfo[name].tie && "tie-tie"
              }`}
              defaultValue={name}
            />
          </div>
        ))}
    </div>
  );
};

export default Name;
