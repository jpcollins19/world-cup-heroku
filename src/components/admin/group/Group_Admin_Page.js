import { useState } from "react";
import Group_Cont from "./Group_Cont";
import "./Group_Admin.css";

const Group_Admin_Page = () => {
  const [group, setGroup] = useState("");

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <main className="group-admin-page">
      <div className="group-admin-dropdown-cont">
        <select onChange={(ev) => setGroup(ev.target.value)}>
          <option>Select Group</option>
          {letters.map((letter) => (
            <option key={letter} value={letter}>
              {letter}
            </option>
          ))}
        </select>
      </div>
      <div className="group-cont">
        {group.length > 0 && <Group_Cont group={group} />}
      </div>
    </main>
  );
};

export default Group_Admin_Page;
