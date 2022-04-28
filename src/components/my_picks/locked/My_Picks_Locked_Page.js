import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Point_System_Cont from "./Point_System_Cont";
import Single_Group_Cont_Locked from "./group/Single_Group_Cont_Locked";
import Total_Points_Cont from "./Total_Points_Cont";
import Knockout_Cont_Locked from "./ko/Knockout_Cont_Locked";
import "./My_Picks_Locked.css";

const My_Picks_Locked_Page = () => {
  const user = useSelector((state) => state.auth);
  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  if (!joe) {
    return null;
  }

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <main className="my-picks-page white text">
      <div className="my-picks-container">
        <div className="my-picks-header">
          <div className="point-system-table-cont"></div>
          <div className="my-picks-header-name">
            <h1 className="white-text">{user.name}</h1>
          </div>
          <div className="button-cont-picks">
            <button>
              <Link
                to={
                  joe && joe.tourneyStage === "pre-ko"
                    ? "/my_picks_edit_ko"
                    : "/my_picks_edit_group"
                }
                style={{ textDecoration: "none" }}
              >
                Select / Adjust
                {joe && joe.tourneyStage === "pre-ko"
                  ? " Knockout "
                  : " Group "}
                Picks
              </Link>
            </button>
          </div>
        </div>
        {/* <div className="top box">
          <div className="box left">
            <div className="predictions-cont">
              <Knockout_Cont_Locked />
            </div>
          </div>
          <div className="box right">
            <Total_Points_Cont />
          </div>
        </div> */}
        {user && user.tiebreaker && (
          <div className="top box">
            <div className="box left">
              {joe && joe.tourneyStage === "pre-ko" && <Point_System_Cont />}
              {joe && joe.tourneyStage === "ko" && <Point_System_Cont />}
              <div className="predictions-cont">
                {letters.map((letter) => (
                  <Single_Group_Cont_Locked key={letter} group={letter} />
                ))}
              </div>
            </div>
            <div className="box right">
              <Total_Points_Cont />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default My_Picks_Locked_Page;
