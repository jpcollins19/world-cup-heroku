import { useSelector } from "react-redux";

const Payout = () => {
  const submittedPicks = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker !== null
  );

  const payoutInfo = submittedPicks && submittedPicks.length * 20;

  return (
    <div className="payout">
      <h4> Payout Info:</h4>
      <div className="payout-cont-f">
        <div className="payout-text-cont">
          <div className="place-col-cont">
            <div>1st</div>
            <div>2nd</div>
            <div>3rd</div>
          </div>
          <div className="dollar-col-cont">
            <div>${((payoutInfo - 20) * 0.75).toFixed(2)}</div>
            <div>${((payoutInfo - 20) * 0.25).toFixed(2)}</div>
            <div>$20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payout;
