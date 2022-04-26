// import { useSelector } from "react-redux";
import { useState } from "react";
import R16_UL from "./R16_UL";
import Q_UL from "./Q_UL";
import S_UL from "./S_UL";
import F_UL from "./F_UL";
import Champ_UL from "./Champ_UL";
import { TvRounded } from "@mui/icons-material";

const Knockout_Cont_Unlocked = () => {
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const [Q6, setQ6] = useState("");
  const [Q7, setQ7] = useState("");
  const [Q8, setQ8] = useState("");
  const [S1, setS1] = useState("");
  const [S1Changed, setS1Changed] = useState(false);
  const [S2, setS2] = useState("");
  const [S2Changed, setS2Changed] = useState(false);
  const [S3, setS3] = useState("");
  const [S3Changed, setS3Changed] = useState(false);
  const [S4, setS4] = useState("");
  const [S4Changed, setS4Changed] = useState(false);
  const [F1, setF1] = useState("");
  const [F1Changed, setF1Changed] = useState(false);
  const [F2, setF2] = useState("");
  const [F2Changed, setF2Changed] = useState(false);
  const [champ, setChamp] = useState("");
  const [champChanged, setChampChanged] = useState(false);

  const setTeam = (setTeam, name) => {
    setTeam(name);
  };

  const setChanged = (set) => {
    setTimeout(() => {
      set(true);
    }, 100);
  };

  return (
    <div className="knockout-cont-edit">
      <div>
        <R16_UL
          side={"left"}
          setTeam={setTeam}
          Q1={Q1}
          Q2={Q2}
          Q3={Q3}
          Q4={Q4}
          setQ1={setQ1}
          setQ2={setQ2}
          setQ3={setQ3}
          setQ4={setQ4}
        />
        <Q_UL
          side={"left"}
          setTeam={setTeam}
          setChanged={setChanged}
          Q1={Q1}
          Q2={Q2}
          Q3={Q3}
          Q4={Q4}
          setS1={setS1}
          setS2={setS2}
          S1={S1}
          S2={S2}
          S1Changed={S1Changed}
          S2Changed={S2Changed}
          setS1Changed={setS1Changed}
          setS2Changed={setS2Changed}
        />
        <S_UL
          side={"left"}
          setTeam={setTeam}
          setChanged={setChanged}
          Q1={Q1}
          Q2={Q2}
          Q3={Q3}
          Q4={Q4}
          S1={S1}
          S2={S2}
          setS1={setS1}
          setS2={setS2}
          F1={F1}
          setF1={setF1}
          F1Changed={F1Changed}
          setF1Changed={setF1Changed}
        />
        <F_UL
          side={"left"}
          setTeam={setTeam}
          setChanged={setChanged}
          S1={S1}
          S2={S2}
          F1={F1}
          setF1={setF1}
          champ={champ}
          setChamp={setChamp}
          champChanged={champChanged}
          setChampChanged={setChampChanged}
        />
        <Champ_UL champ={champ} setChamp={setChamp} F1={F1} F2={F2} />
        <F_UL
          side={"right"}
          setTeam={setTeam}
          setChanged={setChanged}
          S3={S3}
          S4={S4}
          F2={F2}
          setF2={setF2}
          champ={champ}
          setChamp={setChamp}
          champChanged={champChanged}
          setChampChanged={setChampChanged}
        />
        <S_UL
          side={"right"}
          setTeam={setTeam}
          setChanged={setChanged}
          Q5={Q5}
          Q6={Q6}
          Q7={Q7}
          Q8={Q8}
          S3={S3}
          S4={S4}
          setS3={setS3}
          setS4={setS4}
          F2={F2}
          setF2={setF2}
          F2Changed={F2Changed}
          setF2Changed={setF2Changed}
        />
        <Q_UL
          side={"right"}
          setTeam={setTeam}
          setChanged={setChanged}
          Q5={Q5}
          Q6={Q6}
          Q7={Q7}
          Q8={Q8}
          setS3={setS3}
          setS4={setS4}
          S3={S3}
          S4={S4}
          S3Changed={S3Changed}
          S4Changed={S4Changed}
          setS3Changed={setS3Changed}
          setS4Changed={setS4Changed}
        />
        <R16_UL
          side={"right"}
          setTeam={setTeam}
          Q5={Q5}
          Q6={Q6}
          Q7={Q7}
          Q8={Q8}
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
