import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateTeam } from "../../../store";
import Input_Cont from "./Input_Cont";

const Team_Cont = ({ teamObj, idx, onChange }) => {
  // const obj = masterObj[idx];
  // let teamObj = masterObj[group][num];

  // // const [id, setId] = useState(null);
  // const [position, setPosition] = useState(teamObj && teamObj.position);
  // // const [flag, setFlag] = useState(null);
  // const [name, setName] = useState(teamObj && teamObj.name);
  // const [MP, setMP] = useState(teamObj && teamObj.MP);
  // const [W, setW] = useState(teamObj && teamObj.W);
  // const [D, setD] = useState(teamObj && teamObj.D);
  // const [L, setL] = useState(teamObj && teamObj.L);
  // const [GF, setGF] = useState(teamObj && teamObj.GF);
  // const [GA, setGA] = useState(teamObj && teamObj.GA);
  // const [GD, setGD] = useState(teamObj && teamObj.GD);
  // const [pts, setPts] = useState(teamObj && teamObj.pts);

  // useEffect(() => {
  //   console.log("group");
  // }, []);

  // useEffect(() => {
  //   teamObj = masterObj[group][num];
  //   console.log("group", group);
  //   console.log("teamObj", teamObj);
  // }, [teamObj]);

  // const dispatch = useDispatch();
  // const history = useHistory();

  // const onSubmit = async (evt) => {
  //   evt.preventDefault();

  //   try {
  //     const obj = {
  //       id,
  //       groupFinishingPosition: position,
  //       name,
  //       MP,
  //       W,
  //       D,
  //       L,
  //       GF,
  //       GA,
  //       GD,
  //       pts,
  //     };

  //     console.log("id", id);
  //     console.log("obj", obj);
  //     console.log("team", team);

  //     dispatch(updateTeam(obj, history));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const entries = Object.keys(teamObj).filter(
    (entry) => entry !== "id" && entry !== "group"
  );

  return (
    <div className="team-row-cont">
      <div className="single-group-cont-text">
        {/* {entries.map((entry, idx) => {
          const value =
            entry === "position" ? team.groupFinishingPosition : team[entry];

          const set =
            entry !== "flag" && entry !== "name" && eval(`set${entry}`);
          return (
            <Input_Cont
              key={idx}
              entry={entry}
              value={value}
              set={set}
              id={id}
              onChange={onChange}
            />
          );
        })} */}
        {entries.map((entry) =>
          entry === "flag" ? (
            <img key={entry} className={entry} src={teamObj[entry]}></img>
          ) : (
            <input
              key={entry}
              className={
                entry === "position" || entry === "name" ? entry : "input-space"
              }
              defaultValue={teamObj[entry]}
              onChange={(ev) => onChange(idx, entry, ev.target.value)}
            />
          )
        )}
        {/* {entries.map((entry) =>
          entry === "flag" ? (
            <img key={entry} className={entry} src={teamObj[entry]}></img>
          ) : (
            <input
              key={entry}
              // type="text"
              className={
                entry === "position" || entry === "name" ? entry : "input-space"
              }
              value={eval(entry)}
              onChange={(ev) => {}}
              // onBlur={updateInput}
              // value={teamObj[entry]}
              // onChange={(ev) => onChange(teamObj, entry, ev.target.value)
            />
          )
        )} */}
      </div>
    </div>
  );
};

export default Team_Cont;

{
  /* <input className="name" defaultValue={team && team.name} />
        <input className="input-space" defaultValue={team && team.MP} />
        <input className="input-space" defaultValue={team && team.W} />
        <input className="input-space" defaultValue={team && team.D} />
        <input className="input-space" defaultValue={team && team.L} />
        <input className="input-space" defaultValue={team && team.GF} />
        <input className="input-space" defaultValue={team && team.GA} />
        <input className="input-space" defaultValue={team && team.GD} />
        <input className="input-space" defaultValue={team && team.pts} /> */
}
