const {
  db,
  models: { User, Team, Updated },
} = require("../db/index.js");

const teamInfo = [
  { name: "Qatar", group: "A" },
  { name: "Ecuador", group: "A" },
  { name: "Senegal", group: "A" },
  { name: "Netherlands", group: "A" },

  { name: "England", group: "B" },
  { name: "Iran", group: "B" },
  { name: "USA", group: "B" },
  { name: "Wales", group: "B" },

  { name: "Argentina", group: "C" },
  { name: "Saudi Arabia", group: "C" },
  { name: "Mexico", group: "C" },
  { name: "Poland", group: "C" },

  { name: "France", group: "D" },
  { name: "Russia", group: "D" },
  { name: "Denmark", group: "D" },
  { name: "Tunisia", group: "D" },

  { name: "Spain", group: "E" },
  { name: "Italy", group: "E" },
  { name: "Germany", group: "E" },
  { name: "Japan", group: "E" },

  { name: "Belgium", group: "F" },
  { name: "Canada", group: "F" },
  { name: "Morocco", group: "F" },
  { name: "Croatia", group: "F" },

  { name: "Brasil", group: "G" },
  { name: "Serbia", group: "G" },
  { name: "Switz", group: "G" },
  { name: "Cameroon", group: "G" },

  { name: "Portugal", group: "H" },
  { name: "Ghana", group: "H" },
  { name: "Uruguay", group: "H" },
  { name: "S. Korea", group: "H" },
];

const users = [
  {
    email: "joe@gmail.com",
    password: "nugget",
    name: "Joe",
    admin: true,
    paid: true,

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "USA",
    groupB4: "Wales",

    groupC1: "Argentina",
    groupC2: "Poland",
    groupC3: "Mexico",
    groupC4: "Saudi Arabia",

    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Russia",
    groupD4: "Tunisia",

    groupE1: "Italy",
    groupE2: "Germany",
    groupE3: "Japan",
    groupE4: "Spain",

    groupF1: "Morocco",
    groupF2: "Canada",
    groupF3: "Belgium",
    groupF4: "Croatia",

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 152,
  },
  {
    email: "stanley@gmail.com",
    password: "stanley",
    name: "Stanley",
    admin: true,

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "USA",
    groupB4: "Wales",

    groupC1: "Argentina",
    groupC2: "Poland",
    groupC3: "Mexico",
    groupC4: "Saudi Arabia",

    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Russia",
    groupD4: "Tunisia",

    groupE1: "Italy",
    groupE2: "Germany",
    groupE3: "Japan",
    groupE4: "Spain",

    groupF1: "Morocco",
    groupF2: "Canada",
    groupF3: "Belgium",
    groupF4: "Croatia",

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 140,
  },
  {
    email: "e@gmail.com",
    password: "e",
    name: "E",

    groupA1: "Netherlands",
    groupA2: "Ecuador",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "USA",
    groupB2: "Wales",
    groupB3: "England",
    groupB4: "Iran",

    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",

    groupD1: "Denmark",
    groupD2: "France",
    groupD3: "Tunisia",
    groupD4: "Russia",

    groupE1: "Germany",
    groupE2: "Japan",
    groupE3: "Italy",
    groupE4: "Spain",

    groupF1: "Morocco",
    groupF2: "Canada",
    groupF3: "Belgium",
    groupF4: "Croatia",

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 130,
  },
  {
    email: "coach@gmail.com",
    password: "coach",
    name: "Coach Raiff",

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "Wales",
    groupB4: "USA",

    groupC1: "Argentina",
    groupC2: "Poland",
    groupC3: "Mexico",
    groupC4: "Saudi Arabia",

    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Russia",
    groupD4: "Tunisia",

    groupE1: "Italy",
    groupE2: "Germany",
    groupE3: "Japan",
    groupE4: "Spain",

    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",

    groupG1: "Switz",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Brasil",

    groupH1: "Uruguay",
    groupH2: "Portugal",
    groupH3: "Ghana",
    groupH4: "S. Korea",

    tiebreaker: 40,
  },

  {
    email: "kelly@gmail.com",
    password: "kelly",
    name: "Kelly",

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "USA",
    groupB4: "Wales",

    groupC1: "Poland",
    groupC2: "Mexico",
    groupC3: "Saudi Arabia",
    groupC4: "Argentina",

    groupD1: "Denmark",
    groupD2: "Tunisia",
    groupD3: "Russia",
    groupD4: "France",

    groupE1: "Italy",
    groupE2: "Germany",
    groupE3: "Japan",
    groupE4: "Spain",

    groupF1: "Belgium",
    groupF2: "Morocco",
    groupF3: "Canada",
    groupF4: "Croatia",

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 120,
  },
];

const updated = [
  {
    idd: 1,
    answer: "Last Updated: 10/20/21 at 10:36 pm",
  },
];

