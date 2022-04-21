import F_Game from "./games/F_Game";

const F_UL = ({
  side,
  setTeam,
  F1,
  F2,
  setF1,
  setF2,
  setChamp,
  S1,
  S2,
  S3,
  S4,
}) => {
  const gameNum = side === "left" ? 1 : 2;
  const game = eval(`F${gameNum}`);
  const currentFinalTeamSet = eval(`setF${gameNum}`);

  const SGames = {
    1: [1, 2],
    2: [3, 4],
  };

  const team1S = eval(`S${SGames[gameNum][0]}`);
  const team2S = eval(`S${SGames[gameNum][1]}`);

  return (
    <div className="final">
      <h2>Final</h2>
      <F_Game
        setTeam={setTeam}
        game={`F${gameNum}`}
        F1={game}
        F2={game}
        currentFinalTeamSet={currentFinalTeamSet}
        CurrentSTeams={[team1S, team2S]}
        setChamp={setChamp}
      />
    </div>
  );
};

export default F_UL;
