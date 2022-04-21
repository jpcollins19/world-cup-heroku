const Q_Game_UL = ({
  gameNum,
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

  let gameClass;

  switch (gameNum) {
    case 1:
      gameClass = "Q1";
      break;
    case 5:
      gameClass = "Q1";
      break;
    case 2:
      gameClass = "Q2";
      break;
    case 6:
      gameClass = "Q2";
      break;
    case 3:
      gameClass = "Q3";
      break;
    case 7:
      gameClass = "Q3";
      break;
    case 4:
      gameClass = "Q4";
      break;
    case 8:
      gameClass = "Q4";
      break;
    default:
      break;
  }

  return (
    <div className={gameClass}>
      <input
        className={`reg-input ${gameVar.length > 1 ? "" : "ko-edit-red"}`}
        readOnly="readonly"
        defaultValue={gameVar && gameVar}
        onClick={(ev) => setTeam(setNextGameVar, ev.target.value)}
      ></input>
    </div>
  );
};

export default Q_Game_UL;
