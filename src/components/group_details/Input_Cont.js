const Input_Cont = ({ team, entry }) => {
  return entry && entry === "flag" ? (
    <img key={entry} className={`${entry}-gd`} src={team && team[entry]}></img>
  ) : (
    <div key={entry} className={`${entry}-gd`}>
      {team[entry]}
    </div>
  );
};

export default Input_Cont;
