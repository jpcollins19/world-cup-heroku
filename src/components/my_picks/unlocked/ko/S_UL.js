import S_Game from "./games/S_Game";

const S_UL = ({
  side,
  setTeam,
  S1,
  S2,
  S3,
  S4,
  setS1,
  setS2,
  setS3,
  setS4,
  setF1,
  setF2,
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
}) => {
  const nums = [1, 2];

  return (
    <div className="semis">
      <h2>Semis</h2>
      {nums.map((num, idx) => {
        const gameNum = side === "left" ? num : num + 2;
        const game = eval(`S${gameNum}`);
        const currentSemiTeamSet = eval(`setS${gameNum}`);

        const finals = {
          1: 1,
          2: 1,
          3: 2,
          4: 2,
        };

        const QGames = {
          1: [1, 2],
          2: [3, 4],
          3: [5, 6],
          4: [7, 8],
        };

        const team1Q = eval(`Q${QGames[gameNum][0]}`);
        const team2Q = eval(`Q${QGames[gameNum][1]}`);

        return (
          <S_Game
            key={idx}
            setTeam={setTeam}
            game={`S${num}`}
            S1={game}
            S2={game}
            S3={game}
            S4={game}
            currentSemiTeamSet={currentSemiTeamSet}
            CurrentQTeams={[team1Q, team2Q]}
            setNextGame={`setF${finals[gameNum]}`}
            setF1={setF1}
            setF2={setF2}
          />
        );
      })}
    </div>
  );
};

export default S_UL;
