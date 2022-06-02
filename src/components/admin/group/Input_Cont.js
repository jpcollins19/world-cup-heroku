const Input_Cont = ({ entry, value, set, id, onChange }) => {
  return entry === "flag" ? (
    <img className="flag" src={value}></img>
  ) : (
    <input
      className={
        entry === "position"
          ? "position"
          : entry === "name"
          ? "name"
          : "input-space"
      }
      defaultValue={value}
      onChange={(ev) => onChange(ev.target.value, set, id)}
    />
  );
};

export default Input_Cont;
