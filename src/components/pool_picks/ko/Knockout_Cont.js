import R16_Left from "./left/R16_Left";
import Q_Left from "./left/Q_Left";
import S_Left from "./left/S_Left";
import F_Left from "./left/F_Left";
import Champ from "./Champ";
import R16_Right from "./right/R16_Right";
import Q_Right from "./right/Q_Right";
import S_Right from "./right/S_Right";
import F_Right from "./right/F_Right";

const Knockout_Cont = ({ user }) => {
  return (
    <div className="knockout-cont-pp">
      <div>
        <R16_Left />
        <Q_Left user={user} />
        <S_Left user={user} />
        <F_Left user={user} />
        <Champ user={user} />
        <F_Right user={user} />
        <S_Right user={user} />
        <Q_Right user={user} />
        <R16_Right />
      </div>
    </div>
  );
};

export default Knockout_Cont;
