const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../db.js");
require("dotenv").config();

const { STRING, UUID, UUIDV4, BOOLEAN, INTEGER } = Sequelize;

const SALT_ROUNDS = 5;

const User = db.define("users", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  name: {
    type: STRING,
    defaultValue: null,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  admin: {
    type: BOOLEAN,
    defaultValue: false,
  },

  paid: {
    type: BOOLEAN,
    defaultValue: false,
  },
  groupA1: {
    type: STRING,
  },
  groupA2: {
    type: STRING,
  },
  groupA3: {
    type: STRING,
  },
  groupA4: {
    type: STRING,
  },

  groupB1: {
    type: STRING,
  },
  groupB2: {
    type: STRING,
  },
  groupB3: {
    type: STRING,
  },
  groupB4: {
    type: STRING,
  },

  groupC1: {
    type: STRING,
  },
  groupC2: {
    type: STRING,
  },
  groupC3: {
    type: STRING,
  },
  groupC4: {
    type: STRING,
  },

  groupD1: {
    type: STRING,
  },
  groupD2: {
    type: STRING,
  },
  groupD3: {
    type: STRING,
  },
  groupD4: {
    type: STRING,
  },

  groupE1: {
    type: STRING,
  },
  groupE2: {
    type: STRING,
  },
  groupE3: {
    type: STRING,
  },
  groupE4: {
    type: STRING,
  },

  groupF1: {
    type: STRING,
  },
  groupF2: {
    type: STRING,
  },
  groupF3: {
    type: STRING,
  },
  groupF4: {
    type: STRING,
  },

  groupG1: {
    type: STRING,
  },
  groupG2: {
    type: STRING,
  },
  groupG3: {
    type: STRING,
  },
  groupG4: {
    type: STRING,
  },

  groupH1: {
    type: STRING,
  },
  groupH2: {
    type: STRING,
  },
  groupH3: {
    type: STRING,
  },
  groupH4: {
    type: STRING,
  },

  knockQ1: {
    type: STRING,
  },
  knockQ2: {
    type: STRING,
  },
  knockQ3: {
    type: STRING,
  },
  knockQ4: {
    type: STRING,
  },
  knockQ5: {
    type: STRING,
  },
  knockQ6: {
    type: STRING,
  },
  knockQ7: {
    type: STRING,
  },
  knockQ8: {
    type: STRING,
  },

  knockS1: {
    type: STRING,
  },
  knockS2: {
    type: STRING,
  },
  knockS3: {
    type: STRING,
  },
  knockS4: {
    type: STRING,
  },

  knockF1: {
    type: STRING,
  },
  knockF2: {
    type: STRING,
  },

  knockChamp: {
    type: STRING,
  },

  tiebreaker: {
    type: INTEGER,
  },

  tourneyStage: {
    type: STRING,
    defaultValue: "pre",
  },
});

//before WC starts: pre
//once the WC commences: commenced
//once groupstage settles, before KO stage begins: pre-ko
//once KO stage commences: KO

User.addHook("beforeSave", async function (user) {
  if (user._changed.has("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
});

User.byToken = async (token) => {
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (user) {
      return user;
    }
    const error = Error("bad credentials - in byToken - on try");
    error.status = 401;
    throw error;
  } catch (err) {
    console.log("REEEEED", err);
    const error = Error("bad credentials - in byToken on catch");
    error.status = 401;
    throw error;
  }
};

User.authenticate = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT, {
        expiresIn: 30 * 60,
      });
      return token;
    }
    const error = Error("bad credentials - in authenticate - try");
    error.status = 401;
    throw error;
  } catch (err) {
    console.log("REEED", err);
    const error = Error("bad credentials - in authenticate - catch");
    error.status = 401;
    throw error;
  }
};

module.exports = User;