const syncAndSeed = async () => {
  await db.sync({ force: true });
  /////////////////////////////////////////////////////////////
  const [
    Qatar,
    Ecuador,
    Senegal,
    Netherlands,
    England,
    Iran,
    USA,
    Wales,
    Argentina,
    Saudi_Arabia,
    Mexico,
    Poland,
    France,
    Russia,
    Denmark,
    Tunisia,
    Spain,
    Italy,
    Germany,
    Japan,
    Belgium,
    Canada,
    Morocco,
    Croatia,
    Brasil,
    Serbia,
    Switz,
    Cameroon,
    Portugal,
    Ghana,
    Uruguay,
    S_Korea,
  ] = await Promise.all(
    teamInfo.map((obj) =>
      Team.create({
        name: obj.name,
        group: obj.group,
      })
    )
  );

  const [Joe, Stan, E, Coach, Kelly] = await Promise.all(
    users.map((obj) =>
      User.create({
        email: obj.email,
        password: obj.password,
        name: obj.name,
        admin: obj.admin,
        paid: obj.paid,

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

        tiebreaker: obj.tiebreaker,
      })
    )
  );

  const [updatedAnswer] = await Promise.all(
    updated.map((obj) =>
      Updated.create({
        idd: obj.idd,
        answer: obj.answer,
      })
    )
  );

  //////////////////////////////////////////////////
  Ecuador.groupFinishingPosition = 1;
  Netherlands.groupFinishingPosition = 2;
  Qatar.groupFinishingPosition = 3;
  Senegal.groupFinishingPosition = 4;
  Argentina.groupFinishingPosition = 1;
  Mexico.groupFinishingPosition = 2;
  Poland.groupFinishingPosition = 3;
  Saudi_Arabia.groupFinishingPosition = 4;
  Italy.groupFinishingPosition = 1;
  Germany.groupFinishingPosition = 2;
  Japan.groupFinishingPosition = 3;
  Spain.groupFinishingPosition = 4;
  Brasil.groupFinishingPosition = 1;
  Cameroon.groupFinishingPosition = 2;
  Serbia.groupFinishingPosition = 3;
  Switz.groupFinishingPosition = 4;
  England.groupFinishingPosition = 1;
  Iran.groupFinishingPosition = 2;
  USA.groupFinishingPosition = 3;
  Wales.groupFinishingPosition = 4;
  Denmark.groupFinishingPosition = 1;
  France.groupFinishingPosition = 2;
  Russia.groupFinishingPosition = 3;
  Tunisia.groupFinishingPosition = 4;
  Belgium.groupFinishingPosition = 1;
  Canada.groupFinishingPosition = 2;
  Croatia.groupFinishingPosition = 3;
  Morocco.groupFinishingPosition = 4;
  Ghana.groupFinishingPosition = 1;
  S_Korea.groupFinishingPosition = 2;
  Portugal.groupFinishingPosition = 3;
  Uruguay.groupFinishingPosition = 4;

  Ecuador.groupIsFinished = true;
  Netherlands.groupIsFinished = true;
  Qatar.groupIsFinished = true;
  Senegal.groupIsFinished = true;
  England.groupIsFinished = true;
  Iran.groupIsFinished = true;
  USA.groupIsFinished = true;
  Wales.groupIsFinished = true;
  Argentina.groupIsFinished = true;
  Mexico.groupIsFinished = true;
  Poland.groupIsFinished = true;
  Saudi_Arabia.groupIsFinished = true;
  Denmark.groupIsFinished = true;
  France.groupIsFinished = true;
  Russia.groupIsFinished = true;
  Tunisia.groupIsFinished = true;
  Italy.groupIsFinished = true;
  Germany.groupIsFinished = true;
  Japan.groupIsFinished = true;
  Spain.groupIsFinished = true;
  Belgium.groupIsFinished = true;
  Canada.groupIsFinished = true;
  Croatia.groupIsFinished = true;
  Morocco.groupIsFinished = true;
  Brasil.groupIsFinished = true;
  Cameroon.groupIsFinished = true;
  Serbia.groupIsFinished = true;
  Switz.groupIsFinished = true;
  Ghana.groupIsFinished = true;
  S_Korea.groupIsFinished = true;
  Portugal.groupIsFinished = true;
  Uruguay.groupIsFinished = true;

  //////////////////////////////////////////////////
  Joe.knockQ1 = Ecuador.name;
  Joe.knockQ2 = Argentina.name;
  Joe.knockQ3 = Canada.name;
  Joe.knockQ4 = Brasil.name;
  Joe.knockQ5 = England.name;
  Joe.knockQ6 = Denmark.name;
  Joe.knockQ7 = Belgium.name;
  Joe.knockQ8 = Cameroon.name;

  Stan.knockQ1 = Ecuador.name;
  Stan.knockQ2 = Argentina.name;
  Stan.knockQ3 = Canada.name;
  Stan.knockQ4 = Brasil.name;
  Stan.knockQ5 = England.name;
  Stan.knockQ6 = Denmark.name;
  Stan.knockQ7 = Belgium.name;
  Stan.knockQ8 = Cameroon.name;

  E.knockQ1 = Iran.name;
  E.knockQ2 = Argentina.name;
  E.knockQ3 = Canada.name;
  E.knockQ4 = Brasil.name;
  E.knockQ5 = England.name;
  E.knockQ6 = Denmark.name;
  E.knockQ7 = Germany.name;
  E.knockQ8 = Cameroon.name;

  Coach.knockQ1 = Ecuador.name;
  Coach.knockQ2 = Argentina.name;
  Coach.knockQ3 = Italy.name;
  Coach.knockQ4 = Brasil.name;
  Coach.knockQ5 = England.name;
  Coach.knockQ6 = Mexico.name;
  Coach.knockQ7 = Belgium.name;
  Coach.knockQ8 = Ghana.name;

  Kelly.knockQ1 = Iran.name;
  Kelly.knockQ2 = Argentina.name;
  Kelly.knockQ3 = Italy.name;
  Kelly.knockQ4 = Brasil.name;
  Kelly.knockQ5 = England.name;
  Kelly.knockQ6 = Denmark.name;
  Kelly.knockQ7 = Belgium.name;
  Kelly.knockQ8 = Ghana.name;

  //
  Joe.knockS1 = Argentina.name;
  Joe.knockS2 = Brasil.name;
  Joe.knockS3 = Denmark.name;
  Joe.knockS4 = Belgium.name;

  Stan.knockS1 = Argentina.name;
  Stan.knockS2 = Brasil.name;
  Stan.knockS3 = Denmark.name;
  Stan.knockS4 = Belgium.name;

  E.knockS1 = Iran.name;
  E.knockS2 = Canada.name;
  E.knockS3 = England.name;
  E.knockS4 = Germany.name;

  Coach.knockS1 = Ecuador.name;
  Coach.knockS2 = Brasil.name;
  Coach.knockS3 = Mexico.name;
  Coach.knockS4 = Belgium.name;

  Kelly.knockS1 = Iran.name;
  Kelly.knockS2 = Italy.name;
  Kelly.knockS3 = Denmark.name;
  Kelly.knockS4 = Ghana.name;

  //
  Joe.knockF1 = Argentina.name;
  Joe.knockF2 = Belgium.name;

  Stan.knockF1 = Argentina.name;
  Stan.knockF2 = Belgium.name;

  E.knockF1 = Canada.name;
  E.knockF2 = Germany.name;

  Coach.knockF1 = Brasil.name;
  Coach.knockF2 = Mexico.name;

  Kelly.knockF1 = Italy.name;
  Kelly.knockF2 = Denmark.name;

  //
  Joe.knockChamp = Argentina.name;
  Stan.knockChamp = Argentina.name;
  E.knockChamp = Canada.name;
  Coach.knockChamp = Brasil.name;
  Kelly.knockChamp = Italy.name;

  // //////////////////////////////////////////////////

  Ecuador.advanceToQ = true;
  Argentina.advanceToQ = true;
  Canada.advanceToQ = true;
  Brasil.advanceToQ = true;
  England.advanceToQ = true;
  Denmark.advanceToQ = true;
  Belgium.advanceToQ = true;
  Cameroon.advanceToQ = true;

  Iran.outOfTourney = true;
  France.outOfTourney = true;
  Italy.outOfTourney = true;
  S_Korea.outOfTourney = true;
  Netherlands.outOfTourney = true;
  Mexico.outOfTourney = true;
  Germany.outOfTourney = true;
  Ghana.outOfTourney = true;

  Argentina.advanceToS = true;
  Brasil.advanceToS = true;
  Denmark.advanceToS = true;
  Belgium.advanceToS = true;

  Ecuador.outOfTourney = true;
  Canada.outOfTourney = true;
  England.outOfTourney = true;
  Cameroon.outOfTourney = true;

  Argentina.advanceToF = true;
  Belgium.advanceToF = true;

  Brasil.outOfTourney = true;
  Denmark.outOfTourney = true;

  Argentina.advanceToChamp = true;

  Belgium.outOfTourney = true;

  await Promise.all([
    Ecuador.save(),
    Netherlands.save(),
    Qatar.save(),
    Senegal.save(),
    Argentina.save(),
    Mexico.save(),
    Poland.save(),
    Saudi_Arabia.save(),
    Italy.save(),
    Germany.save(),
    Japan.save(),
    Spain.save(),
    Brasil.save(),
    Cameroon.save(),
    Serbia.save(),
    Switz.save(),
    England.save(),
    Iran.save(),
    USA.save(),
    Wales.save(),
    Denmark.save(),
    France.save(),
    Russia.save(),
    Tunisia.save(),
    Belgium.save(),
    Canada.save(),
    Croatia.save(),
    Morocco.save(),
    Ghana.save(),
    S_Korea.save(),
    Portugal.save(),
    Uruguay.save(),
    Joe.save(),
    Stan.save(),
    E.save(),
    Coach.save(),
    Kelly.save(),
  ]);
};

module.exports = syncAndSeed;
