import { useState } from "react";
import R16_Left_UL from "./left/R16_Left_UL";
import Q_Left_UL from "./left/Q_Left_UL";
// import S_Left_UL from "./left/S_Left_UL";
// import F_Left_UL from "./left/F_Left_UL";
// import Champ_UL from "./Champ_UL";
import R16_Right_UL from "./right/R16_Right_UL";
// import Q_Right_UL from "./right/Q_Right_UL";
// import S_Right_UL from "./right/S_Right_UL";
// import F_Right_UL from "./right/F_Right_UL";

const Knockout_Cont_Unlocked = () => {
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");

  const setTeam = (set, name) => {
    set(name);
  };

  return (
    <div className="knockout-cont-edit">
      <div>
        <R16_Left_UL setTeam={setTeam} setQ1={setQ1} setQ2={setQ2} />
        <Q_Left_UL Q1={Q1} Q2={Q2} />
        {/* <S_Left_UL /> */}
        {/* <F_Left_UL /> */}
        {/* <Champ_UL /> */}
        {/* <F_Right_UL /> */}
        {/* <S_Right_UL /> */}
        {/* <Q_Right_UL /> */}
        <R16_Right_UL />
      </div>
    </div>
  );
};

export default Knockout_Cont_Unlocked;
