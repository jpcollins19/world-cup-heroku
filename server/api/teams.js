const app = require("express").Router();

const {
  models: { Team },
} = require("../db/index.js");

app.get("/api/teams", async (req, res, next) => {
  try {
    const users = await Team.findAll();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
