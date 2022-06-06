const Sequelize = require("sequelize");
const db = require("../db.js");

const { STRING, UUID, UUIDV4, INTEGER, VIRTUAL, BOOLEAN } = Sequelize;

const Team = db.define("teams", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },

  name: {
    type: STRING,
  },

  group: {
    type: STRING,
  },

  MP: {
    type: INTEGER,
    defaultValue: 0,
  },

  W: {
    type: INTEGER,
    defaultValue: 0,
  },

  D: {
    type: INTEGER,
    defaultValue: 0,
  },

  L: {
    type: INTEGER,
    defaultValue: 0,
  },

  GF: {
    type: INTEGER,
    defaultValue: 0,
  },

  GA: {
    type: INTEGER,
    defaultValue: 0,
  },

  GD: {
    type: INTEGER,
    defaultValue: 0,
  },

  pts: {
    type: INTEGER,
    defaultValue: 0,
  },

  // tieExists: {
  //   type: BOOLEAN,
  //   defaultValue: false,
  // },

  groupIsFinished: {
    type: BOOLEAN,
    defaultValue: false,
  },

  groupFinishingPosition: {
    type: INTEGER,
    defaultValue: null,
  },

  knockoutPosition: {
    type: VIRTUAL,
    get() {
      return `${this.group}${this.groupFinishingPosition}`;
    },
  },

  advanceToQ: {
    type: BOOLEAN,
    defaultValue: false,
  },

  advanceToS: {
    type: BOOLEAN,
    defaultValue: false,
  },

  advanceToF: {
    type: BOOLEAN,
    defaultValue: false,
  },

  advanceToChamp: {
    type: BOOLEAN,
    defaultValue: false,
  },

  outOfTourney: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Team;
