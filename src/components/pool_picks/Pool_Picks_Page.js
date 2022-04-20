import { useState } from "react";
import { useSelector } from "react-redux";
import Point_System_Cont from "./Point_System_Cont";
import Single_Group_Cont from "./group/Single_Group_Cont";
import Total_Points_Cont from "./Total_Points_Cont";
import Knockout_Cont from "./ko/Knockout_Cont";
import "./Pool_Picks.css";

const Pool_Picks_Page = () => {
  const [user, setUser] = useState(useSelector((state) => state.auth));

  const users = useSelector((state) => state.users);

  const onChangeHandler = async (id) => {
    const part = users.find((part) => part.id === id);
    setUser(part);
  };

  return (
    <main className="pool-picks-page white text">
      <div className="pool-picks-container">
        <div className="pool-picks-header">
          <Point_System_Cont />
          <div className="pool-picks-header-name">
            <h1 className="white-text">Picks for: {user.name}</h1>
          </div>
          <div className="pool-picks-part-dropdown-cont">
            <h3 className="white-text">View Pool Picks</h3>
            <select onChange={(ev) => onChangeHandler(ev.target.value)}>
              <option key={user.id}>{user.name}</option>
              {users &&
                users
                  .filter((part) => user.id !== part.id)
                  .map((part) => (
                    <option key={part.id} value={part.id}>
                      {part.name}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="top-pp box-pp">
          <div className="box-pp left-pp">
            <div className="predictions-cont-pp">
              <Knockout_Cont user={user} />
            </div>
          </div>
          <div className="box-pp right-pp">
            <Total_Points_Cont user={user} />
          </div>
        </div>
        <div className="top-pp box-pp">
          <div className="box-pp left-pp">
            <Point_System_Cont />
            <div className="predictions-cont-pp">
              <Single_Group_Cont group={"A"} user={user} />
              <Single_Group_Cont group={"B"} user={user} />
              <Single_Group_Cont group={"C"} user={user} />
              <Single_Group_Cont group={"D"} user={user} />
              <Single_Group_Cont group={"E"} user={user} />
              <Single_Group_Cont group={"F"} user={user} />
              <Single_Group_Cont group={"G"} user={user} />
              <Single_Group_Cont group={"H"} user={user} />
            </div>
          </div>
          <div className="box-pp right-pp">
            <Total_Points_Cont user={user} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pool_Picks_Page;
