import { useSelector } from "react-redux";
import "./Group_Details.css";

const Single_Cont = ({ group }) => {
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
      <div className="single-group-cont">
        <h3 className="group-header">Group {group}</h3>
        <div className="text-cont">
          <div className="text-header">
            <div className="team">Team</div>
            <div>MP</div>
            <div>W</div>
            <div>D</div>
            <div>L</div>
            <div>GF</div>
            <div>GA</div>
            <div>GD</div>
            <div>Pts</div>
          </div>

          {groupTeams &&
            groupTeams
              .filter((team) => team.group === group)
              .map((team) => (
                <div key={team.id} className="team-row-cont">
                  <div className="single-group-cont-text">
                    <img className="flag" src={team.flag}></img>
                    <div className="country-name">{team.name}</div>
                    <div className="MP">{team.MP}</div>
                    <div className="W">{team.W} </div>
                    <div className="D">{team.D} </div>
                    <div className="L">{team.L} </div>
                    <div className="GF">{team.GF}</div>
                    <div className="GA">{team.GA}</div>
                    <div className="GA">{team.GD}</div>
                    <div className="pts">{team.Pts}</div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Single_Cont;
