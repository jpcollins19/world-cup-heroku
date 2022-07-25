import Select from "react-select";

const Dropdown = ({ placeholder, options, width, defaultValue, set }) => {
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
        width,
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
        width,
        fontSize: "1.2rem",
        textAlign: "center",
        "&:hover": {
          background: "rgb(242, 242, 234)",
        },
      };
    },
  };

  return (
    <div className="dropdown-cont">
      <Select
        options={options && options}
        placeholder={placeholder ? placeholder : ""}
        defaultValue={defaultValue ? defaultValue : ""}
        onChange={set && set}
        styles={styles}
        isSearchable={false}
        className="dropdown"
      />
    </div>
  );
};

export default Dropdown;
