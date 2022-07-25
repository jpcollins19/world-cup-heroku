import { useSelector } from "react-redux";
import { findTeam } from "../../../../store";
import Dropdown from "../../../Misc/Dropdown";

const Prediction_Cont_Unlocked = ({ group, onChange }) => {
  const teams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition)
    .map((team) => {
      return { value: team, label: team.name };
    });

  const user = useSelector((state) => state.auth);

  return (
    <div>
      <h5>Prediction</h5>
      {user && teams && user.groupA1
        ? teams.map((team, idxRank) => (
            <Dropdown
              key={idxRank}
              options={teams}
              width="13rem"
              defaultValue={findTeam(user, group, idxRank + 1)}
              set={(value) => onChange([idxRank + 1, value.value.name], group)}
            />
          ))
        : teams.map((team, idxRank) => (
            <Dropdown
              key={idxRank}
              placeholder="Select Team"
              options={teams}
              width="13rem"
              set={(value) => onChange([idxRank + 1, value.value.name], group)}
            />
          ))}
    </div>
  );

  // const styles = {
  //   placeholder: (styles) => {
  //     return {
  //       ...styles,
  //       color: "black",
  //     };
  //   },
  //   dropdownIndicator: (styles) => {
  //     return {
  //       ...styles,
  //       color: "black",
  //       "&:hover": {
  //         color: "black",
  //       },
  //     };
  //   },
  //   indicatorSeparator: (styles) => {
  //     return {
  //       ...styles,
  //       background: "black",
  //     };
  //   },
  //   control: (styles) => {
  //     return {
  //       ...styles,
  //       background: "none",
  //       color: "black",
  //       border: "solid black 1px",
  //       cursor: "pointer",
  //       width: "10rem",
  //       height: 38,
  //       minHeight: 38,
  //       fontSize: "1rem",
  //       textAlign: "center",
  //       "&:hover": {
  //         border: "solid black 1px",
  //       },
  //     };
  //   },
  //   option: (styles) => {
  //     return {
  //       ...styles,
  //       background: "white",
  //       color: "black",
  //       borderBottom: "solid lightGrey 2px",
  //       cursor: "pointer",
  //       width: "9.5rem",
  //       height: "2.5rem",
  //       fontSize: "1rem",
  //       textAlign: "center",
  //       "&:hover": {
  //         background: "rgb(242, 242, 234)",
  //       },
  //     };
  //   },
  // };

  // return (
  //   <div className="prediction-cont-edit">
  //     <h5>Prediction</h5>
  //     {user && user.groupA1
  //       ? teams.map((team, idxRank) => (
  //           <Select
  //             key={idxRank}
  //             options={teams}
  //             defaultValue={findTeam(user, group, idxRank + 1)}
  //             onChange={(value) =>
  //               onChange([idxRank + 1, value.value.name], group)
  //             }
  //             styles={styles}
  //             isSearchable={false}
  //             className="group-dropdown"
  //           />
  //         ))
  //       : teams.map((team, idxRank) => (
  //           <Select
  //             key={idxRank}
  //             options={teams}
  //             placeholder={"Select Team"}
  //             onChange={(value) =>
  //               onChange([idxRank + 1, value.value.name], group)
  //             }
  //             styles={styles}
  //             isSearchable={false}
  //             className="group-dropdown"
  //           />
  //         ))}
  //   </div>
  // );
};

export default Prediction_Cont_Unlocked;
