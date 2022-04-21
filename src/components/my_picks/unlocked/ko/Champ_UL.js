import { useSelector } from "react-redux";
import { knockoutPartTeamPush, knockoutPartClassPush } from "../../../../store";

const Champ_L = () => {
  return (
    <div className="champ-edit">
      <h2>Champion</h2>
      <div className="white-text">
        <input
          // className={gameVar.length > 1 ? "" : "ko-edit-red"}
          className="ko-edit-red champ-input"
          readOnly="readonly"
          defaultValue="champ"
          // onClick={(ev) => setTeam(setGame, ev.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Champ_L;
