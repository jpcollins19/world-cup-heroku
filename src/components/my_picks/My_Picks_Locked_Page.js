import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Point_System_Cont from "./Point_System_Cont";
import Single_Group_Cont_Locked from "./locked/group/Single_Group_Cont_Locked";
// import Total_Points_Cont from "./locked/group_section/Total_Points_Cont";
// import Knockout_Cont from "./locked/knockout_section/Knockout_Cont";
import "./My_Picks.css";

const My_Picks_Locked_Page = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth);

  return (
    <main className="my-picks-page white text">
      <div className="my-picks-container">
        {/* <Route component={Point_System_Cont} path="/my_picks" exact /> */}
        <div className="my-picks-header">
          <Point_System_Cont />
          <div className="my-picks-header-name">
            <h1 className="white-text">{user.name}</h1>
          </div>

          <div className="button-cont-picks">
            <button>
              <Link
                to="/my_picks_edit_group"
                style={{ textDecoration: "none" }}
              >
                Select / Adjust{" "}
                {pathname === "/my_picks" ? "Group" : "Knockout"} Picks
              </Link>
            </button>
          </div>
        </div>
        <div className="top box">
          <div className="box left">
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
          {/* fix css on text size of a single group cont and then resume work below */}
          {/* fix css on text size of a single group cont and then resume work below */}
          {/* fix css on text size of a single group cont and then resume work below */}
          {/* fix css on text size of a single group cont and then resume work below */}
          {/* fix css on text size of a single group cont and then resume work below */}
          {/* fix css on text size of a single group cont and then resume work below */}
          {/* fix css on text size of a single group cont and then resume work below */}
          <div className="box right">
            {/* <Total_Points_Cont part={part} teams={teams} /> */}
          </div>
        </div>
        {/* <div className="bottom box">
          <h1 className="white-text">Knockout Stage</h1>
          <Knockout_Cont part={part} teams={teams} />
        </div> */}
      </div>
    </main>
  );
};

export default My_Picks_Locked_Page;
