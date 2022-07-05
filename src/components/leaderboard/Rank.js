const Rank = ({ rankInfo }) => {
  return (
    <div className="rank-column">
      <h2 className="white-text">Rank</h2>
      {rankInfo &&
        rankInfo.map((user, idx) => (
          <div key={idx}>
            <input className="small-box center bold" defaultValue={idx + 1} />
          </div>
        ))}
    </div>
  );
};

export default Rank;
