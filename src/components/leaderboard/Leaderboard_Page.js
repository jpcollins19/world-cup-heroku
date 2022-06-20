import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../store";
import Leaderboard_Cont from "./Leaderboard_Cont";
import "./Leaderboard.css";

const Leaderboard_Page = () => {
  const dispatch = useDispatch();

  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <main className="leaderboard-page">
      <div>
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
