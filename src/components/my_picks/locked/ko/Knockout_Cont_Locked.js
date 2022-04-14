import R16_Left_L from "./left/R16_Left_L";
import Q_Left_L from "./left/Q_Left_L";
import S_Left_L from "./left/S_Left_L";
import F_Left_L from "./left/F_Left_L";
import Champ_L from "./Champ_L";
import R16_Right_L from "./right/R16_Right_L";
import Q_Right_L from "./right/Q_Right_L";
import S_Right_L from "./right/S_Right_L";
import F_Right_L from "./right/F_Right_L";

const Knockout_Cont_Locked = () => {
  return (
    <div className="knockout-cont">
      <div>
        <R16_Left_L />
        <Q_Left_L />
        <S_Left_L />
        <F_Left_L />
        <Champ_L />
        <F_Right_L />
        <S_Right_L />
        <Q_Right_L />
        <R16_Right_L />
      </div>
    </div>
  );
};

export default Knockout_Cont_Locked;