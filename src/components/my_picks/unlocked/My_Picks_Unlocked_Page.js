import { Link } from "react-router-dom";
import Group_Cont_Unlocked from "./group/Group_Cont_Unlocked";
import Knockout_Cont_Unlocked from "./ko/Knockout_Cont_Unlocked";
import "./My_Picks_Unlocked.css";

const My_Picks_Unlocked_Page = () => {
  return (
    <main className="my-picks-page-ul ">
      <div className="my-picks-container-ul">
        <div className="my-picks-header-ul">
          <div className="edit-picks-instruction-cont">
            <h3 className="white-text-ul">
              {/* Select a country from the dropdowns to rank where you think each
              country will finish in their group */}
              Click on the country you think will win each game
            </h3>
          </div>
        </div>
        <div className="cancel-cont">
          <Link to="/my_picks" style={{ textDecoration: "none" }}>
            Cancel
          </Link>
        </div>
        <div className="button-cont-edit-picks">
          <button>Submit Picks</button>
        </div>
        <div className="tiebreaker-cont-edit-picks white-text">
          <h3>Tiebreaker - total number of goals scored:</h3>
          <div>
            <input className="white-text" defaultValue={35}></input>
          </div>
        </div>
        <div className="edit-full-cont">
          {/* <Knockout_Cont_Unlocked /> */}
          <Group_Cont_Unlocked />
        </div>
      </div>
    </main>
  );
};

export default My_Picks_Unlocked_Page;
