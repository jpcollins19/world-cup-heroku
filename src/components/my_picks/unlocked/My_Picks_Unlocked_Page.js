import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { updateUser, dupeValInArr } from "../../../store";
import Alert from "@mui/material/Alert";
import Group_Cont_Unlocked from "./group/Group_Cont_Unlocked";
import Knockout_Cont_Unlocked from "./ko/Knockout_Cont_Unlocked";
import "./My_Picks_Unlocked.css";

const My_Picks_Unlocked_Page = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector((state) => state.auth);

  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  const [selectionObj, setSelectionObj] = useState({
    A: {
      1: user && user.groupA1 ? user.groupA1 : null,
      2: user && user.groupA2 ? user.groupA2 : null,
      3: user && user.groupA3 ? user.groupA3 : null,
      4: user && user.groupA4 ? user.groupA4 : null,
    },
    B: {
      1: user && user.groupB1 ? user.groupB1 : null,
      2: user && user.groupB2 ? user.groupB2 : null,
      3: user && user.groupB3 ? user.groupB3 : null,
      4: user && user.groupB4 ? user.groupB4 : null,
    },
    C: {
      1: user && user.groupC1 ? user.groupC1 : null,
      2: user && user.groupC2 ? user.groupC2 : null,
      3: user && user.groupC3 ? user.groupC3 : null,
      4: user && user.groupC4 ? user.groupC4 : null,
    },
    D: {
      1: user && user.groupD1 ? user.groupD1 : null,
      2: user && user.groupD2 ? user.groupD2 : null,
      3: user && user.groupD3 ? user.groupD3 : null,
      4: user && user.groupD4 ? user.groupD4 : null,
    },
    E: {
      1: user && user.groupE1 ? user.groupE1 : null,
      2: user && user.groupE2 ? user.groupE2 : null,
      3: user && user.groupE3 ? user.groupE3 : null,
      4: user && user.groupE4 ? user.groupE4 : null,
    },
    F: {
      1: user && user.groupF1 ? user.groupF1 : null,
      2: user && user.groupF2 ? user.groupF2 : null,
      3: user && user.groupF3 ? user.groupF3 : null,
      4: user && user.groupF4 ? user.groupF4 : null,
    },
    G: {
      1: user && user.groupG1 ? user.groupG1 : null,
      2: user && user.groupG2 ? user.groupG2 : null,
      3: user && user.groupG3 ? user.groupG3 : null,
      4: user && user.groupG4 ? user.groupG4 : null,
    },
    H: {
      1: user && user.groupH1 ? user.groupH1 : null,
      2: user && user.groupH2 ? user.groupH2 : null,
      3: user && user.groupH3 ? user.groupH3 : null,
      4: user && user.groupH4 ? user.groupH4 : null,
    },
  });

  const [tiebreaker, setTiebreaker] = useState(
    user && user.tiebreaker ? user.tiebreaker : null
  );
  const [tiebreakerError, setTiebreakerError] = useState(false);
  const [groupAError, setGroupAError] = useState(false);
  const [groupBError, setGroupBError] = useState(false);
  const [groupCError, setGroupCError] = useState(false);
  const [groupDError, setGroupDError] = useState(false);
  const [groupEError, setGroupEError] = useState(false);
  const [groupFError, setGroupFError] = useState(false);
  const [groupGError, setGroupGError] = useState(false);
  const [groupHError, setGroupHError] = useState(false);

  const onChangeSelectionObj = (group, rank, team) => {
    selectionObj[group][rank] = team;
  };

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const errorAudit = [];

  const clearArr = (arr) => {
    while (arr.length) {
      arr.pop();
      return clearArr(arr);
    }
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      clearArr(errorAudit);

      letters.forEach(async (letter) => {
        const groupObj = selectionObj[letter];
        const teams = Object.values(groupObj);
        const setError = eval(`setGroup${letter}Error`);

        if (
          teams.includes(null) ||
          teams.includes("not-valid") ||
          !dupeValInArr(teams)
        ) {
          setError(true);
          errorAudit.push(1);
        }
      });

      if (isNaN(tiebreaker) || tiebreaker === 0 || tiebreaker === null) {
        return setTiebreakerError(true);
      }

      const userObj = {
        id: user.id,
        tiebreaker,
      };

      letters.forEach((letter) => {
        const nums = [1, 2, 3, 4];

        nums.forEach((num) => {
          userObj[`group${letter}${num}`] = selectionObj[letter][num];
        });
      });

      !tiebreakerError &&
        !errorAudit.length &&
        dispatch(updateUser(userObj, history));
    } catch (err) {
      console.log("reeeed error", err);
    }
  };

  return (
    <main className="my-picks-page-ul ">
      <form onSubmit={onSubmit} className="my-picks-container-ul">
        <div className="my-picks-header-ul">
          <div className="edit-picks-instruction-cont">
            <h3 className="white-text-ul">
              {joe &&
                joe.tourneyStage === 1 &&
                "Select a country from the dropdowns to rank where you think each country will finish in their group"}
              {joe &&
                joe.tourneyStage === 4 &&
                "Click on the country you think will win each game"}
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
        <div className="error-cont-tiebreaker">
          <div className="error-cont-login">
            {tiebreakerError && (
              <Alert severity="error">Invalid Tiebreaker</Alert>
            )}
          </div>
        </div>
        {joe && joe.tourneyStage === 1 && (
          <div className="tiebreaker-cont-edit-picks white-text">
            <h3>Tiebreaker - total number of goals scored:</h3>
            <div>
              <input
                className="white-text"
                defaultValue={tiebreaker}
                onChange={(ev) => {
                  setTiebreaker(Number(ev.target.value));
                  setTiebreakerError(false);
                }}
              ></input>
            </div>
          </div>
        )}
        <div className="edit-full-cont">
          {joe && joe.tourneyStage === 1 && (
            <Group_Cont_Unlocked
              onChangeSelectionObj={onChangeSelectionObj}
              groupAError={groupAError}
              groupBError={groupBError}
              groupCError={groupCError}
              groupDError={groupDError}
              groupEError={groupEError}
              groupFError={groupFError}
              groupGError={groupGError}
              groupHError={groupHError}
              setGroupAError={setGroupAError}
              setGroupBError={setGroupBError}
              setGroupCError={setGroupCError}
              setGroupDError={setGroupDError}
              setGroupEError={setGroupEError}
              setGroupFError={setGroupFError}
              setGroupGError={setGroupGError}
              setGroupHError={setGroupHError}
            />
          )}
          {joe && joe.tourneyStage === 4 && user.tiebreaker && (
            <Knockout_Cont_Unlocked />
          )}
        </div>
      </form>
    </main>
  );
};

export default My_Picks_Unlocked_Page;
