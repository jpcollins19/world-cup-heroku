// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import { updateUser } from "../../../store";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Alert from "@mui/material/Alert";

// const Change_PW = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const auth = useSelector((state) => state.auth);

//   const [password, setPassword] = useState(null);
//   const [password1, setPassword1] = useState(null);
//   const [showPW, setShowPW] = useState(false);
//   const [error, setError] = useState(false);

//   const onChange = (ev) => {
//     const set = eval(`set${ev.target.name}`);
//     set(ev.target.value);
//     setError(null);
//   };

//   const showPwClick = () => {
//     setShowPW(!showPW);
//   };

//   const onSubmit = async (evt) => {
//     evt.preventDefault();

//     try {
//       if (password !== password1) return setError(true);

//       const obj = {
//         id: auth && auth.id,
//         password,
//       };

//       dispatch(updateUser(obj, history, "name"));
//     } catch (err) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className="edit-name-page">
//       <div className="main-cont-edit-name">
//         <div className="main-cont1-edit-name">
//           <div className="main-text-container-edit-name black-text">
//             <Container component="main" maxWidth="xs">
//               <CssBaseline />
//               <Box
//                 sx={{
//                   marginTop: 1,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <Typography component="h1" variant="h">
//                   Change Password
//                 </Typography>
//                 <div className="error-cont-login-edit-name">
//                   {error && (
//                     <Alert severity="error">Passwords do not match</Alert>
//                   )}
//                 </div>
//                 <div className="input-cont change-pw">
//                   <div>New Password: </div>
//                   <input
//                     name="Password"
//                     placeholder="input password"
//                     onChange={onChange}
//                     type={showPW ? "text" : "password"}
//                   ></input>
//                 </div>
//                 <div className="input-cont change-pw">
//                   <div>Confirm New Password: </div>
//                   <input
//                     name="Password1"
//                     placeholder="confirm password"
//                     onChange={onChange}
//                     type={showPW ? "text" : "password"}
//                   ></input>
//                 </div>
//                 <div className="view-pw" onClick={() => showPwClick()}>
//                   View Password
//                 </div>
//                 <button>Submit</button>
//                 <Link style={{ textDecoration: "none" }} to="/my_picks">
//                   cancel
//                 </Link>
//               </Box>
//             </Container>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Change_PW;
