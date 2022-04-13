// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import Single_Group_Cont_Unlocked from "./unlocked/group_section/Single_Group_Cont_Unlocked";

// const My_Picks_Unlocked_Page = ({ part, teams, location: { pathname } }) => {
//   if (!part || !teams) {
//     return null;
//   }

//   return (
//     <main id="my-picks-page">
//       <div id="my-picks-container">
//         <h1 className="white-text">My Picks</h1>
//         <div className="submit">
//           <button>Submit</button>
//         </div>
//         <Link to="/my_picks">
//           <div className="cancel">cancel</div>
//         </Link>

//         <div className="top-unlocked box">
//           <div className="box left">
//             {pathname === "/my_picks_edit_group" && (
//               <h2 className="white-text">Group Predictions</h2>
//             )}
//             <div id="predictions-cont">
//               <Single_Group_Cont_Unlocked
//                 part={part}
//                 teams={teams}
//                 group={"A"}
//               />
//               <Single_Group_Cont_Unlocked
//                 part={part}
//                 teams={teams}
//                 group={"B"}
//               />
//               <Single_Group_Cont_Unlocked
//                 part={part}
//                 teams={teams}
//                 group={"C"}
//               />
//               <Single_Group_Cont_Unlocked
//                 part={part}
//                 teams={teams}
//                 group={"D"}
//               />
//               <Single_Group_Cont_Unlocked
//                 part={part}
//                 teams={teams}
//                 group={"E"}
//               />
//               <Single_Group_Cont_Unlocked
//                 part={part}
//                 teams={teams}
//                 group={"F"}
//               />
//               <Single_Group_Cont_Unlocked
//                 part={part}
//                 teams={teams}
//                 group={"G"}
//               />
//               <Single_Group_Cont_Unlocked
//                 part={part}
//                 teams={teams}
//                 group={"H"}
//               />
//               <div className="white-text tiebreaker">
//                 <h2>Goal Tiebreaker</h2>
//                 <input defaultValue={part.tiebreaker}></input>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="bottom box">
//           <h1 className="white-text">Knockout Stage</h1>
//           <div className="knockout-cont-unlocked">
//             <div>
//               <div className="R16">
//                 <h2>Round of 16</h2>
//                 <div>
//                   <div>Macedonia</div>
//                   <div>Uruguay</div>
//                 </div>
//                 <div>
//                   <div>Uruguay</div>
//                   <div>Uruguay</div>
//                 </div>
//                 <div>
//                   <div>Uruguay</div>
//                   <div>Uruguay</div>
//                 </div>
//                 <div>
//                   <div>Uruguay</div>
//                   <div>Uruguay</div>
//                 </div>
//               </div>
//               <div className="quarters">
//                 <h2>Quarters</h2>
//                 <div>
//                   <div></div>
//                   <div></div>
//                 </div>
//                 <div>
//                   <div></div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="semis">
//                 <h2>Semis</h2>
//                 <div>
//                   <div></div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="final">
//                 <h2>Final</h2>
//                 <div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="champ">
//                 <h2>Champion</h2>
//                 <div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="final">
//                 <h2>Final</h2>
//                 <div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="semis">
//                 <h2>Semis</h2>
//                 <div>
//                   <div></div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="quarters">
//                 <h2>Quarters</h2>
//                 <div>
//                   <div></div>
//                   <div></div>
//                 </div>
//                 <div>
//                   <div></div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="R16">
//                 <h2>Round of 16</h2>
//                 <div>
//                   <div>Uruguay</div>
//                   <div>Uruguay</div>
//                 </div>
//                 <div>
//                   <div>Uruguay</div>
//                   <div>Uruguay</div>
//                 </div>
//                 <div>
//                   <div>Uruguay</div>
//                   <div>Uruguay</div>
//                 </div>
//                 <div>
//                   <div>Uruguay</div>
//                   <div>Uruguay</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div></div>
//         </div> */}
//       </div>
//     </main>
//   );
// };

// const mapStateToProps = (state) => {
//   const part = state.participants.find((part) => part.name === "Joe");
//   const teams = state.teams;

//   return {
//     part,
//     teams,
//   };
// };

// export default connect(mapStateToProps)(My_Picks_Unlocked_Page);
