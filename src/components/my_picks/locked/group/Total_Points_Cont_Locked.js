// import { connect } from "react-redux";
// import {
//   singleGroupCalc,
//   knockoutRoundCalc,
//   totalScoreCalc,
// } from "../../../store";

// const Total_Points_Cont_Locked = ({ part, teams }) => {
//   if (!part || !teams) {
//     return null;
//   }

//   const groupTotal = totalScoreCalc(
//     singleGroupCalc(part, teams, "A"),
//     singleGroupCalc(part, teams, "B"),
//     singleGroupCalc(part, teams, "C"),
//     singleGroupCalc(part, teams, "D"),
//     singleGroupCalc(part, teams, "E"),
//     singleGroupCalc(part, teams, "F"),
//     singleGroupCalc(part, teams, "G"),
//     singleGroupCalc(part, teams, "H")
//   );

//   return (
//     <div>
//       <div>
//         <h2 className="white-text">Total Points</h2>
//         <div className="total-points-cont">
//           <div>
//             <div className="total-points-text-cont">
//               <h4>Stage</h4>
//               <div>Group</div>
//               <div>Quarters</div>
//               <div>Semis</div>
//               <div>Final</div>
//               <div>Champion</div>
//               <div className="bold">Total</div>
//             </div>
//             <div className="total-points-points-cont">
//               <h4>Points</h4>
//               <div>{groupTotal}</div>
//               <div>
//                 {Object.values(knockoutRoundCalc("quarters", part, teams))[0]}
//               </div>
//               <div>
//                 {Object.values(knockoutRoundCalc("semis", part, teams))[0]}
//               </div>
//               <div>
//                 {Object.values(knockoutRoundCalc("finals", part, teams))[0]}
//               </div>
//               <div>
//                 {Object.values(knockoutRoundCalc("champ", part, teams))[0]}
//               </div>
//               <div className="bold">
//                 {totalScoreCalc(
//                   singleGroupCalc(part, teams, "A"),
//                   singleGroupCalc(part, teams, "B"),
//                   singleGroupCalc(part, teams, "C"),
//                   singleGroupCalc(part, teams, "D"),
//                   singleGroupCalc(part, teams, "E"),
//                   singleGroupCalc(part, teams, "F"),
//                   singleGroupCalc(part, teams, "G"),
//                   singleGroupCalc(part, teams, "H"),
//                   knockoutRoundCalc("quarters", part, teams),
//                   knockoutRoundCalc("semis", part, teams),
//                   knockoutRoundCalc("finals", part, teams),
//                   knockoutRoundCalc("champ", part, teams)
//                 )}
//               </div>
//             </div>
//           </div>
//           {part.tiebreaker && (
//             <h4>Tiebreaker: {part.tiebreaker} goals scored</h4>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default connect(null)(Total_Points_Cont_Locked);
