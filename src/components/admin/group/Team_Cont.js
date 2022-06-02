import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateTeam } from "../../../store";
import Input_Cont from "./Input_Cont";

const Team_Cont = ({ team }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [position, setposition] = useState(team && team.groupFinishingPosition);
  const [MP, setMP] = useState(team && team.MP);
  const [W, setW] = useState(team && team.W);
  const [D, setD] = useState(team && team.D);
  const [L, setL] = useState(team && team.L);
  const [GF, setGF] = useState(team && team.GF);
  const [GA, setGA] = useState(team && team.GA);
  const [GD, setGD] = useState(team && team.GD);
  const [pts, setpts] = useState(team && team.pts);

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

  const onChange = (val, set) => {
    set(Number(val));
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const obj = {
        id: team.id,
        position,
        MP,
        W,
        D,
        L,
        GF,
        GA,
        GD,
        pts,
      };

      console.log(obj);

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
              onChange={onChange}
            />
          );
        })}
      </div>
    </form>
  );
};

export default Team_Cont;
