import { useSelector } from "react-redux";

const Prediction_Cont_Locked = ({ group }) => {
  const user = useSelector((state) => state.auth);

  return (
    <div className="prediction-cont">
      <h5>Prediction</h5>
      <div>{user[`group${group}1`]}</div>
      <div>{user[`group${group}2`]}</div>
      <div>{user[`group${group}3`]}</div>
      <div>{user[`group${group}4`]}</div>
    </div>
  );
};

export default Prediction_Cont_Locked;
