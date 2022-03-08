const db = require("./db");
const User = require("./models/User");
const Team = require("./models/Team");

module.exports = {
  db,
  models: {
    User,
    Team,
  },
};
