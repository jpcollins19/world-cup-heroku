import Rank_Cont_Unlocked from "./Rank_Cont_Unlocked";
import Prediction_Cont_Unlocked from "./Prediction_Cont_Unlocked";
import Alert from "@mui/material/Alert";

const Single_Group_Cont_Unlocked = ({
  group,
  selectedUser,
  onChangeSelectionObj,
  groupError,
  setGroupError,
}) => {
  const onChange = (answer, group) => {
    onChangeSelectionObj(group, answer[0], answer[1]);
    setGroupError(false);
  };

  return (
    <div className="single-group-cont-edit-picks">
      <section className="error-cont-login">
        {groupError && (
          <Alert severity="error">Invalid picks in group below</Alert>
        )}
      </section>
      <h4>Group {group}</h4>
      <div>
        <Rank_Cont_Unlocked />
        <Prediction_Cont_Unlocked
          group={group}
          onChange={onChange}
          selectedUser={selectedUser}
        />
      </div>
    </div>
  );
};

export default Single_Group_Cont_Unlocked;
