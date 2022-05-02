import Single_Group_Cont_Unlocked from "./Single_Group_Cont_Unlocked";

const Group_Cont_Unlocked = ({
  onChangeSelectionObj,
  groupAError,
  groupBError,
  groupCError,
  groupDError,
  groupEError,
  groupFError,
  groupGError,
  groupHError,
  setGroupAError,
  setGroupBError,
  setGroupCError,
  setGroupDError,
  setGroupEError,
  setGroupFError,
  setGroupGError,
  setGroupHError,
}) => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div className="predictions-cont-edit">
      {letters.map((letter) => {
        const groupError = eval(`group${letter}Error`);
        const setGroupError = eval(`setGroup${letter}Error`);

        return (
          <Single_Group_Cont_Unlocked
            key={letter}
            group={letter}
            onChangeSelectionObj={onChangeSelectionObj}
            groupError={groupError}
            setGroupError={setGroupError}
          />
        );
      })}
    </div>
  );
};

export default Group_Cont_Unlocked;
