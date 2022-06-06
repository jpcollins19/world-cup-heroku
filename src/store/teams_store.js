import axios from "axios";

const LOAD_TEAMS = "LOAD_TEAMS";
const UPDATE_TEAM = "UPDATE_TEAM";

const _loadTeams = (teams) => {
  return { type: LOAD_TEAMS, teams };
};

const _updateTeam = (team) => {
  return { type: UPDATE_TEAM, teams };
};

export const loadTeams = () => {
  return async (dispatch) => {
    const teams = (await axios.get("/api/teams")).data;
    dispatch(_loadTeams(teams));
  };
};

export const updateTeam = (team, history) => {
  return async (dispatch) => {
    team = (await axios.put(`/api/teams/${team.id}`, team)).data;
    dispatch(_updateTeam(team));
    history.push("/pool_picks");
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
