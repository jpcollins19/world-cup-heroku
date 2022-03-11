const {
  db,
  models: { User, Team },
} = require("../db/index.js");

const teamInfo = [
  { name: "Uruguay", group: "A" },
  { name: "Russia", group: "A" },
  { name: "Egypt", group: "A" },
  { name: "Saudi Arabia", group: "A" },

  { name: "Spain", group: "B" },
  { name: "Portugal", group: "B" },
  { name: "Iran", group: "B" },
  { name: "Morocco", group: "B" },

  { name: "France", group: "C" },
  { name: "Peru", group: "C" },
  { name: "Denmark", group: "C" },
  { name: "Australia", group: "C" },

  { name: "Argentina", group: "D" },
  { name: "Croatia", group: "D" },
  { name: "Nigeria", group: "D" },
  { name: "Iceland", group: "D" },

  { name: "Brasil", group: "E" },
  { name: "Switz", group: "E" },
  { name: "Serbia", group: "E" },
  { name: "Costa Rica", group: "E" },

  { name: "Germany", group: "F" },
  { name: "Mexico", group: "F" },
  { name: "Sweden", group: "F" },
  { name: "S. Korea", group: "F" },

  { name: "Belgium", group: "G" },
  { name: "England", group: "G" },
  { name: "Tunisia", group: "G" },
  { name: "Panama", group: "G" },

  { name: "Poland", group: "H" },
  { name: "Colombia", group: "H" },
  { name: "Senegal", group: "H" },
  { name: "Japan", group: "H" },
];

