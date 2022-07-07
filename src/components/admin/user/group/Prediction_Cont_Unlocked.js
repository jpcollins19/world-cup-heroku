import { useSelector } from "react-redux";
import { findTeam } from "../../../../store";
import Select from "react-select";

const Prediction_Cont_Unlocked = ({ group, onChange, selectedUser }) => {
  const teams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition)
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
        border: "solid black 1px",
        cursor: "pointer",
        width: "10rem",
        height: 38,
        minHeight: 38,
        fontSize: "1rem",
        textAlign: "center",
        "&:hover": {
          border: "solid black 1px",
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
        width: "9.5rem",
        height: "2.5rem",
        fontSize: "1rem",
        textAlign: "center",
        "&:hover": {
          background: "rgb(242, 242, 234)",
        },
      };
    },
  };

  return (
    <div className="prediction-cont-edit">
      <h5>Prediction</h5>
      {selectedUser && selectedUser.groupA1
        ? teams.map((team, idxRank) => (
            <Select
              key={idxRank}
              options={teams}
              defaultValue={findTeam(selectedUser, group, idxRank + 1)}
              onChange={(value) =>
                onChange([idxRank + 1, value.value.name], group)
              }
              styles={styles}
              isSearchable={false}
              className="group-dropdown-admin"
            />
          ))
        : teams.map((team, idxRank) => (
            <Select
              key={idxRank}
              options={teams}
              placeholder={"Select Team"}
              onChange={(value) =>
                onChange([idxRank + 1, value.value.name], group)
              }
              styles={styles}
              isSearchable={false}
              className="group-dropdown-admin"
            />
          ))}
    </div>
  );
};

export default Prediction_Cont_Unlocked;
