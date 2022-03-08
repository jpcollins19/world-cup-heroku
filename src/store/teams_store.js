import axios from "axios";

const LOAD_TEAMS = "LOAD_TEAMS";

const _loadTeams = (teams) => {
  return { type: LOAD_TEAMS, teams };
};

export const loadTeams = () => {
  return async (dispatch) => {
    const teams = (await axios.get("/api/teams")).data;
    dispatch(_loadTeams(teams));
  };
};

export const teams = (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.teams;
    default:
      return state;
  }
};
