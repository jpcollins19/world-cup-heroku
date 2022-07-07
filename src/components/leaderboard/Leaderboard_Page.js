import { useState } from "react";
import { useSelector } from "react-redux";
import { SpinnerCircularFixed } from "spinners-react";
import Payout from "./Payout";
import Leaderboard_Cont from "./Leaderboard_Cont";
import "./Leaderboard.css";

const Leaderboard_Page = () => {
  const [loading, setLoading] = useState(true);

  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  const auth = useSelector((state) => state.auth);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return loading ? (
    <div className="loading-cont">
      <SpinnerCircularFixed
        size={100}
        thickness={100}
        speed={147}
        color="white"
        secondaryColor="black"
      />
    </div>
  ) : (
    <main className="leaderboard-page">
      <div>
        {auth && auth.tiebreaker && <Payout />}
        <div className="table-cont">
          {joe && joe.tourneyStage === 1 ? (
            <div>
              <h1 className="pre-tourney-header">
                Leaderboard will not be available until the tournament commences
                on 11/21/22
              </h1>
            </div>
          ) : (
            <Leaderboard_Cont />
          )}
        </div>
      </div>
    </main>
  );
};

export default Leaderboard_Page;
