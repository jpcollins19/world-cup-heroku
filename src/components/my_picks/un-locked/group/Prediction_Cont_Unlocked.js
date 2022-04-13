// import { connect } from "react-redux";

// const Prediction_Cont_Unlocked = ({ part, group, teams }) => {
//   if (!part || !teams || !group) {
//     return null;
//   }

//   const groupTeams = teams.filter((team) => team.group === group);

//   return (
//     <div className="prediction-cont-locked">
//       <h5>Prediction</h5>
//       {groupTeams.map((team, idx) => (
//         <select key={team.id}>
//           {groupTeams
//             .filter((team) => team.name === part[`group${group}${idx + 1}`])
//             .map((team) => (
//               <option key={team.id}>{team.name}</option>
//             ))}
//           {groupTeams
//             .filter((team) => team.name !== part[`group${group}${idx + 1}`])
//             .map((team) => (
//               <option key={team.id}>{team.name}</option>
//             ))}
//         </select>
//       ))}
//     </div>
//   );
// };

// export default connect(null)(Prediction_Cont_Unlocked);
