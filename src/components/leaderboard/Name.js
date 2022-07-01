import { useSelector } from "react-redux";
import { paidStatus } from "../../store";

const Name = ({ rankInfo }) => {
  const users = useSelector((state) => state.users);

  return (
    <div className="name-column">
      <h2 className="white-text">Name</h2>
      {rankInfo &&
        rankInfo.map((user, idx) => {
          const paid = paidStatus(users && users, user.name);
          return (
            <div key={idx}>
              <input
                className={`name-box center bold ${
                  user.tieExists ? "tie-tie" : ""
                } ${!paid && "not-paid"}`}
                defaultValue={`${user.name}${!paid ? " - not paid" : ""}${
                  user.tieExists ? " - same tiebreaker" : ""
                }`}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Name;
