const Input_Cont = ({ entry, teamObj, idx, onChange }) => {
  return entry && entry === "flag" ? (
    <img key={entry} className={entry} src={teamObj && teamObj[entry]}></img>
  ) : (
    <input
      key={entry}
      className={
        entry === "position" || entry === "name" ? entry : "input-space"
      }
      defaultValue={teamObj && teamObj[entry]}
      onChange={(ev) => onChange(idx, entry, ev.target.value)}
    />
  );
};

export default Input_Cont;
