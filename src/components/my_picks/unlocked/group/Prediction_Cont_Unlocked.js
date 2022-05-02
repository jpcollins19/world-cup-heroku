import { useSelector } from "react-redux";

const Prediction_Cont_Unlocked = ({ group, onChange }) => {
  const teams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  const user = useSelector((state) => state.auth);

  return (
    <div className="prediction-cont-edit">
      <h5>Prediction</h5>
      {user && user.groupA1
        ? teams.map((team, idxRank) => (
            <select
              key={team.id}
              onChange={(ev) => onChange(ev.target.value, group)}
            >
              <option
                value={[idxRank + 1, user[`group${group}${idxRank + 1}`]]}
              >
                {user[`group${group}${idxRank + 1}`]}
              </option>
              {teams
                .filter(
                  (teamm) => teamm.name !== user[`group${group}${idxRank + 1}`]
                )
                .map((teamm, idx) => (
                  <option key={idx} value={[idxRank + 1, teamm.name]}>
                    {teamm.name}
                  </option>
                ))}
            </select>
          ))
        : teams.map((team, idxRank) => (
            <select
              key={team.id}
              onChange={(ev) => onChange(ev.target.value, group)}
            >
              <option value={[idxRank + 1, "not-valid"]}>Select Team</option>
              {teams.map((teamm, idx) => (
                <option key={idx} value={[idxRank + 1, teamm.name]}>
                  {teamm.name}
                </option>
              ))}
            </select>
          ))}
    </div>
  );
};

export default Prediction_Cont_Unlocked;
