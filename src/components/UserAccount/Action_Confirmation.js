import { Link, useLocation } from "react-router-dom";
import "./UserAccount.css";
//^^having this imported css file here allows all folders/files in this UserAccount folfer to access it

const Action_Confirmation = () => {
  // const { pathname } = useLocation();

  return (
    <main className="action-confirm-page">
      <h1 className="white-text">
        Account Succesfully Created!
        {/* {pathname === "/account_created"
                    ? "Account Succesfully Created!"
                    : pathname === "/pw_reset_confirmation"
                    ? "Password Succesfully Reset!"
                    : "We have successfully sent instructions for resetting your password to the email address you provided. Please follow the email instructions to reset your password. It may take a few minutes to receive the email."} */}
      </h1>
      {/* {pathname === "/forgot_pw_confirmation" && (
                  <div className="email-instructions white-text">
                    <ul>
                      If you don't receive the email:
                      <li>Check your junk mail folder</li>
                      <li>
                        or to re-send the email,{" "}
                        <Link style={{ textDecoration: "none" }} to="forgot_pw">
                          click here
                        </Link>
                      </li>
                    </ul>
                  </div>
                )} */}
      <div
        // className={
        //   pathname === "/forgot_pw_confirmation"
        //     ? "click-to-sign-in-f"
        //     : "click-to-sign-in"
        // }
        className="click-to-sign-in"
      >
        <Link style={{ textDecoration: "none" }} to="/sign_in">
          Click here to sign in
        </Link>
      </div>
    </main>
  );

  // return (
  //   <main className="create-account-page">
  //     <div className="main-cont-account-created">
  //       <div className="account-created">
  //         <div className="main-text-container-login black-text">
  //           <Container component="main" maxWidth="xs">
  //             <CssBaseline />
  //             <Box
  //               sx={{
  //                 marginTop: 1,
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 alignItems: "center",
  //               }}
  //             >
  //               <div className="account-created-header"></div>
  //               <Typography
  //                 className="white-text"
  //                 // component={
  //                 //   pathname === "/forgot_pw_confirmation" ? "h4" : "h1"
  //                 // }
  //                 component="h1"
  //                 variant="h"
  //               >
  //                 Account Succesfully Created!
  //                 {/* {pathname === "/account_created"
  //                   ? "Account Succesfully Created!"
  //                   : pathname === "/pw_reset_confirmation"
  //                   ? "Password Succesfully Reset!"
  //                   : "We have successfully sent instructions for resetting your password to the email address you provided. Please follow the email instructions to reset your password. It may take a few minutes to receive the email."} */}
  //               </Typography>
  //               {/* {pathname === "/forgot_pw_confirmation" && (
  //                 <div className="email-instructions white-text">
  //                   <ul>
  //                     If you don't receive the email:
  //                     <li>Check your junk mail folder</li>
  //                     <li>
  //                       or to re-send the email,{" "}
  //                       <Link style={{ textDecoration: "none" }} to="forgot_pw">
  //                         click here
  //                       </Link>
  //                     </li>
  //                   </ul>
  //                 </div>
  //               )} */}
  //               <div
  //                 // className={
  //                 //   pathname === "/forgot_pw_confirmation"
  //                 //     ? "click-to-sign-in-f"
  //                 //     : "click-to-sign-in"
  //                 // }
  //                 className="click-to-sign-in"
  //               >
  //                 <Link style={{ textDecoration: "none" }} to="/sign_in">
  //                   Click here to sign in
  //                 </Link>
  //               </div>
  //             </Box>
  //           </Container>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
};

export default Action_Confirmation;
