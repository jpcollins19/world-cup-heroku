const Input_Cont = ({
  selectedUser,
  val,
  setName,
  setPassword,
  setTourneyStage,
}) => {
  const setFunc = eval(`set${val}`);

  const value = val
    .split("")
    .map((letter, idx) => {
      return idx === 0 ? letter.toLowerCase() : letter;
    })
    .join("");

  return (
    <div className="input-cont">
      <input
        defaultValue={selectedUser[value]}
        onChange={(ev) => setFunc(ev.target.value)}
      ></input>
    </div>
  );
};

export default Input_Cont;
