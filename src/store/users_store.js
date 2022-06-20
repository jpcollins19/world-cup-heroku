import axios from "axios";

const LOAD_USERS = "LOAD_USERS";
const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";

const _loadUsers = (users) => {
  return { type: LOAD_USERS, users };
};

const _addUser = (user) => {
  return { type: ADD_USER, user };
};

const _updateUser = (user) => {
  return { type: UPDATE_USER, user };
};

export const loadUsers = () => {
  return async (dispatch) => {
    const users = (await axios.get("/api/users")).data;
    dispatch(_loadUsers(users));
  };
};

export const addUser = (user, history) => {
  return async (dispatch) => {
    user = (await axios.post("/api/add/user", user)).data;
    dispatch(_addUser(user));
    history.push("/account_created");
  };
};

export const updateUser = (user, history) => {
  return async (dispatch) => {
    user = (await axios.put(`/api/users/${user.id}`, user)).data;
    dispatch(_updateUser(user));
    history.push("/leaderboard");
  };
};

export const users = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    case ADD_USER:
      return [...state, action.user];
    default:
      return state;
  }
};