const users = [
  {
    email: "joe@gmail.com",
    password: "joe",
    name: "Joe",
    admin: true,

    groupA1: "Uruguay",
    groupA2: "Russia",
    groupA3: "Egypt",
    groupA4: "Saudi Arabia",

    groupB1: "Spain",
    groupB2: "Portugal",
    groupB3: "Iran",
    groupB4: "Morocco",

    groupC1: "France",
    groupC2: "Peru",
    groupC3: "Denmark",
    groupC4: "Australia",

    groupD1: "Argentina",
    groupD2: "Croatia",
    groupD3: "Nigeria",
    groupD4: "Iceland",

    groupE1: "Brasil",
    groupE2: "Switz",
    groupE3: "Serbia",
    groupE4: "Costa Rica",

    groupF1: "Germany",
    groupF2: "Mexico",
    groupF3: "Sweden",
    groupF4: "S. Korea",

    groupG1: "Belgium",
    groupG2: "England",
    groupG3: "Tunisia",
    groupG4: "Panama",

    groupH1: "Poland",
    groupH2: "Colombia",
    groupH3: "Senegal",
    groupH4: "Japan",

    knockQ1: "Uruguay",
    knockQ2: "France",
    knockQ3: "Brasil",
    knockQ4: "Belgium",
    knockQ5: "Russia",
    knockQ6: "Croatia",
    knockQ7: "Sweden",
    knockQ8: "England",

    knockS1: "Uruguay",
    knockS2: "Belgium",
    knockS3: "Croatia",
    knockS4: "England",

    knockF1: "Belgium",
    knockF2: "Croatia",

    knockChamp: "Belgium",

    tiebreaker: 152,
  },
  {
    email: "e@gmail.com",
    password: "e",
    name: "E",

    groupA1: "Russia",
    groupA2: "Egypt",
    groupA3: "Uruguay",
    groupA4: "Saudi Arabia",

    groupB1: "Morocco",
    groupB2: "Iran",
    groupB3: "Portugal",
    groupB4: "Spain",

    groupC1: "France",
    groupC2: "Denmark",
    groupC3: "Peru",
    groupC4: "Australia",

    groupD1: "Croatia",
    groupD2: "Argentina",
    groupD3: "Iceland",
    groupD4: "Nigeria",

    groupE1: "Switz",
    groupE2: "Serbia",
    groupE3: "Brasil",
    groupE4: "Costa Rica",

    groupF1: "Germany",
    groupF2: "Mexico",
    groupF3: "Sweden",
    groupF4: "S. Korea",

    groupG1: "Belgium",
    groupG2: "England",
    groupG3: "Tunisia",
    groupG4: "Panama",

    groupH1: "Poland",
    groupH2: "Colombia",
    groupH3: "Senegal",
    groupH4: "Japan",

    knockQ1: "Portugal",
    knockQ2: "France",
    knockQ3: "Brasil",
    knockQ4: "Belgium",
    knockQ5: "Russia",
    knockQ6: "Croatia",
    knockQ7: "Switz",
    knockQ8: "England",

    knockS1: "Portugal",
    knockS2: "Brasil",
    knockS3: "Russia",
    knockS4: "Switz",

    knockF1: "Portugal",
    knockF2: "Russia",

    knockChamp: "Portugal",

    tiebreaker: 130,
  },
  {
    email: "coach@gmail.com",
    password: "coach",
    name: "Coach",

    groupA1: "Uruguay",
    groupA2: "Russia",
    groupA3: "Egypt",
    groupA4: "Saudi Arabia",

    groupB1: "Spain",
    groupB2: "Portugal",
    groupB3: "Morocco",
    groupB4: "Iran",

    groupC1: "France",
    groupC2: "Peru",
    groupC3: "Denmark",
    groupC4: "Australia",

    groupD1: "Argentina",
    groupD2: "Croatia",
    groupD3: "Nigeria",
    groupD4: "Iceland",

    groupE1: "Brasil",
    groupE2: "Switz",
    groupE3: "Serbia",
    groupE4: "Costa Rica",

    groupF1: "Sweden",
    groupF2: "Germany",
    groupF3: "Mexico",
    groupF4: "S. Korea",

    groupG1: "Panama",
    groupG2: "England",
    groupG3: "Tunisia",
    groupG4: "Belgium",

    groupH1: "Poland",
    groupH2: "Senegal",
    groupH3: "Colombia",
    groupH4: "Japan",

    knockQ1: "Uruguay",
    knockQ2: "France",
    knockQ3: "Mexico",
    knockQ4: "Japan",
    knockQ5: "Russia",
    knockQ6: "Denmark",
    knockQ7: "Sweden",
    knockQ8: "Colombia",

    knockS1: "France",
    knockS2: "Belgium",
    knockS3: "Denmark",
    knockS4: "England",

    knockF1: "Belgium",
    knockF2: "Denmark",

    knockChamp: "Denmark",

    tiebreaker: 40,
  },

  {
    email: "kelly@gmail.com",
    password: "kelly",
    name: "Kelly",

    groupA1: "Uruguay",
    groupA2: "Russia",
    groupA3: "Egypt",
    groupA4: "Saudi Arabia",

    groupB1: "Spain",
    groupB2: "Portugal",
    groupB3: "Iran",
    groupB4: "Morocco",

    groupC1: "Australia",
    groupC2: "Denmark",
    groupC3: "France",
    groupC4: "Peru",

    groupD1: "Croatia",
    groupD2: "Iceland",
    groupD3: "Nigeria",
    groupD4: "Argentina",

    groupE1: "Brasil",
    groupE2: "Switz",
    groupE3: "Serbia",
    groupE4: "Costa Rica",

    groupF1: "Sweden",
    groupF2: "S. Korea",
    groupF3: "Germany",
    groupF4: "Mexico",

    groupG1: "Belgium",
    groupG2: "England",
    groupG3: "Tunisia",
    groupG4: "Panama",

    groupH1: "Poland",
    groupH2: "Colombia",
    groupH3: "Senegal",
    groupH4: "Japan",

    knockQ1: "Portugal",
    knockQ2: "France",
    knockQ3: "Mexico",
    knockQ4: "Belgium",
    knockQ5: "Russia",
    knockQ6: "Croatia",
    knockQ7: "Sweden",
    knockQ8: "Colombia",

    knockS1: "France",
    knockS2: "Mexico",
    knockS3: "Croatia",
    knockS4: "Colombia",

    knockF1: "Mexico",
    knockF2: "Croatia",

    knockChamp: "Mexico",

    tiebreaker: 120,
  },
];

