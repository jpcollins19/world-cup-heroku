import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUpdated } from "../../store";
import Text from "./Text";
import EditText from "./EditText";

const LastUpdated = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const submittedPicks = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker !== null
  );
  const lastUpdated = useSelector((state) => state.updated)[0];
  const lastUpdatedAnswer = lastUpdated && lastUpdated.answer;
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setEdit(false);
  }, []);

  const onChange = (value) => {
    setText(value);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const obj = {
        id: lastUpdated.id,
        answer: text,
      };

      dispatch(changeUpdated(obj));
      setEdit(false);
      setText("");
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      id="submit-last-updated"
      className={auth.id ? "last-updated-cont" : "last-updated-cont-NU"}
    >
      {auth.id && !edit && (
        <Text setEdit={setEdit} lastUpdatedAnswer={lastUpdatedAnswer} />
      )}
      {auth.id && auth.email === "joe@gmail.com" && edit && (
        <EditText
          text={text}
          setEdit={setEdit}
          onChange={onChange}
          lastUpdatedAnswer={lastUpdatedAnswer}
        />
      )}
      {auth.id && (
        <div className="submitted-picks">
          # of submitted picks: {submittedPicks.length}
        </div>
      )}
    </form>
  );
};

export default LastUpdated;
