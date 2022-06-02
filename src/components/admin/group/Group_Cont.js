import { useSelector } from "react-redux";
import Team_Cont from "./Team_Cont";

const Group_Cont = ({ group }) => {
  let groupTeams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  groupTeams = groupTeams.map((team) => ({
    ...team,
    flag: `https://www.sciencekids.co.nz/images/pictures/flags680/${
      team.name === "Saudi Arabia"
        ? "Saudi_Arabia"
        : team.name === "Brasil"
        ? "Brazil"
        : team.name === "Switz"
        ? "Switzerland"
        : team.name === "USA"
        ? "United_States"
        : team.name === "S. Korea"
        ? "South_Korea"
        : team.name
    }.jpg`,
  }));

  return (
    <div>
      <div className="single-group-cont-edit">
        <h3 className="group-header">Group {group}</h3>
        <div className="text-cont">
          <div className="text-header">
            <div className="position-edit">Pos</div>
            <div className="team-edit">Team</div>
            <div className="header-MP">MP</div>
            <div className="header-W">W</div>
            <div className="header-D">D</div>
            <div className="header-L">L</div>
            <div className="header-GF">GF</div>
            <div className="header-GA">GA</div>
            <div className="header-GD">GD</div>
            <div>Pts</div>
          </div>

          {groupTeams &&
            groupTeams
              .filter((team) => team.group === group)
              .map((team) => <Team_Cont key={team.id} team={team} />)}
        </div>
      </div>
    </div>
  );
};

export default Group_Cont;
