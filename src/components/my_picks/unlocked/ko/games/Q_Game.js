const Q_Game = ({ game, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8 }) => {
  const gameVar = eval(game);

  return (
    <div className="white-text">
      <input
        className={`reg-input ${gameVar.length > 1 ? "" : "ko-edit-red"}`}
        readOnly="readonly"
        defaultValue={gameVar && gameVar}
        // onClick={(ev) => setTeam(setGame, ev.target.value)}
      ></input>
    </div>
  );
};

export default Q_Game;
