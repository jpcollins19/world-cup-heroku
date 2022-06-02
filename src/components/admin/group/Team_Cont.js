import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateTeam } from "../../../store";
import Input_Cont from "./Input_Cont";

const Team_Cont = ({ team }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [id, setId] = useState(team && team.id);
  const [name, setName] = useState(team && team.name);
  const [position, setposition] = useState(team && team.groupFinishingPosition);
  const [MP, setMP] = useState(team && team.MP);
  const [W, setW] = useState(team && team.W);
  const [D, setD] = useState(team && team.D);
  const [L, setL] = useState(team && team.L);
  const [GF, setGF] = useState(team && team.GF);
  const [GA, setGA] = useState(team && team.GA);
  const [GD, setGD] = useState(team && team.GD);
  const [pts, setpts] = useState(team && team.pts);

  useEffect(() => {
    console.log("id in use eff", id);
  }, [id]);

  useEffect(() => {
    console.log("id in MP use eff", id);
    console.log("MP", MP);
  }, [MP]);

  const entries = [
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

  const onChange = (val, set, id) => {
    set(Number(val));
    setId(id);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const obj = {
        id,
        groupFinishingPosition: position,
        name,
        MP,
        W,
        D,
        L,
        GF,
        GA,
        GD,
        pts,
      };

      console.log("id", id);
      console.log("obj", obj);
      console.log("team", team);

      dispatch(updateTeam(obj, history));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} id="group-submit" className="team-row-cont">
      <div className="single-group-cont-text">
        {entries.map((entry, idx) => {
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
        })}
      </div>
    </form>
  );
};

export default Team_Cont;
