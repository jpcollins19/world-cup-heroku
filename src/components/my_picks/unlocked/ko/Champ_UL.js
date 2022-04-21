import Champ_Game from "./games/Champ_Game";

const Champ_L = ({ champ, setChamp, F1, F2 }) => {
  return (
    <div className="champ-edit">
      <h2>Champion</h2>
      <Champ_Game champ={champ} setChamp={setChamp} CurrentFTeams={[F1, F2]} />
    </div>
  );
};

export default Champ_L;
