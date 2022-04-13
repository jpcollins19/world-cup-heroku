import { useSelector } from "react-redux";

const Outcome_Cont_Locked = ({ group }) => {
  const teams = useSelector((state) => state.teams);

  let teamsInGroup =
    teams.length &&
    teams
      .filter((team) => team.group === group)
      .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  return (
    teamsInGroup[0].groupFinishingPosition && (
      <div className="outcome-pos-cont">
        <h5>Outcome</h5>
        {teamsInGroup.map((team) => (
          <div key={team.id}>{team.name}</div>
        ))}
      </div>
    )
  );
};

export default Outcome_Cont_Locked;
