import { useState } from "react";
import Select from "react-select";
import Group_Cont from "./Group_Cont";
import "./Group_Admin.css";

const Group_Admin_Page = () => {
  const [group, setGroup] = useState("");

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => {
    return { value: letter, label: `Group ${letter}` };
  });

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
        width: "15rem",
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
        width: "13.5rem",
        fontSize: "1.2rem",
        textAlign: "center",
        "&:hover": {
          background: "rgb(242, 242, 234)",
        },
      };
    },
  };

  return (
    <main className="group-admin-page">
      <div className="group-admin-dropdown-cont">
        <Select
          options={letters}
          placeholder={"Select Group"}
          onChange={(value) => setGroup(value.value)}
          styles={styles}
          isSearchable={false}
          className="group-admin-dropdown"
        />
      </div>
      <div className="group-cont">
        {group.length > 0 && <Group_Cont group={group} />}
      </div>
      {group.length > 0 && (
        <button type="submit" form="submit-group">
          Submit
        </button>
      )}
    </main>
  );
};

export default Group_Admin_Page;
