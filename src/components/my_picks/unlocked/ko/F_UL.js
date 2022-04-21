const F_UL = () => {
  return (
    <div className="final">
      <h2>Final</h2>
      <div className="white-text">
        <input
          // className={gameVar.length > 1 ? "" : "ko-edit-red"}
          className="reg-input ko-edit-red"
          readOnly="readonly"
          defaultValue="F1"
          // onClick={(ev) => setTeam(setGame, ev.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default F_UL;
