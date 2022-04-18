import Leaderboard_Cont from "./Leaderboard_Cont";
import "./Leaderboard.css";

const Leaderboard_Page = () => {
  return (
    <main className="leaderboard-page">
      <div>
        <div className="table-cont">
          <Leaderboard_Cont />
        </div>
      </div>
    </main>
  );
};

export default Leaderboard_Page;
