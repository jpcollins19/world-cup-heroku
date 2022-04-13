import { Link, useLocation } from "react-router-dom";

const Point_System_Cont = (
  {
    //   participants,
    //   location: { pathname },
    //   onChangeHandler,
    //   part,
  }
) => {
  const { pathname } = useLocation();
  //   if (!participants || !onChangeHandler || !part) {
  //     return null;
  //   }

  return (
    <div className="point-system-table-cont">
      <div className="point-system-table-text">
        <div className="color-cont">
          <div className="blue-PS">.</div>
          <div className="yellow-PS">.</div>
          <div className="orange-PS">.</div>
          <div className="green-PS">.</div>
        </div>
        <div className="notes-cont">
          <div>picked correct country to win group</div>
          <div>picked correct runner-up country</div>
          <div>
            picked correct country to advance, but not in correct 1/2 position
          </div>
          <div>picked correct country for the 3/4 position</div>
        </div>
      </div>

      {/* {pathname === "/pool_picks" && (
        <div className="pool-picks-part-dropdown-cont">
          <select onChange={(ev) => onChangeHandler(ev.target.value)}>
            <option>{part.name}</option>
            {participants
              .filter((participant) => participant.id !== part.id)
              .map((part) => (
                <option key={part.id} value={part.id}>
                  {part.name}
                </option>
              ))}
          </select>
        </div>
      )} */}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   const participants = state.participants;
//   return { participants };
// };

export default Point_System_Cont;
