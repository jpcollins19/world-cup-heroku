import { useSelector } from "react-redux";
import Rank_Cont_Locked from "./Rank_Cont_Locked";
import Prediction_Cont_Locked from "./Prediction_Cont_Locked";
import Outcome_Cont_Locked from "./Outcome_Cont_Locked";
import Points_Cont_Locked from "./Points_Cont_Locked";

const Single_Group_Cont_Locked = ({ group, selectedUser }) => {
  const user = useSelector((state) => state.auth);

  return user.groupA1 ? (
    <div className="single-group-cont-picks">
      <h4>Group {group}</h4>
      <div>
        <Rank_Cont_Locked />
        <Prediction_Cont_Locked group={group} selectedUser={selectedUser} />
        <Outcome_Cont_Locked group={group} />
        <Points_Cont_Locked group={group} selectedUser={selectedUser} />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Single_Group_Cont_Locked;
