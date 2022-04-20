import R16_Game from "../R16_Game";
import CancelIcon from "@mui/icons-material/CancelOutlined";

const Q_Left_UL = ({ Q1, Q2, setTeam }) => {
  return (
    <div className="quarters">
      <h2>Quarters</h2>
      <div className="white-text">
        <div className="Q1L-edit">
          <div className="cancel">
            {Q1.length > 0 && (
              <CancelIcon sx={{ color: "red", fontSize: 30 }} />
            )}
          </div>
          <div className="team-name">
            <div>{Q1 && Q1}</div>
          </div>
        </div>
        <div className="Q2L-edit">
          <div className="cancel">
            {Q2.length > 0 && (
              <CancelIcon sx={{ color: "red", fontSize: 30 }} />
            )}
          </div>
          <div className="team-name">
            <div>{Q2 && Q2}</div>
          </div>
        </div>
      </div>
      <div className="white-text">
        <div className="Q3L">stan</div>
        <div className="Q4L">nugget</div>
      </div>
    </div>
  );
};

export default Q_Left_UL;
