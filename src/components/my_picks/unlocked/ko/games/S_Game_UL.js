import { useEffect } from "react";

const S_Game_UL = ({
  setTeam,
  gameNum,
  game,
  S1,
  S2,
  S3,
  S4,
  currentSemiTeamSet,
  CurrentQTeams,
  setNextGame,
  setF1,
  setF2,
}) => {
  const gameVar = eval(game);
  const setNextGameVar = eval(setNextGame);

  const teamAnswer = gameVar && CurrentQTeams.includes(gameVar) ? gameVar : "";

  let gameClass;

  switch (gameNum % 2) {
    case 1:
      gameClass = "S1";
      break;
    case 0:
      gameClass = "S2";
      break;
    default:
      break;
  }

  useEffect(() => {
    teamAnswer === "" && setTeam(currentSemiTeamSet, "");
  }, [teamAnswer]);

  return (
    <div className={gameClass}>
      <input
        className={`reg-input ${teamAnswer.length > 1 ? "" : "ko-edit-red"}`}
        readOnly="readonly"
        defaultValue={teamAnswer && teamAnswer}
        onClick={(ev) => setTeam(setNextGameVar, ev.target.value)}
      ></input>
    </div>
  );
};

export default S_Game_UL;
