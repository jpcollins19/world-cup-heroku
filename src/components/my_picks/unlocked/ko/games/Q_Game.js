const Q_Game = ({
  setTeam,
  game,
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  setNextGame,
  setS1,
  setS2,
  setS3,
  setS4,
}) => {
  const gameVar = eval(game);
  const setNextGameVar = eval(setNextGame);

  return (
    <div className="white-text">
      <input
        className={`reg-input ${gameVar.length > 1 ? "" : "ko-edit-red"}`}
        readOnly="readonly"
        defaultValue={gameVar && gameVar}
        onClick={(ev) => setTeam(setNextGameVar, ev.target.value)}
      ></input>
    </div>
  );
};

export default Q_Game;
