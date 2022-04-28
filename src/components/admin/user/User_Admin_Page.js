import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Input_Cont from "./Input_Cont";
import { updateUser } from "../../../store";
import "./User_Admin.css";

const User_Admin_Page = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [paid, setPaid] = useState(false);
  const [tourneyStage, setTourneyStage] = useState("");

  const users = useSelector((state) => state.users);

  const joe = useSelector((state) =>
    state.users.find((user) => user.email === "joe@gmail.com")
  );

  const dispatch = useDispatch();

  const onChangeHandler = async (id) => {
    const part = users.find((part) => part.id === id);
    setSelectedUser(part);
  };

  const history = useHistory();

  useEffect(() => {
    setName(selectedUser.name);
    setPassword(selectedUser.password);
    setPaid(selectedUser.paid);
    setTourneyStage(selectedUser.tourneyStage);
  }, [selectedUser]);

  const togglePaid = () => setPaid((value) => !value);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const user = {
        id: selectedUser.id,
        name,
        password,
        paid,
        tourneyStage,
      };

      dispatch(updateUser(user, history));
    } catch (err) {
      console.log(err);
    }
  };

  // const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <main className="user-admin-page white text">
      <form className="user-admin-container" onSubmit={handleSubmit}>
        <div className="user-admin-header">
          <div className="user-admin-dropdown-cont">
            <select
              onChange={(ev) => {
                setSelectedUser(
                  users.find((user) => user.id === ev.target.value)
                );
              }}
            >
              <option value={joe && joe.id}>Select User</option>
              <option value={joe && joe.id}>{joe && joe.email}</option>
              {users &&
                users
                  .filter((user) => user.email !== "joe@gmail.com")
                  .map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.email}
                    </option>
                  ))}
            </select>
          </div>
          <div className="user-details-cont">
            <div>
              <div>
                <div className="user-detail-title">Name:</div>
                <Input_Cont
                  selectedUser={selectedUser}
                  val="Name"
                  setName={setName}
                />
              </div>
              <div>
                <div className="user-detail-title">Password:</div>
                <Input_Cont
                  selectedUser={selectedUser}
                  val="Password"
                  setPassword={setPassword}
                />
              </div>
            </div>
            <div>
              <div>
                <div className="user-detail-title">Tourney Stage:</div>
                <Input_Cont
                  selectedUser={selectedUser}
                  val="TourneyStage"
                  setTourneyStage={setTourneyStage}
                />
              </div>

              <div>
                <div className="paid-cont">Paid:</div>
                <input
                  className="checkbox-cont"
                  type="checkbox"
                  defaultValue={paid}
                  onChange={togglePaid}
                  checked={paid ? paid : !!paid}
                ></input>
              </div>
            </div>

            <button className="admin-button">Submit Picks</button>
          </div>
        </div>
        {/* <div className="top box">
          <div className="box left">
            <div className="predictions-cont">
              <Knockout_Cont selectedUser={selectedUser} />
            </div>
          </div>
          <div className="box right">
            <Total_Points_Cont selectedUser={selectedUser} />
          </div>
        </div> */}
        {/* <div className="top box">
          <div className="box left">
            <Point_System_Cont />
            <div className="predictions-cont">
              {letters.map((letter) => (
                <Single_Group_Cont
                  key={letter}
                  group={letter}
                  selectedUser={selectedUser}
                />
              ))}
            </div>
          </div>
          <div className="box right">
            <Total_Points_Cont selectedUser={selectedUser} />
          </div>
        </div> */}
      </form>
    </main>
  );
};

export default User_Admin_Page;
