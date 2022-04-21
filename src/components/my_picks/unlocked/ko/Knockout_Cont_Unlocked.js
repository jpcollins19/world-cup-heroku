import { useState } from "react";
import R16_UL from "./R16_UL";
import Q_UL from "./Q_UL";
import S_UL from "./S_UL";
import F_UL from "./F_UL";
// import F_Left_UL from "./left/F_Left_UL";
import Champ_UL from "./Champ_UL";
// import R16_Right_UL from "./right/R16_Right_UL";
// import Q_Right_UL from "./right/Q_Right_UL";
// import S_Right_UL from "./right/S_Right_UL";
// import F_Right_UL from "./right/F_Right_UL";

const Knockout_Cont_Unlocked = () => {
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const [Q6, setQ6] = useState("");
  const [Q7, setQ7] = useState("");
  const [Q8, setQ8] = useState("");

  const setTeam = (set, name) => {
    set(name);
  };

  return (
    <div className="knockout-cont-edit">
      <div>
        <R16_UL
          side={"left"}
          setTeam={setTeam}
          setQ1={setQ1}
          setQ2={setQ2}
          setQ3={setQ3}
          setQ4={setQ4}
        />
        <Q_UL side={"left"} setTeam={setTeam} Q1={Q1} Q2={Q2} Q3={Q3} Q4={Q4} />
        <S_UL />
        <F_UL />
        <Champ_UL />
        <F_UL />
        <S_UL />
        <Q_UL
          side={"right"}
          setTeam={setTeam}
          Q5={Q5}
          Q6={Q6}
          Q7={Q7}
          Q8={Q8}
        />
        <R16_UL
          side={"right"}
          setTeam={setTeam}
          setQ5={setQ5}
          setQ6={setQ6}
          setQ7={setQ7}
          setQ8={setQ8}
        />
      </div>
    </div>
  );
};

export default Knockout_Cont_Unlocked;
