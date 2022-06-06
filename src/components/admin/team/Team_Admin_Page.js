import { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import Team_Cont from "./Team_Cont";
import "./Team_Admin.css";

const Team_Admin_Page = () => {
  const [team, setTeam] = useState(null);

  const teams = useSelector((state) => state.teams)
    .filter(
      (team) =>
        team.groupFinishingPosition === 1 || team.groupFinishingPosition === 2
    )
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    .map((team) => {
      return { value: team, label: team.name };
    });

  const styles = {
    placeholder: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
    dropdownIndicator: (styles) => {
      return {
        ...styles,
        color: "black",
        "&:hover": {
          color: "black",
        },
      };
    },
    indicatorSeparator: (styles) => {
      return {
        ...styles,
        background: "black",
      };
    },
    control: (styles) => {
      return {
        ...styles,
        background: "none",
        color: "black",
        border: "solid black 2px",
        cursor: "pointer",
        width: "15rem",
        borderRadius: "0.5rem",
        fontSize: "1.2rem",
        textAlign: "center",
        "&:hover": {
          border: "solid black 2px",
        },
      };
    },
    option: (styles) => {
      return {
        ...styles,
        background: "white",
        color: "black",
        borderBottom: "solid lightGrey 2px",
        cursor: "pointer",
        width: "13.5rem",
        fontSize: "1.2rem",
        textAlign: "center",
        "&:hover": {
          background: "rgb(242, 242, 234)",
        },
      };
    },
  };

  return (
    <main className="team-admin-page">
      <div className="team-admin-dropdown-cont">
        <Select
          options={teams}
          placeholder={"Select Team"}
          onChange={(value) => setTeam(value.value)}
          styles={styles}
          isSearchable={false}
          className="team-admin-dropdown"
        />
      </div>
      <div className="team-cont">{team && <Team_Cont team={team} />}</div>
      {team && (
        <button type="submit" form="submit-team">
          Submit
        </button>
      )}
    </main>
  );
};

export default Team_Admin_Page;
