import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { capFirstLetter, updateTeam } from "../../../store";
import Team_Cont from "./Team_Cont";

const Group_Cont = ({ group }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [id0, setId0] = useState(null);
  const [position0, setPosition0] = useState(null);
  const [flag0, setFlag0] = useState(null);
  const [name0, setName0] = useState(null);
  const [MP0, setMP0] = useState(null);
  const [W0, setW0] = useState(null);
  const [D0, setD0] = useState(null);
  const [L0, setL0] = useState(null);
  const [GF0, setGF0] = useState(null);
  const [GA0, setGA0] = useState(null);
  const [GD0, setGD0] = useState(null);
  const [pts0, setPts0] = useState(null);

  const [id1, setId1] = useState(null);
  const [position1, setPosition1] = useState(null);
  const [flag1, setFlag1] = useState(null);
  const [name1, setName1] = useState(null);
  const [MP1, setMP1] = useState(null);
  const [W1, setW1] = useState(null);
  const [D1, setD1] = useState(null);
  const [L1, setL1] = useState(null);
  const [GF1, setGF1] = useState(null);
  const [GA1, setGA1] = useState(null);
  const [GD1, setGD1] = useState(null);
  const [pts1, setPts1] = useState(null);

  const [id2, setId2] = useState(null);
  const [position2, setPosition2] = useState(null);
  const [flag2, setFlag2] = useState(null);
  const [name2, setName2] = useState(null);
  const [MP2, setMP2] = useState(null);
  const [W2, setW2] = useState(null);
  const [D2, setD2] = useState(null);
  const [L2, setL2] = useState(null);
  const [GF2, setGF2] = useState(null);
  const [GA2, setGA2] = useState(null);
  const [GD2, setGD2] = useState(null);
  const [pts2, setPts2] = useState(null);

  const [id3, setId3] = useState(null);
  const [position3, setPosition3] = useState(null);
  const [flag3, setFlag3] = useState(null);
  const [name3, setName3] = useState(null);
  const [MP3, setMP3] = useState(null);
  const [W3, setW3] = useState(null);
  const [D3, setD3] = useState(null);
  const [L3, setL3] = useState(null);
  const [GF3, setGF3] = useState(null);
  const [GA3, setGA3] = useState(null);
  const [GD3, setGD3] = useState(null);
  const [pts3, setPts3] = useState(null);

  const [groupFinished, setGroupFinished] = useState(null);

  const entries = [
    "id",
    "position",
    "flag",
    "name",
    "MP",
    "W",
    "D",
    "L",
    "GF",
    "GA",
    "GD",
    "pts",
  ];

  const headers = ["Pos", "Team", "MP", "W", "D", "L", "GF", "GA", "GD", "Pts"];

  let groupTeams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  groupTeams = groupTeams.map((team) => ({
    ...team,
    flag: `https://www.sciencekids.co.nz/images/pictures/flags680/${
      team.name === "Saudi Arabia"
        ? "Saudi_Arabia"
        : team.name === "Brasil"
        ? "Brazil"
        : team.name === "Switz"
        ? "Switzerland"
        : team.name === "USA"
        ? "United_States"
        : team.name === "S. Korea"
        ? "South_Korea"
        : team.name
    }.jpg`,
  }));

  useEffect(() => {
    groupTeams.forEach((team, idx) => {
      idx === 0 && setGroupFinished(team.groupIsFinished);

      entries.forEach((entry) => {
        let set;

        if (
          entry === "id" ||
          entry === "position" ||
          entry === "flag" ||
          entry === "name" ||
          entry === "pts"
        ) {
          set = eval(`set${capFirstLetter(entry)}${idx}`);
        } else {
          set = eval(`set${entry}${idx}`);
        }

        entry === "position"
          ? set(team.groupFinishingPosition)
          : set(team[entry]);
      });
    });
  }, [group]);

  const onChange = (idx, entry, val) => {
    let set;

    if (
      entry === "id" ||
      entry === "position" ||
      entry === "flag" ||
      entry === "name" ||
      entry === "pts"
    ) {
      set = eval(`set${capFirstLetter(entry)}${idx}`);
    } else {
      set = eval(`set${entry}${idx}`);
    }
    set(val);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      groupTeams.forEach((team, idx) => {
        const obj = entries.reduce((a, entry) => {
          if (entry !== "flag") {
            const answer = eval(`${entry}${idx}`);
            if (entry === "position") {
              a.groupFinishingPosition = Number(answer);
            } else if (entry === "id" || entry === "name") {
              a[entry] = answer;
            } else {
              a[entry] = Number(answer);
            }
          }

          return a;
        }, {});

        obj.groupIsFinished = groupFinished;

        dispatch(updateTeam(obj, history));
      });
    } catch (err) {
      console.log(err);
    }
  };

  const toggle = () => setGroupFinished((value) => !value);

  return (
    <form onSubmit={onSubmit} id="submit-group">
      <div className="single-group-cont-edit">
        <h3 className="group-header">Group {group}</h3>
        <div className="text-cont">
          <div className="text-header">
            {headers.map((header) => (
              <div key={header} className={`header-${header}`}>
                {header}
              </div>
            ))}
          </div>
          {groupTeams &&
            groupTeams.map((team, idx) => {
              const teamObj = entries.reduce((a, entry) => {
                const target = eval(`${entry}${idx}`);

                a[entry] = target;
                return a;
              }, {});

              return (
                <Team_Cont
                  key={idx}
                  teamObj={teamObj}
                  idx={idx}
                  onChange={onChange}
                />
              );
            })}
        </div>
        <div className="group-finished-cont">
          Group Finished:
          <input
            type="checkbox"
            defaultValue={groupFinished}
            onChange={toggle}
            checked={groupFinished ? groupFinished : !!groupFinished}
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Group_Cont;
