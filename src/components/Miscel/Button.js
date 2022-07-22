const Button = ({ form, text, disabled }) => {
  return (
    <div className="button-cont">
      <button
        form={form ? form : ""}
        type={form ? "submit" : ""}
        disabled={disabled ? disabled : ""}
        className="button"
      >
        {text && text}
      </button>
    </div>
  );
};

export default Button;
