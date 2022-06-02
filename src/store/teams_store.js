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
    console.log("team before", team);
    team = (await axios.put(`/api/teams/${team.id}`, team)).data;
    dispatch(_updateTeam(team));
    history.push("/group_details");
  };
};

export const teams = (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.teams;
    // case UPDATE_TEAM:
    //   return [...state].map((team) => {
    //     console.log("teams state", action);
    //     if (team.id === action.team.id) {
    //       team = action.team;
    //     }
    //     return team;
    //   });
    default:
      return state;
  }
};
