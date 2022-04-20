import Rank_Cont_Unlocked from "./Rank_Cont_Unlocked";
import Prediction_Cont_Unlocked from "./Prediction_Cont_Unlocked";
import Alert from "@mui/material/Alert";

const Single_Group_Cont_Unlocked = ({ group }) => {
  // const user = useSelector((state) => state.auth);

  return (
    <div className="single-group-cont-edit-picks">
      <section className="error-cont-login">
        <Alert severity="error">Invalid picks in group below</Alert>
      </section>
      <h4>Group {group}</h4>
      <div>
        <Rank_Cont_Unlocked />
        <Prediction_Cont_Unlocked group={group} />
      </div>
    </div>
  );
};

export default Single_Group_Cont_Unlocked;
