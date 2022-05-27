import { useSelector } from "react-redux";

const Text = ({ lastUpdatedAnswer, setEdit }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      {lastUpdatedAnswer && lastUpdatedAnswer}
      {auth.email === "joe@gmail.com" && (
        <button className="last-updated-button" onClick={() => setEdit(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default Text;
