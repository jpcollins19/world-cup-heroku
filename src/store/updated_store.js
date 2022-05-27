import axios from "axios";

const LOAD_UPDATED = "LOAD_UPDATED";
const CHANGE_UPDATED = "CHANGE_UPDATED";

const _loadUpdated = (update) => {
  return { type: LOAD_UPDATED, update };
};

const _changeUpdated = (update) => {
  return { type: CHANGE_UPDATED, update };
};

export const loadUpdated = () => {
  return async (dispatch) => {
    const update = (await axios.get("/api/updated")).data;
    dispatch(_loadUpdated(update));
  };
};

export const changeUpdated = (update) => {
  return async (dispatch) => {
    update = (await axios.put(`/api/updated/${update.id}`, update)).data;
    dispatch(_changeUpdated(update));
  };
};

export const updated = (state = [], action) => {
  switch (action.type) {
    case LOAD_UPDATED:
      return action.update;
    case CHANGE_UPDATED:
      return [...state].map((obj) => {
        if (obj.id === action.update.id) {
          obj.answer = action.update.answer;
        }
        return obj;
      });
    default:
      return state;
  }
};
