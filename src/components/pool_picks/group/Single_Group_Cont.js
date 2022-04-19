import Rank_Cont from "./Rank_Cont";
import Prediction_Cont from "./Prediction_Cont";
import Outcome_Cont from "./Outcome_Cont";
import Points_Cont from "./Points_Cont";

const Single_Group_Cont = ({ group, user }) => {
  return (
    <div className="single-group-cont-pp">
      <h4>Group {group}</h4>
      <div>
        <Rank_Cont />
        <Prediction_Cont group={group} user={user} />
        <Outcome_Cont group={group} />
        <Points_Cont group={group} user={user} />
      </div>
    </div>
  );
};

export default Single_Group_Cont;
