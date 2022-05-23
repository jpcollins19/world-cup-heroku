import Single_Cont from "./Single_Cont";
import "./Group_Details.css";

const Group_Details_Page = () => {
  return (
    <main className="group-details-page">
      <div className="group-details-container">
        <div className="group-details-full-table-container">
          <Single_Cont group={"A"} />
          <Single_Cont group={"B"} />
          <Single_Cont group={"C"} />
          <Single_Cont group={"D"} />
          <Single_Cont group={"E"} />
          <Single_Cont group={"F"} />
          <Single_Cont group={"G"} />
          <Single_Cont group={"H"} />
        </div>
      </div>
    </main>
  );
};

export default Group_Details_Page;
