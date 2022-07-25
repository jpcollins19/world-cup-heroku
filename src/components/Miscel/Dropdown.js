import Select from "react-select";

const styles = {
  placeholder: (styles) => {
    return {
      ...styles,
      color: "black",
    };
  },
  dropdownIndicator: (styles) => {
    return {
      ...styles,
      color: "black",
      "&:hover": {
        color: "black",
      },
    };
  },
  indicatorSeparator: (styles) => {
    return {
      ...styles,
      background: "black",
    };
  },
  control: (styles) => {
    return {
      ...styles,
      background: "none",
      color: "black",
      border: "solid black 2px",
      cursor: "pointer",
      width: "19rem",
      borderRadius: "0.5rem",
      fontSize: "1.2rem",
      textAlign: "center",
      "&:hover": {
        border: "solid black 2px",
      },
    };
  },
  option: (styles) => {
    return {
      ...styles,
      background: "white",
      color: "black",
      borderBottom: "solid lightGrey 2px",
      cursor: "pointer",
      width: "19rem",
      fontSize: "1.2rem",
      textAlign: "center",
      "&:hover": {
        background: "rgb(242, 242, 234)",
      },
    };
  },
};

const Dropdown = ({ placeholder, options, set }) => {
  return (
    <div className="dropdown-cont">
      <Select
        options={options && options}
        placeholder={placeholder}
        onChange={(option) => set(option.value)}
        styles={styles}
        isSearchable={false}
        className="dropdown"
      />
    </div>
  );
};

export default Dropdown;
