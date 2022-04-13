import { useSelector } from "react-redux";
import Single_Cont from "./Single_Cont";
import { groupDetailsPush } from "../../store";
import "./Group_Details.css";

const Group_Details_Page = () => {
  let teams = useSelector((state) => state.teams);

  teams = teams.map((team) => ({
    ...team,
    flag: `https://www.sciencekids.co.nz/images/pictures/flags680/${
      team.name === "Saudi Arabia"
        ? "Saudi_Arabia"
        : team.name === "Brasil"
        ? "Brazil"
        : team.name === "Switz"
        ? "Switzerland"
        : team.name === "Costa Rica"
        ? "Costa_Rica"
        : team.name === "S. Korea"
        ? "South_Korea"
        : team.name
    }.jpg`,
  }));

  return (
    <main className="group-details-page">
      <div className="group-details-container">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="group-details-full-table-container">
          <Single_Cont groupA={groupDetailsPush(teams, "A")} />
          <Single_Cont groupB={groupDetailsPush(teams, "B")} />
          <Single_Cont groupC={groupDetailsPush(teams, "C")} />
          <Single_Cont groupD={groupDetailsPush(teams, "D")} />
          <Single_Cont groupE={groupDetailsPush(teams, "E")} />
          <Single_Cont groupF={groupDetailsPush(teams, "F")} />
          <Single_Cont groupG={groupDetailsPush(teams, "G")} />
          <Single_Cont groupH={groupDetailsPush(teams, "H")} />
        </div>
        <div>&nbsp;</div>
      </div>
    </main>
  );
};

export default Group_Details_Page;
