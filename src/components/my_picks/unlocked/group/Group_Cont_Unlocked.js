import Single_Group_Cont_Unlocked from "./Single_Group_Cont_Unlocked";

const Group_Cont_Unlocked = () => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div className="predictions-cont-edit">
      {letters.map((letter) => (
        <Single_Group_Cont_Unlocked key={letter} group={letter} />
      ))}
    </div>
  );
};

export default Group_Cont_Unlocked;
