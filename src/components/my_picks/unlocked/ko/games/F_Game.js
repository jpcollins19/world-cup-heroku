import { useEffect } from "react";

const F_Game = ({
  setTeam,
  game,
  F1,
  F2,
  currentFinalTeamSet,
  CurrentSTeams,
  setChamp,
}) => {
  const gameVar = eval(game);

  const teamAnswer = gameVar && CurrentSTeams.includes(gameVar) ? gameVar : "";

  useEffect(() => {
    teamAnswer === "" && setTeam(currentFinalTeamSet, "");
  }, [teamAnswer]);

  return (
    <div className="white-text">
      <input
        className={`reg-input ${teamAnswer.length > 1 ? "" : "ko-edit-red"}`}
        readOnly="readonly"
        defaultValue={teamAnswer && teamAnswer}
        onClick={(ev) => setTeam(setChamp, ev.target.value)}
      ></input>
    </div>
  );
};

export default F_Game;
