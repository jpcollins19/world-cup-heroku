import { useSelector } from "react-redux";

const Prediction_Cont_Unlocked = ({ group }) => {
  const teams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  return (
    <div className="prediction-cont-edit">
      <h5>Prediction</h5>
      {teams.map((team) => (
        <select key={team.id}>
          <option value={"not-valid"}>Select Team</option>
          {teams.map((teamm, idx) => (
            <option key={idx} value={teamm.id}>
              {teamm.name}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default Prediction_Cont_Unlocked;