const syncAndSeed = async () => {
  await db.sync({ force: true });
  /////////////////////////////////////////////////////////////
  const [
    Uruguay,
    Russia,
    Egypt,
    Saudi_Arabia,
    Spain,
    Portugal,
    Iran,
    Morocco,
    France,
    Peru,
    Denmark,
    Australia,
    Argentina,
    Croatia,
    Nigeria,
    Iceland,
    Brasil,
    Switz,
    Serbia,
    Costa_Rica,
    Germany,
    Mexico,
    Sweden,
    S_Korea,
    Belgium,
    England,
    Tunisia,
    Panama,
    Poland,
    Colombia,
    Senegal,
    Japan,
  ] = await Promise.all(
    teamInfo.map((obj) =>
      Team.create({
        name: obj.name,
        group: obj.group,
      })
    )
  );

  const [Joe, E, Coach, Kelly] = await Promise.all(
    users.map((obj) =>
      User.create({
        email: obj.email,
        password: obj.password,
        name: obj.name,
        admin: obj.admin,
        groupA1: obj.groupA1,
        groupA2: obj.groupA2,
        groupA3: obj.groupA3,
        groupA4: obj.groupA4,

        groupB1: obj.groupB1,
        groupB2: obj.groupB2,
        groupB3: obj.groupB3,
        groupB4: obj.groupB4,

        groupC1: obj.groupC1,
        groupC2: obj.groupC2,
        groupC3: obj.groupC3,
        groupC4: obj.groupC4,

        groupD1: obj.groupD1,
        groupD2: obj.groupD2,
        groupD3: obj.groupD3,
        groupD4: obj.groupD4,

        groupE1: obj.groupE1,
        groupE2: obj.groupE2,
        groupE3: obj.groupE3,
        groupE4: obj.groupE4,

        groupF1: obj.groupF1,
        groupF2: obj.groupF2,
        groupF3: obj.groupF3,
        groupF4: obj.groupF4,

        groupG1: obj.groupG1,
        groupG2: obj.groupG2,
        groupG3: obj.groupG3,
        groupG4: obj.groupG4,

        groupH1: obj.groupH1,
        groupH2: obj.groupH2,
        groupH3: obj.groupH3,
        groupH4: obj.groupH4,

        knockQ1: obj.knockQ1,
        knockQ2: obj.knockQ2,
        knockQ3: obj.knockQ3,
        knockQ4: obj.knockQ4,
        knockQ5: obj.knockQ5,
        knockQ6: obj.knockQ6,
        knockQ7: obj.knockQ7,
        knockQ8: obj.knockQ8,

        knockS1: obj.knockS1,
        knockS2: obj.knockS2,
        knockS3: obj.knockS3,
        knockS4: obj.knockS4,

        knockF1: obj.knockF1,
        knockF2: obj.knockF2,

        knockChamp: obj.knockChamp,

        tiebreaker: obj.tiebreaker,
      })
    )
  );

  Uruguay.groupFinishingPosition = 1;
  Russia.groupFinishingPosition = 2;
  Egypt.groupFinishingPosition = 4;
  Saudi_Arabia.groupFinishingPosition = 3;
  Spain.groupFinishingPosition = 1;
  Portugal.groupFinishingPosition = 2;
  Iran.groupFinishingPosition = 3;
  Morocco.groupFinishingPosition = 4;
  France.groupFinishingPosition = 1;
  Peru.groupFinishingPosition = 3;
  Denmark.groupFinishingPosition = 2;
  Australia.groupFinishingPosition = 4;
  Argentina.groupFinishingPosition = 2;
  Croatia.groupFinishingPosition = 1;
  Nigeria.groupFinishingPosition = 3;
  Iceland.groupFinishingPosition = 4;
  Brasil.groupFinishingPosition = 1;
  Switz.groupFinishingPosition = 2;
  Serbia.groupFinishingPosition = 3;
  Costa_Rica.groupFinishingPosition = 4;
  Germany.groupFinishingPosition = 4;
  Mexico.groupFinishingPosition = 2;
  Sweden.groupFinishingPosition = 1;
  S_Korea.groupFinishingPosition = 3;
  Belgium.groupFinishingPosition = 1;
  England.groupFinishingPosition = 2;
  Tunisia.groupFinishingPosition = 3;
  Panama.groupFinishingPosition = 4;
  Poland.groupFinishingPosition = 4;
  Colombia.groupFinishingPosition = 1;
  Senegal.groupFinishingPosition = 3;
  Japan.groupFinishingPosition = 2;

  Uruguay.advanceToQ = true;
  Russia.advanceToQ = true;
  France.advanceToQ = true;
  Croatia.advanceToQ = true;
  Brasil.advanceToQ = true;
  Sweden.advanceToQ = true;
  Belgium.advanceToQ = true;
  England.advanceToQ = true;

  Uruguay.advanceToS = true;
  Croatia.advanceToS = true;
  Belgium.advanceToS = true;
  England.advanceToS = true;

  Belgium.advanceToF = true;
  Croatia.advanceToF = true;

  Belgium.advanceToChamp = true;

  await Promise.all([
    Uruguay.save(),
    Russia.save(),
    Egypt.save(),
    Saudi_Arabia.save(),
    Spain.save(),
    Portugal.save(),
    Iran.save(),
    Morocco.save(),
    France.save(),
    Peru.save(),
    Denmark.save(),
    Australia.save(),
    Argentina.save(),
    Croatia.save(),
    Nigeria.save(),
    Iceland.save(),
    Brasil.save(),
    Switz.save(),
    Serbia.save(),
    Costa_Rica.save(),
    Germany.save(),
    Mexico.save(),
    Sweden.save(),
    S_Korea.save(),
    Belgium.save(),
    England.save(),
    Tunisia.save(),
    Panama.save(),
    Poland.save(),
    Colombia.save(),
    Senegal.save(),
    Japan.save(),
  ]);
};

module.exports = syncAndSeed;
