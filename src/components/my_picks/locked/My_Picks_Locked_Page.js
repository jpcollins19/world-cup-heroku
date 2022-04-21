import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Point_System_Cont from "./Point_System_Cont";
import Single_Group_Cont_Locked from "./group/Single_Group_Cont_Locked";
import Total_Points_Cont from "./Total_Points_Cont";
import Knockout_Cont_Locked from "./ko/Knockout_Cont_Locked";
import "./My_Picks_Locked.css";

const My_Picks_Locked_Page = () => {
  const user = useSelector((state) => state.auth);

  return (
    <main className="my-picks-page white text">
      <div className="my-picks-container">
        <div className="my-picks-header">
          <Point_System_Cont />
          <div className="my-picks-header-name">
            <h1 className="white-text">{user.name}</h1>
          </div>

          <div className="button-cont-picks">
            <button>
              <Link to="/my_picks_edit_ko" style={{ textDecoration: "none" }}>
                Select / Adjust Group Picks
              </Link>
            </button>
          </div>
        </div>
        <div className="top box">
          <div className="box left">
            <div className="predictions-cont">
              <Knockout_Cont_Locked />
            </div>
          </div>
          <div className="box right">
            <Total_Points_Cont />
          </div>
        </div>
        <div className="top box">
          <div className="box left">
            <Point_System_Cont />
            <div className="predictions-cont">
              <Single_Group_Cont_Locked group={"A"} />
              <Single_Group_Cont_Locked group={"B"} />
              <Single_Group_Cont_Locked group={"C"} />
              <Single_Group_Cont_Locked group={"D"} />
              <Single_Group_Cont_Locked group={"E"} />
              <Single_Group_Cont_Locked group={"F"} />
              <Single_Group_Cont_Locked group={"G"} />
              <Single_Group_Cont_Locked group={"H"} />
            </div>
          </div>
          <div className="box right">
            <Total_Points_Cont />
          </div>
        </div>
      </div>
    </main>
  );
};

export default My_Picks_Locked_Page;
