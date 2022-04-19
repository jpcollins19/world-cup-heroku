const Prediction_Cont = ({ group, user }) => {
  return (
    <div className="prediction-cont-pp">
      <h5>Prediction</h5>
      <div>{user[`group${group}1`]}</div>
      <div>{user[`group${group}2`]}</div>
      <div>{user[`group${group}3`]}</div>
      <div>{user[`group${group}4`]}</div>
    </div>
  );
};

export default Prediction_Cont;
