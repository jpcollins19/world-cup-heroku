const S_UL = () => {
  const nums = [1, 2];

  return (
    <div className="semis">
      <h2>Semis</h2>
      <div className="white-text">
        <input
          // className={gameVar.length > 1 ? "" : "ko-edit-red"}
          className="reg-input ko-edit-red"
          readOnly="readonly"
          defaultValue="S1"
          // onClick={(ev) => setTeam(setGame, ev.target.value)}
        ></input>
      </div>
      <div className="white-text">
        <input
          // className={gameVar.length > 1 ? "" : "ko-edit-red"}
          className="reg-input ko-edit-red"
          readOnly="readonly"
          defaultValue="S2"
          // onClick={(ev) => setTeam(setGame, ev.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default S_UL;
