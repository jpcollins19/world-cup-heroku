const Input_Cont = ({ onChange, name, defaultValue }) => {
  return (
    <div className="input-cont">
      <input
        onChange={onChange && onChange}
        name={name && name}
        defaultValue={defaultValue && defaultValue}
      ></input>
    </div>
  );
};

export default Input_Cont;
