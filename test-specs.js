const { expect } = require("chai");
const {
  singleGroupCalc,
  totalScoreCalc,
  knockoutRoundCalc,
  knockoutPartTeamPush,
  knockoutPartClassPush,
  currentScoresObj,
  teamRankSort,
} = require("./src/store/funcs");

describe("Cals everthing correctly", () => {
  let teams, participants;
  beforeEach(() => {
    teams = [
      {
        knockoutPosition: "A2",
        id: "4fbcab5d-a010-46e0-83cf-10fd21bdc8a5",
        name: "Netherlands",
        group: "A",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.297Z",
        updatedAt: "2022-04-16T18:58:22.517Z",
      },
      {
        knockoutPosition: "A4",
        id: "6705dc79-4048-4552-a88c-2f859b4344b1",
        name: "Senegal",
        group: "A",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.297Z",
        updatedAt: "2022-04-16T18:58:22.517Z",
      },
      {
        knockoutPosition: "A3",
        id: "4f758c80-3749-4d5d-bd3f-2595e6bc6aec",
        name: "Qatar",
        group: "A",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.296Z",
        updatedAt: "2022-04-16T18:58:22.517Z",
      },
      {
        knockoutPosition: "A1",
        id: "247e9921-a34d-4d2a-be77-f28e70935762",
        name: "Ecuador",
        group: "A",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.297Z",
        updatedAt: "2022-04-16T18:58:22.517Z",
      },
      {
        knockoutPosition: "C1",
        id: "a7812e44-04bd-465f-bae0-a2c7ff9fdbc4",
        name: "Argentina",
        group: "C",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: true,
        advanceToChamp: true,
        createdAt: "2022-04-16T18:58:22.298Z",
        updatedAt: "2022-04-16T18:58:22.517Z",
      },
      {
        knockoutPosition: "C3",
        id: "54aa35ea-f117-49e5-b599-fdb221a9cdee",
        name: "Poland",
        group: "C",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.299Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "C2",
        id: "23932953-496f-4683-b5a7-031df16bb90d",
        name: "Mexico",
        group: "C",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.299Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "C4",
        id: "9e6c9ae7-7c3e-4a9d-8988-08e793ee1822",
        name: "Saudi Arabia",
        group: "C",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.299Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "E1",
        id: "52cb91fc-748e-4d8b-a341-161f7d786254",
        name: "Italy",
        group: "E",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 1,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.300Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "E2",
        id: "af640c71-c9f0-4e48-b58a-591d674a63a6",
        name: "Germany",
        group: "E",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.300Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "E3",
        id: "1fb8ac4b-8ee5-43eb-804f-fc9f422feece",
        name: "Japan",
        group: "E",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.300Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "E4",
        id: "a5f11d28-29f0-48ae-adda-09027f05cdaa",
        name: "Spain",
        group: "E",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.299Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "G2",
        id: "06289a1c-68f4-46b7-99fc-23065c577067",
        name: "Cameroon",
        group: "G",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 2,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.301Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "B1",
        id: "cf23856b-2ef5-4334-88e2-a4a0098bba97",
        name: "England",
        group: "B",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.297Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "G1",
        id: "617c75c4-9ae8-4da3-b7c1-61395fdc006a",
        name: "Brasil",
        group: "G",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.300Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "G3",
        id: "b5cfedd6-3f23-41b8-a89b-a09f97260bef",
        name: "Serbia",
        group: "G",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.301Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "G4",
        id: "897f4398-5ef5-4ff4-bdb0-6baf4d478e73",
        name: "Switz",
        group: "G",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.301Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "B2",
        id: "b9079936-a57a-4320-960a-49149761adcf",
        name: "Iran",
        group: "B",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.297Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "B4",
        id: "ae6c63a8-9559-4c3c-9693-2df0ff8b3e0e",
        name: "USA",
        group: "B",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.298Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "B3",
        id: "f83e747d-ffd6-4ec5-929c-ddd07eb029ba",
        name: "Sweden",
        group: "B",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.298Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "D1",
        id: "c3a8a6c3-8b8d-4272-be51-fcd8f9ecde1f",
        name: "Denmark",
        group: "D",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.299Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "D2",
        id: "5c81a196-cb29-4d89-9212-adcde983786f",
        name: "France",
        group: "D",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.299Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "F1",
        id: "18fb9223-417f-4828-ae50-8a4605f15bfa",
        name: "Belgium",
        group: "F",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: true,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.300Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "D3",
        id: "5fb9d6f9-7795-48d7-8098-25557ce7903b",
        name: "Russia",
        group: "D",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.299Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "D4",
        id: "919a399d-dac4-44f5-9707-9e01963ca19b",
        name: "Tunisia",
        group: "D",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.299Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "F2",
        id: "63f4170c-f0c7-4b06-8911-7d6450115388",
        name: "Canada",
        group: "F",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 2,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.300Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "H1",
        id: "7c76acf7-b36d-49f9-a3a7-d20c0c7449b7",
        name: "Ghana",
        group: "H",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 1,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.301Z",
        updatedAt: "2022-04-16T18:58:22.519Z",
      },
      {
        knockoutPosition: "F4",
        id: "43d1f62f-bfd2-4374-a772-7e8b1b43dbad",
        name: "Morocco",
        group: "F",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.300Z",
        updatedAt: "2022-04-16T18:58:22.519Z",
      },
      {
        knockoutPosition: "H2",
        id: "ca139cc7-5fcc-4dc2-b29c-933265a375f8",
        name: "S. Korea",
        group: "H",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.301Z",
        updatedAt: "2022-04-16T18:58:22.519Z",
      },
      {
        knockoutPosition: "F3",
        id: "5f6c392e-b70a-4844-bed1-4ffca45791a9",
        name: "Croatia",
        group: "F",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.300Z",
        updatedAt: "2022-04-16T18:58:22.518Z",
      },
      {
        knockoutPosition: "H3",
        id: "2aff1cfc-83c1-4428-86ef-554b45aede42",
        name: "Portugal",
        group: "H",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.301Z",
        updatedAt: "2022-04-16T18:58:22.519Z",
      },
      {
        knockoutPosition: "H4",
        id: "132a6b84-4bfb-409d-9ddd-4d62a69addc7",
        name: "Uruguay",
        group: "H",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        Pts: 0,
        tieExists: false,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-04-16T18:58:22.301Z",
        updatedAt: "2022-04-16T18:58:22.519Z",
      },
    ];
    participants = [
      {
        id: "1619cc5c-574a-4ebd-9a67-9284b1ac296f",
        email: "coach@gmail.com",
        password:
          "$2b$05$k2EKPJV2snuBjUBTDEKNiO6WB/J/HmDIK5XCd3f5IFWF/NuyCQQMC",
        name: "Coach Raiff",
        admin: false,
        paid: false,
        groupA1: "Ecuador",
        groupA2: "Netherlands",
        groupA3: "Senegal",
        groupA4: "Qatar",
        groupB1: "England",
        groupB2: "Iran",
        groupB3: "USA",
        groupB4: "Sweden",
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
        knockQ1: "Ecuador",
        knockQ2: "Argentina",
        knockQ3: "Italy",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Mexico",
        knockQ7: "Belgium",
        knockQ8: "Ghana",
        knockS1: "Ecuador",
        knockS2: "Brasil",
        knockS3: "Mexico",
        knockS4: "Belgium",
        knockF1: "Brasil",
        knockF2: "Mexico",
        knockChamp: "Brasil",
        tiebreaker: 40,
        tourneyStage: "pre",
        createdAt: "2022-04-15T18:39:42.013Z",
        updatedAt: "2022-04-15T18:39:42.058Z",
      },
      {
        id: "caeeb786-9489-4992-8ab1-f33c1609ebb6",
        email: "e@gmail.com",
        password:
          "$2b$05$SPpUfJLrVxYfA.G8IKKdleX6Q.6y7VUmSWBz5B8AyXkXyDQz3/roi",
        name: "E",
        admin: false,
        paid: false,
        groupA1: "Netherlands",
        groupA2: "Ecuador",
        groupA3: "Senegal",
        groupA4: "Qatar",
        groupB1: "USA",
        groupB2: "Sweden",
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
        knockQ1: "Iran",
        knockQ2: "Argentina",
        knockQ3: "Canada",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Denmark",
        knockQ7: "Germany",
        knockQ8: "Cameroon",
        knockS1: "Iran",
        knockS2: "Canada",
        knockS3: "England",
        knockS4: "Germany",
        knockF1: "Canada",
        knockF2: "Germany",
        knockChamp: "Canada",
        tiebreaker: 130,
        tourneyStage: "pre",
        createdAt: "2022-04-15T18:39:42.012Z",
        updatedAt: "2022-04-15T18:39:42.058Z",
      },
      {
        id: "95da770a-a4ef-4b42-b447-2a4458edca4a",
        email: "joe@gmail.com",
        password:
          "$2b$05$0UHOlrwWd8fBO8al5QWaH.r0BrixdfkDxv9v4GLBlrLm4EJblJMx.",
        name: "Joe",
        admin: true,
        paid: false,
        groupA1: "Ecuador",
        groupA2: "Netherlands",
        groupA3: "Senagal",
        groupA4: "Qatar",
        groupB1: "England",
        groupB2: "Iran",
        groupB3: "Sweden",
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
        knockQ1: "Ecuador",
        knockQ2: "Argentina",
        knockQ3: "Canada",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Denmark",
        knockQ7: "Belgium",
        knockQ8: "Cameroon",
        knockS1: "Argentina",
        knockS2: "Brasil",
        knockS3: "Denmark",
        knockS4: "Belgium",
        knockF1: "Argentina",
        knockF2: "Belgium",
        knockChamp: "Argentina",
        tiebreaker: 152,
        tourneyStage: "pre",
        createdAt: "2022-04-15T18:39:42.012Z",
        updatedAt: "2022-04-15T18:39:42.058Z",
      },
      {
        id: "8e005dfa-f2c7-48d7-b121-2462e0931510",
        email: "stanley@gmail.com",
        password:
          "$2b$05$lrLD8YggaNF3rvW6Ft7JK.HxQFFU4qUBfd85egGsFJnJLp.GW7Sgy",
        name: "Stanley",
        admin: true,
        paid: false,
        groupA1: "Ecuador",
        groupA2: "Netherlands",
        groupA3: "Senagal",
        groupA4: "Qatar",
        groupB1: "England",
        groupB2: "Iran",
        groupB3: "Sweden",
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
        knockQ1: "Ecuador",
        knockQ2: "Argentina",
        knockQ3: "Canada",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Denmark",
        knockQ7: "Belgium",
        knockQ8: "Cameroon",
        knockS1: "Argentina",
        knockS2: "Brasil",
        knockS3: "Denmark",
        knockS4: "Belgium",
        knockF1: "Argentina",
        knockF2: "Belgium",
        knockChamp: "Argentina",
        tiebreaker: 140,
        tourneyStage: "pre",
        createdAt: "2022-04-15T18:39:42.012Z",
        updatedAt: "2022-04-15T18:39:42.058Z",
      },
      {
        id: "38f8fbb4-f013-4fff-a7e1-eefba8178f0d",
        email: "kelly@gmail.com",
        password:
          "$2b$05$f/b3TbjCwR4JP0T7ut61f.cwQ9De8wMjwV2KkpyHPMSXQWO0Y611K",
        name: "Kelly",
        admin: false,
        paid: false,
        groupA1: "Ecuador",
        groupA2: "Netherlands",
        groupA3: "Senegal",
        groupA4: "Qatar",
        groupB1: "England",
        groupB2: "Iran",
        groupB3: "Sweden",
        groupB4: "USA",
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
        knockQ1: "Iran",
        knockQ2: "Argentina",
        knockQ3: "Italy",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Denmark",
        knockQ7: "Belgium",
        knockQ8: "Ghana",
        knockS1: "Iran",
        knockS2: "Italy",
        knockS3: "Denmark",
        knockS4: "Ghana",
        knockF1: "Italy",
        knockF2: "Denmark",
        knockChamp: "Italy",
        tiebreaker: 120,
        tourneyStage: "pre",
        createdAt: "2022-04-15T18:39:42.013Z",
        updatedAt: "2022-04-15T18:39:42.059Z",
      },
    ];
  });

  describe("Calcs leaderboard", () => {
    describe("no ties", () => {
      it("calculates no ties correctly", () => {
        participants = participants.filter((part) => part.name !== "Stanley");

        const answer = currentScoresObj(participants, teams);

        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("Kelly");
        expect(names[2]).to.equal("Coach Raiff");
        expect(names[3]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(51);
        expect(scores[2]).to.equal(49);
        expect(scores[3]).to.equal(39);
      });
    });

    describe("with a tie", () => {
      it("scenario #1", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 98;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 102;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("Stanley");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #2", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 102;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 98;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Stanley");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #3", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 100;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 98;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("Stanley");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #4", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 98;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 100;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Stanley");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #5", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 100;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 102;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("Stanley");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #6", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 102;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 100;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Stanley");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #7", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 102;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 105;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("Stanley");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #8", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 105;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 102;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Stanley");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #9", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 98;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 90;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("Stanley");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });

      it("scenario #10", () => {
        participants = participants.map((part) => {
          if (part.name === "Joe") {
            part.tiebreaker = 90;
          }

          if (part.name === "Stanley") {
            part.tiebreaker = 98;
          }

          return part;
        });

        const answer = currentScoresObj(participants, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Stanley");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach Raiff");
        expect(names[4]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(51);
        expect(scores[3]).to.equal(49);
        expect(scores[4]).to.equal(39);
      });
    });
  });

  describe("Calcs everyone's overall scores", () => {
    describe("Joe's Scores", () => {
      let joe;

      beforeEach(() => {
        joe = participants.filter((part) => part.name === "Joe")[0];
      });

      it("calculates Joe's group A correctly", () => {
        const groupA = singleGroupCalc(joe, teams, "A");

        expect(groupA.R1).to.equal(3);
        expect(groupA.R2).to.equal(2);
        expect(groupA.R3).to.equal(0);
        expect(groupA.R4).to.equal(0);
      });

      it("calculates Joe's group B correctly", () => {
        const groupB = singleGroupCalc(joe, teams, "B");

        expect(groupB.R1).to.equal(3);
        expect(groupB.R2).to.equal(2);
        expect(groupB.R3).to.equal(1);
        expect(groupB.R4).to.equal(1);
      });

      it("calculates Joe's group C correctly", () => {
        const groupC = singleGroupCalc(joe, teams, "C");

        expect(groupC.R1).to.equal(3);
        expect(groupC.R2).to.equal(0);
        expect(groupC.R3).to.equal(0);
        expect(groupC.R4).to.equal(1);
      });

      it("calculates Joe's group D correctly", () => {
        const groupD = singleGroupCalc(joe, teams, "D");

        expect(groupD.R1).to.equal(1);
        expect(groupD.R2).to.equal(1);
        expect(groupD.R3).to.equal(1);
        expect(groupD.R4).to.equal(1);
      });

      it("calculates Joe's group E correctly", () => {
        const groupE = singleGroupCalc(joe, teams, "E");

        expect(groupE.R1).to.equal(3);
        expect(groupE.R2).to.equal(2);
        expect(groupE.R3).to.equal(1);
        expect(groupE.R4).to.equal(1);
      });

      it("calculates Joe's group F correctly", () => {
        const groupF = singleGroupCalc(joe, teams, "F");

        expect(groupF.R1).to.equal(0);
        expect(groupF.R2).to.equal(2);
        expect(groupF.R3).to.equal(0);
        expect(groupF.R4).to.equal(0);
      });

      it("calculates Joe's group G correctly", () => {
        const groupG = singleGroupCalc(joe, teams, "G");

        expect(groupG.R1).to.equal(3);
        expect(groupG.R2).to.equal(2);
        expect(groupG.R3).to.equal(1);
        expect(groupG.R4).to.equal(1);
      });

      it("calculates Joe's group H correctly", () => {
        const groupH = singleGroupCalc(joe, teams, "H");

        expect(groupH.R1).to.equal(1);
        expect(groupH.R2).to.equal(0);
        expect(groupH.R3).to.equal(1);
        expect(groupH.R4).to.equal(0);
      });

      it("calculates  Joe's total group scores correctly", () => {
        const groupTotal = totalScoreCalc(
          singleGroupCalc(joe, teams, "A"),
          singleGroupCalc(joe, teams, "B"),
          singleGroupCalc(joe, teams, "C"),
          singleGroupCalc(joe, teams, "D"),
          singleGroupCalc(joe, teams, "E"),
          singleGroupCalc(joe, teams, "F"),
          singleGroupCalc(joe, teams, "G"),
          singleGroupCalc(joe, teams, "H")
        );

        expect(groupTotal).to.equal(38);
      });

      describe("Joe's Knockout Scores", () => {
        it("calculates Joe's quarters correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(joe, teams, "A"),
            singleGroupCalc(joe, teams, "B"),
            singleGroupCalc(joe, teams, "C"),
            singleGroupCalc(joe, teams, "D"),
            singleGroupCalc(joe, teams, "E"),
            singleGroupCalc(joe, teams, "F"),
            singleGroupCalc(joe, teams, "G"),
            singleGroupCalc(joe, teams, "H"),
            knockoutRoundCalc("quarters", joe, teams)
          );

          expect(total).to.equal(54);
        });

        it("calculates Joe's semis correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(joe, teams, "A"),
            singleGroupCalc(joe, teams, "B"),
            singleGroupCalc(joe, teams, "C"),
            singleGroupCalc(joe, teams, "D"),
            singleGroupCalc(joe, teams, "E"),
            singleGroupCalc(joe, teams, "F"),
            singleGroupCalc(joe, teams, "G"),
            singleGroupCalc(joe, teams, "H"),
            knockoutRoundCalc("quarters", joe, teams),
            knockoutRoundCalc("semis", joe, teams)
          );

          expect(total).to.equal(70);
        });

        it("calculates Joe's finals correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(joe, teams, "A"),
            singleGroupCalc(joe, teams, "B"),
            singleGroupCalc(joe, teams, "C"),
            singleGroupCalc(joe, teams, "D"),
            singleGroupCalc(joe, teams, "E"),
            singleGroupCalc(joe, teams, "F"),
            singleGroupCalc(joe, teams, "G"),
            singleGroupCalc(joe, teams, "H"),
            knockoutRoundCalc("quarters", joe, teams),
            knockoutRoundCalc("semis", joe, teams),
            knockoutRoundCalc("finals", joe, teams)
          );

          expect(total).to.equal(82);
        });

        it("calculates Joe's overall total correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(joe, teams, "A"),
            singleGroupCalc(joe, teams, "B"),
            singleGroupCalc(joe, teams, "C"),
            singleGroupCalc(joe, teams, "D"),
            singleGroupCalc(joe, teams, "E"),
            singleGroupCalc(joe, teams, "F"),
            singleGroupCalc(joe, teams, "G"),
            singleGroupCalc(joe, teams, "H"),
            knockoutRoundCalc("quarters", joe, teams),
            knockoutRoundCalc("semis", joe, teams),
            knockoutRoundCalc("finals", joe, teams),
            knockoutRoundCalc("champ", joe, teams)
          );

          expect(total).to.equal(92);
        });
      });
    });

    describe("E's Scores", () => {
      let e;

      beforeEach(() => {
        e = participants.filter((part) => part.name === "E")[0];
      });

      it("calculates E's group A correctly", () => {
        const groupA = singleGroupCalc(e, teams, "A");

        expect(groupA.R1).to.equal(1);
        expect(groupA.R2).to.equal(1);
        expect(groupA.R3).to.equal(0);
        expect(groupA.R4).to.equal(0);
      });

      it("calculates E's group B correctly", () => {
        const groupB = singleGroupCalc(e, teams, "B");

        expect(groupB.R1).to.equal(0);
        expect(groupB.R2).to.equal(0);
        expect(groupB.R3).to.equal(0);
        expect(groupB.R4).to.equal(0);
      });

      it("calculates E's group C correctly", () => {
        const groupC = singleGroupCalc(e, teams, "C");

        expect(groupC.R1).to.equal(3);
        expect(groupC.R2).to.equal(2);
        expect(groupC.R3).to.equal(1);
        expect(groupC.R4).to.equal(1);
      });

      it("calculates E's group D correctly", () => {
        const groupD = singleGroupCalc(e, teams, "D");

        expect(groupD.R1).to.equal(3);
        expect(groupD.R2).to.equal(2);
        expect(groupD.R3).to.equal(0);
        expect(groupD.R4).to.equal(0);
      });

      it("calculates E's group E correctly", () => {
        const groupE = singleGroupCalc(e, teams, "E");

        expect(groupE.R1).to.equal(0);
        expect(groupE.R2).to.equal(1);
        expect(groupE.R3).to.equal(0);
        expect(groupE.R4).to.equal(1);
      });

      it("calculates E's group F correctly", () => {
        const groupF = singleGroupCalc(e, teams, "F");

        expect(groupF.R1).to.equal(0);
        expect(groupF.R2).to.equal(2);
        expect(groupF.R3).to.equal(0);
        expect(groupF.R4).to.equal(0);
      });

      it("calculates E's group G correctly", () => {
        const groupG = singleGroupCalc(e, teams, "G");

        expect(groupG.R1).to.equal(3);
        expect(groupG.R2).to.equal(2);
        expect(groupG.R3).to.equal(1);
        expect(groupG.R4).to.equal(1);
      });

      it("calculates E's group H correctly", () => {
        const groupH = singleGroupCalc(e, teams, "H");

        expect(groupH.R1).to.equal(1);
        expect(groupH.R2).to.equal(0);
        expect(groupH.R3).to.equal(1);
        expect(groupH.R4).to.equal(0);
      });

      it("calculates E's total group scores correctly", () => {
        const groupTotal = totalScoreCalc(
          singleGroupCalc(e, teams, "A"),
          singleGroupCalc(e, teams, "B"),
          singleGroupCalc(e, teams, "C"),
          singleGroupCalc(e, teams, "D"),
          singleGroupCalc(e, teams, "E"),
          singleGroupCalc(e, teams, "F"),
          singleGroupCalc(e, teams, "G"),
          singleGroupCalc(e, teams, "H")
        );

        expect(groupTotal).to.equal(27);
      });

      describe("E's Knockout Scores", () => {
        it("calculates E's quarters correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(e, teams, "A"),
            singleGroupCalc(e, teams, "B"),
            singleGroupCalc(e, teams, "C"),
            singleGroupCalc(e, teams, "D"),
            singleGroupCalc(e, teams, "E"),
            singleGroupCalc(e, teams, "F"),
            singleGroupCalc(e, teams, "G"),
            singleGroupCalc(e, teams, "H"),
            knockoutRoundCalc("quarters", e, teams)
          );

          expect(total).to.equal(39);
        });

        it("calculates E's semis correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(e, teams, "A"),
            singleGroupCalc(e, teams, "B"),
            singleGroupCalc(e, teams, "C"),
            singleGroupCalc(e, teams, "D"),
            singleGroupCalc(e, teams, "E"),
            singleGroupCalc(e, teams, "F"),
            singleGroupCalc(e, teams, "G"),
            singleGroupCalc(e, teams, "H"),
            knockoutRoundCalc("quarters", e, teams),
            knockoutRoundCalc("semis", e, teams)
          );

          expect(total).to.equal(39);
        });

        it("calculates E's finals correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(e, teams, "A"),
            singleGroupCalc(e, teams, "B"),
            singleGroupCalc(e, teams, "C"),
            singleGroupCalc(e, teams, "D"),
            singleGroupCalc(e, teams, "E"),
            singleGroupCalc(e, teams, "F"),
            singleGroupCalc(e, teams, "G"),
            singleGroupCalc(e, teams, "H"),
            knockoutRoundCalc("quarters", e, teams),
            knockoutRoundCalc("semis", e, teams),
            knockoutRoundCalc("finals", e, teams)
          );

          expect(total).to.equal(39);
        });

        it("calculates E's overall total correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(e, teams, "A"),
            singleGroupCalc(e, teams, "B"),
            singleGroupCalc(e, teams, "C"),
            singleGroupCalc(e, teams, "D"),
            singleGroupCalc(e, teams, "E"),
            singleGroupCalc(e, teams, "F"),
            singleGroupCalc(e, teams, "G"),
            singleGroupCalc(e, teams, "H"),
            knockoutRoundCalc("quarters", e, teams),
            knockoutRoundCalc("semis", e, teams),
            knockoutRoundCalc("finals", e, teams),
            knockoutRoundCalc("champ", e, teams)
          );

          expect(total).to.equal(39);
        });
      });
    });

    describe("Coach's Scores", () => {
      let coach;

      beforeEach(() => {
        coach = participants.find((part) => part.name === "Coach Raiff");
      });

      it("calculates Coach's group A correctly", () => {
        const groupA = singleGroupCalc(coach, teams, "A");

        expect(groupA.R1).to.equal(3);
        expect(groupA.R2).to.equal(2);
        expect(groupA.R3).to.equal(0);
        expect(groupA.R4).to.equal(0);
      });

      it("calculates Coach's group B correctly", () => {
        const groupB = singleGroupCalc(coach, teams, "B");

        expect(groupB.R1).to.equal(3);
        expect(groupB.R2).to.equal(2);
        expect(groupB.R3).to.equal(0);
        expect(groupB.R4).to.equal(0);
      });

      it("calculates Coach's group C correctly", () => {
        const groupC = singleGroupCalc(coach, teams, "C");

        expect(groupC.R1).to.equal(3);
        expect(groupC.R2).to.equal(0);
        expect(groupC.R3).to.equal(0);
        expect(groupC.R4).to.equal(1);
      });

      it("calculates Coach's group D correctly", () => {
        const groupD = singleGroupCalc(coach, teams, "D");

        expect(groupD.R1).to.equal(1);
        expect(groupD.R2).to.equal(1);
        expect(groupD.R3).to.equal(1);
        expect(groupD.R4).to.equal(1);
      });

      it("calculates Coach's group E correctly", () => {
        const groupE = singleGroupCalc(coach, teams, "E");

        expect(groupE.R1).to.equal(3);
        expect(groupE.R2).to.equal(2);
        expect(groupE.R3).to.equal(1);
        expect(groupE.R4).to.equal(1);
      });

      it("calculates Coach's group F correctly", () => {
        const groupF = singleGroupCalc(coach, teams, "F");

        expect(groupF.R1).to.equal(3);
        expect(groupF.R2).to.equal(0);
        expect(groupF.R3).to.equal(0);
        expect(groupF.R4).to.equal(0);
      });

      it("calculates Coach's group G correctly", () => {
        const groupG = singleGroupCalc(coach, teams, "G");

        expect(groupG.R1).to.equal(0);
        expect(groupG.R2).to.equal(2);
        expect(groupG.R3).to.equal(1);
        expect(groupG.R4).to.equal(0);
      });

      it("calculates Coach's group H correctly", () => {
        const groupH = singleGroupCalc(coach, teams, "H");

        expect(groupH.R1).to.equal(0);
        expect(groupH.R2).to.equal(0);
        expect(groupH.R3).to.equal(0);
        expect(groupH.R4).to.equal(0);
      });

      it("calculates  Coach's total group scores correctly", () => {
        const groupTotal = totalScoreCalc(
          singleGroupCalc(coach, teams, "A"),
          singleGroupCalc(coach, teams, "B"),
          singleGroupCalc(coach, teams, "C"),
          singleGroupCalc(coach, teams, "D"),
          singleGroupCalc(coach, teams, "E"),
          singleGroupCalc(coach, teams, "F"),
          singleGroupCalc(coach, teams, "G"),
          singleGroupCalc(coach, teams, "H")
        );

        expect(groupTotal).to.equal(31);
      });

      describe("Coach's Knockout Scores", () => {
        it("calculates Coach's quarters correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(coach, teams, "A"),
            singleGroupCalc(coach, teams, "B"),
            singleGroupCalc(coach, teams, "C"),
            singleGroupCalc(coach, teams, "D"),
            singleGroupCalc(coach, teams, "E"),
            singleGroupCalc(coach, teams, "F"),
            singleGroupCalc(coach, teams, "G"),
            singleGroupCalc(coach, teams, "H"),
            knockoutRoundCalc("quarters", coach, teams)
          );

          expect(total).to.equal(41);
        });

        it("calculates Coach's semis correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(coach, teams, "A"),
            singleGroupCalc(coach, teams, "B"),
            singleGroupCalc(coach, teams, "C"),
            singleGroupCalc(coach, teams, "D"),
            singleGroupCalc(coach, teams, "E"),
            singleGroupCalc(coach, teams, "F"),
            singleGroupCalc(coach, teams, "G"),
            singleGroupCalc(coach, teams, "H"),
            knockoutRoundCalc("quarters", coach, teams),
            knockoutRoundCalc("semis", coach, teams)
          );

          expect(total).to.equal(49);
        });

        it("calculates Coach's finals correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(coach, teams, "A"),
            singleGroupCalc(coach, teams, "B"),
            singleGroupCalc(coach, teams, "C"),
            singleGroupCalc(coach, teams, "D"),
            singleGroupCalc(coach, teams, "E"),
            singleGroupCalc(coach, teams, "F"),
            singleGroupCalc(coach, teams, "G"),
            singleGroupCalc(coach, teams, "H"),
            knockoutRoundCalc("quarters", coach, teams),
            knockoutRoundCalc("semis", coach, teams),
            knockoutRoundCalc("finals", coach, teams)
          );

          expect(total).to.equal(49);
        });

        it("calculates Coach's overall total correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(coach, teams, "A"),
            singleGroupCalc(coach, teams, "B"),
            singleGroupCalc(coach, teams, "C"),
            singleGroupCalc(coach, teams, "D"),
            singleGroupCalc(coach, teams, "E"),
            singleGroupCalc(coach, teams, "F"),
            singleGroupCalc(coach, teams, "G"),
            singleGroupCalc(coach, teams, "H"),
            knockoutRoundCalc("quarters", coach, teams),
            knockoutRoundCalc("semis", coach, teams),
            knockoutRoundCalc("finals", coach, teams),
            knockoutRoundCalc("champ", coach, teams)
          );

          expect(total).to.equal(49);
        });
      });
    });

    describe("Kelly's Scores", () => {
      let kelly;

      beforeEach(() => {
        kelly = participants.filter((part) => part.name === "Kelly")[0];
      });

      it("calculates Kelly's group A correctly", () => {
        const groupA = singleGroupCalc(kelly, teams, "A");

        expect(groupA.R1).to.equal(3);
        expect(groupA.R2).to.equal(2);
        expect(groupA.R3).to.equal(0);
        expect(groupA.R4).to.equal(0);
      });

      it("calculates Kelly's group B correctly", () => {
        const groupB = singleGroupCalc(kelly, teams, "B");

        expect(groupB.R1).to.equal(3);
        expect(groupB.R2).to.equal(2);
        expect(groupB.R3).to.equal(1);
        expect(groupB.R4).to.equal(1);
      });

      it("calculates Kelly's group C correctly", () => {
        const groupC = singleGroupCalc(kelly, teams, "C");

        expect(groupC.R1).to.equal(0);
        expect(groupC.R2).to.equal(2);
        expect(groupC.R3).to.equal(0);
        expect(groupC.R4).to.equal(0);
      });

      it("calculates Kelly's group D correctly", () => {
        const groupD = singleGroupCalc(kelly, teams, "D");

        expect(groupD.R1).to.equal(3);
        expect(groupD.R2).to.equal(0);
        expect(groupD.R3).to.equal(1);
        expect(groupD.R4).to.equal(0);
      });

      it("calculates Kelly's group E correctly", () => {
        const groupE = singleGroupCalc(kelly, teams, "E");

        expect(groupE.R1).to.equal(3);
        expect(groupE.R2).to.equal(2);
        expect(groupE.R3).to.equal(1);
        expect(groupE.R4).to.equal(1);
      });

      it("calculates Kelly's group F correctly", () => {
        const groupF = singleGroupCalc(kelly, teams, "F");

        expect(groupF.R1).to.equal(3);
        expect(groupF.R2).to.equal(0);
        expect(groupF.R3).to.equal(0);
        expect(groupF.R4).to.equal(0);
      });

      it("calculates Kelly's group G correctly", () => {
        const groupG = singleGroupCalc(kelly, teams, "G");

        expect(groupG.R1).to.equal(3);
        expect(groupG.R2).to.equal(2);
        expect(groupG.R3).to.equal(1);
        expect(groupG.R4).to.equal(1);
      });

      it("calculates Kelly's group H correctly", () => {
        const groupH = singleGroupCalc(kelly, teams, "H");

        expect(groupH.R1).to.equal(1);
        expect(groupH.R2).to.equal(0);
        expect(groupH.R3).to.equal(1);
        expect(groupH.R4).to.equal(0);
      });

      it("calculates  Kelly's total group scores correctly", () => {
        const groupTotal = totalScoreCalc(
          singleGroupCalc(kelly, teams, "A"),
          singleGroupCalc(kelly, teams, "B"),
          singleGroupCalc(kelly, teams, "C"),
          singleGroupCalc(kelly, teams, "D"),
          singleGroupCalc(kelly, teams, "E"),
          singleGroupCalc(kelly, teams, "F"),
          singleGroupCalc(kelly, teams, "G"),
          singleGroupCalc(kelly, teams, "H")
        );

        expect(groupTotal).to.equal(37);
      });

      describe("Kelly's Knockout Scores", () => {
        it("calculates Kelly's quarters correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(kelly, teams, "A"),
            singleGroupCalc(kelly, teams, "B"),
            singleGroupCalc(kelly, teams, "C"),
            singleGroupCalc(kelly, teams, "D"),
            singleGroupCalc(kelly, teams, "E"),
            singleGroupCalc(kelly, teams, "F"),
            singleGroupCalc(kelly, teams, "G"),
            singleGroupCalc(kelly, teams, "H"),
            knockoutRoundCalc("quarters", kelly, teams)
          );

          expect(total).to.equal(47);
        });

        it("calculates Kelly's semis correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(kelly, teams, "A"),
            singleGroupCalc(kelly, teams, "B"),
            singleGroupCalc(kelly, teams, "C"),
            singleGroupCalc(kelly, teams, "D"),
            singleGroupCalc(kelly, teams, "E"),
            singleGroupCalc(kelly, teams, "F"),
            singleGroupCalc(kelly, teams, "G"),
            singleGroupCalc(kelly, teams, "H"),
            knockoutRoundCalc("quarters", kelly, teams),
            knockoutRoundCalc("semis", kelly, teams)
          );

          expect(total).to.equal(51);
        });

        it("calculates Kelly's finals correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(kelly, teams, "A"),
            singleGroupCalc(kelly, teams, "B"),
            singleGroupCalc(kelly, teams, "C"),
            singleGroupCalc(kelly, teams, "D"),
            singleGroupCalc(kelly, teams, "E"),
            singleGroupCalc(kelly, teams, "F"),
            singleGroupCalc(kelly, teams, "G"),
            singleGroupCalc(kelly, teams, "H"),
            knockoutRoundCalc("quarters", kelly, teams),
            knockoutRoundCalc("semis", kelly, teams),
            knockoutRoundCalc("finals", kelly, teams)
          );

          expect(total).to.equal(51);
        });

        it("calculates Kelly's overall total correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(kelly, teams, "A"),
            singleGroupCalc(kelly, teams, "B"),
            singleGroupCalc(kelly, teams, "C"),
            singleGroupCalc(kelly, teams, "D"),
            singleGroupCalc(kelly, teams, "E"),
            singleGroupCalc(kelly, teams, "F"),
            singleGroupCalc(kelly, teams, "G"),
            singleGroupCalc(kelly, teams, "H"),
            knockoutRoundCalc("quarters", kelly, teams),
            knockoutRoundCalc("semis", kelly, teams),
            knockoutRoundCalc("finals", kelly, teams),
            knockoutRoundCalc("champ", kelly, teams)
          );

          expect(total).to.equal(51);
        });
      });
    });
  });

  describe("Calcs everyone's KO stage picks", () => {
    describe("Joe's picks", () => {
      let joe;

      beforeEach(() => {
        joe = participants.find((part) => part.name === "Joe");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartTeamPush(joe, "Q1");
        const Q2 = knockoutPartTeamPush(joe, "Q2");
        const Q3 = knockoutPartTeamPush(joe, "Q3");
        const Q4 = knockoutPartTeamPush(joe, "Q4");
        const Q5 = knockoutPartTeamPush(joe, "Q5");
        const Q6 = knockoutPartTeamPush(joe, "Q6");
        const Q7 = knockoutPartTeamPush(joe, "Q7");
        const Q8 = knockoutPartTeamPush(joe, "Q8");

        expect(Q1).to.equal("Ecuador");
        expect(Q2).to.equal("Argentina");
        expect(Q3).to.equal("Canada");
        expect(Q4).to.equal("Brasil");
        expect(Q5).to.equal("England");
        expect(Q6).to.equal("Denmark");
        expect(Q7).to.equal("Belgium");
        expect(Q8).to.equal("Cameroon");
      });

      it("calculates semis correctly", () => {
        const S1 = knockoutPartTeamPush(joe, "S1");
        const S2 = knockoutPartTeamPush(joe, "S2");
        const S3 = knockoutPartTeamPush(joe, "S3");
        const S4 = knockoutPartTeamPush(joe, "S4");

        expect(S1).to.equal("Argentina");
        expect(S2).to.equal("Brasil");
        expect(S3).to.equal("Denmark");
        expect(S4).to.equal("Belgium");
      });

      it("calculates final correctly", () => {
        const F1 = knockoutPartTeamPush(joe, "F1");
        const F2 = knockoutPartTeamPush(joe, "F2");

        expect(F1).to.equal("Argentina");
        expect(F2).to.equal("Belgium");
      });

      it("calculates champ correctly", () => {
        const champ = knockoutPartTeamPush(joe, "Champ");

        expect(champ).to.equal("Argentina");
      });
    });

    describe("E's picks", () => {
      let e;

      beforeEach(() => {
        e = participants.find((part) => part.name === "E");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartTeamPush(e, "Q1");
        const Q2 = knockoutPartTeamPush(e, "Q2");
        const Q3 = knockoutPartTeamPush(e, "Q3");
        const Q4 = knockoutPartTeamPush(e, "Q4");
        const Q5 = knockoutPartTeamPush(e, "Q5");
        const Q6 = knockoutPartTeamPush(e, "Q6");
        const Q7 = knockoutPartTeamPush(e, "Q7");
        const Q8 = knockoutPartTeamPush(e, "Q8");

        expect(Q1).to.equal("Iran");
        expect(Q2).to.equal("Argentina");
        expect(Q3).to.equal("Canada");
        expect(Q4).to.equal("Brasil");
        expect(Q5).to.equal("England");
        expect(Q6).to.equal("Denmark");
        expect(Q7).to.equal("Germany");
        expect(Q8).to.equal("Cameroon");
      });

      it("calculates semis correctly", () => {
        const S1 = knockoutPartTeamPush(e, "S1");
        const S2 = knockoutPartTeamPush(e, "S2");
        const S3 = knockoutPartTeamPush(e, "S3");
        const S4 = knockoutPartTeamPush(e, "S4");

        expect(S1).to.equal("Iran");
        expect(S2).to.equal("Canada");
        expect(S3).to.equal("England");
        expect(S4).to.equal("Germany");
      });

      it("calculates final correctly", () => {
        const F1 = knockoutPartTeamPush(e, "F1");
        const F2 = knockoutPartTeamPush(e, "F2");

        expect(F1).to.equal("Canada");
        expect(F2).to.equal("Germany");
      });

      it("calculates champ correctly", () => {
        const champ = knockoutPartTeamPush(e, "Champ");

        expect(champ).to.equal("Canada");
      });
    });

    describe("Coach's picks", () => {
      let coach;

      beforeEach(() => {
        coach = participants.find((part) => part.name === "Coach Raiff");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartTeamPush(coach, "Q1");
        const Q2 = knockoutPartTeamPush(coach, "Q2");
        const Q3 = knockoutPartTeamPush(coach, "Q3");
        const Q4 = knockoutPartTeamPush(coach, "Q4");
        const Q5 = knockoutPartTeamPush(coach, "Q5");
        const Q6 = knockoutPartTeamPush(coach, "Q6");
        const Q7 = knockoutPartTeamPush(coach, "Q7");
        const Q8 = knockoutPartTeamPush(coach, "Q8");

        expect(Q1).to.equal("Ecuador");
        expect(Q2).to.equal("Argentina");
        expect(Q3).to.equal("Italy");
        expect(Q4).to.equal("Brasil");
        expect(Q5).to.equal("England");
        expect(Q6).to.equal("Mexico");
        expect(Q7).to.equal("Belgium");
        expect(Q8).to.equal("Ghana");
      });

      it("calculates semis correctly", () => {
        const S1 = knockoutPartTeamPush(coach, "S1");
        const S2 = knockoutPartTeamPush(coach, "S2");
        const S3 = knockoutPartTeamPush(coach, "S3");
        const S4 = knockoutPartTeamPush(coach, "S4");

        expect(S1).to.equal("Ecuador");
        expect(S2).to.equal("Brasil");
        expect(S3).to.equal("Mexico");
        expect(S4).to.equal("Belgium");
      });

      it("calculates final correctly", () => {
        const F1 = knockoutPartTeamPush(coach, "F1");
        const F2 = knockoutPartTeamPush(coach, "F2");

        expect(F1).to.equal("Brasil");
        expect(F2).to.equal("Mexico");
      });

      it("calculates champ correctly", () => {
        const champ = knockoutPartTeamPush(coach, "Champ");

        expect(champ).to.equal("Brasil");
      });
    });

    describe("Kelly's picks", () => {
      let kelly;

      beforeEach(() => {
        kelly = participants.find((part) => part.name === "Kelly");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartTeamPush(kelly, "Q1");
        const Q2 = knockoutPartTeamPush(kelly, "Q2");
        const Q3 = knockoutPartTeamPush(kelly, "Q3");
        const Q4 = knockoutPartTeamPush(kelly, "Q4");
        const Q5 = knockoutPartTeamPush(kelly, "Q5");
        const Q6 = knockoutPartTeamPush(kelly, "Q6");
        const Q7 = knockoutPartTeamPush(kelly, "Q7");
        const Q8 = knockoutPartTeamPush(kelly, "Q8");

        expect(Q1).to.equal("Iran");
        expect(Q2).to.equal("Argentina");
        expect(Q3).to.equal("Italy");
        expect(Q4).to.equal("Brasil");
        expect(Q5).to.equal("England");
        expect(Q6).to.equal("Denmark");
        expect(Q7).to.equal("Belgium");
        expect(Q8).to.equal("Ghana");
      });

      it("calculates semis correctly", () => {
        const S1 = knockoutPartTeamPush(kelly, "S1");
        const S2 = knockoutPartTeamPush(kelly, "S2");
        const S3 = knockoutPartTeamPush(kelly, "S3");
        const S4 = knockoutPartTeamPush(kelly, "S4");

        expect(S1).to.equal("Iran");
        expect(S2).to.equal("Italy");
        expect(S3).to.equal("Denmark");
        expect(S4).to.equal("Ghana");
      });

      it("calculates final correctly", () => {
        const F1 = knockoutPartTeamPush(kelly, "F1");
        const F2 = knockoutPartTeamPush(kelly, "F2");

        expect(F1).to.equal("Italy");
        expect(F2).to.equal("Denmark");
      });

      it("calculates champ correctly", () => {
        const champ = knockoutPartTeamPush(kelly, "Champ");

        expect(champ).to.equal("Italy");
      });
    });
  });

  describe("Calcs everyone's overall correct/wrong className info in KO stage", () => {
    describe("Joe's picks", () => {
      let joe;

      beforeEach(() => {
        joe = participants.find((part) => part.name === "Joe");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartClassPush(joe, teams, "Q1");
        const Q2 = knockoutPartClassPush(joe, teams, "Q2");
        const Q3 = knockoutPartClassPush(joe, teams, "Q3");
        const Q4 = knockoutPartClassPush(joe, teams, "Q4");
        const Q5 = knockoutPartClassPush(joe, teams, "Q5");
        const Q6 = knockoutPartClassPush(joe, teams, "Q6");
        const Q7 = knockoutPartClassPush(joe, teams, "Q7");
        const Q8 = knockoutPartClassPush(joe, teams, "Q8");
        expect(Q1).to.equal("correct");
        expect(Q2).to.equal("correct");
        expect(Q3).to.equal("correct");
        expect(Q4).to.equal("correct");
        expect(Q5).to.equal("correct");
        expect(Q6).to.equal("correct");
        expect(Q7).to.equal("correct");
        expect(Q8).to.equal("correct");
      });
      it("calculates semis correctly", () => {
        const S1 = knockoutPartClassPush(joe, teams, "S1");
        const S2 = knockoutPartClassPush(joe, teams, "S2");
        const S3 = knockoutPartClassPush(joe, teams, "S3");
        const S4 = knockoutPartClassPush(joe, teams, "S4");
        expect(S1).to.equal("correct");
        expect(S2).to.equal("correct");
        expect(S3).to.equal("correct");
        expect(S4).to.equal("correct");
      });
      it("calculates final correctly", () => {
        const F1 = knockoutPartClassPush(joe, teams, "F1");
        const F2 = knockoutPartClassPush(joe, teams, "F2");
        expect(F1).to.equal("correct");
        expect(F2).to.equal("correct");
      });
      it("calculates champ correctly", () => {
        const champ = knockoutPartClassPush(joe, teams, "Champ");
        expect(champ).to.equal("correct");
      });
    });

    describe("E's picks", () => {
      let e;

      beforeEach(() => {
        e = participants.find((part) => part.name === "E");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartClassPush(e, teams, "Q1");
        const Q2 = knockoutPartClassPush(e, teams, "Q2");
        const Q3 = knockoutPartClassPush(e, teams, "Q3");
        const Q4 = knockoutPartClassPush(e, teams, "Q4");
        const Q5 = knockoutPartClassPush(e, teams, "Q5");
        const Q6 = knockoutPartClassPush(e, teams, "Q6");
        const Q7 = knockoutPartClassPush(e, teams, "Q7");
        const Q8 = knockoutPartClassPush(e, teams, "Q8");
        expect(Q1).to.equal("wrong");
        expect(Q2).to.equal("correct");
        expect(Q3).to.equal("correct");
        expect(Q4).to.equal("correct");
        expect(Q5).to.equal("correct");
        expect(Q6).to.equal("correct");
        expect(Q7).to.equal("wrong");
        expect(Q8).to.equal("correct");
      });
      it("calculates semis correctly", () => {
        const S1 = knockoutPartClassPush(e, teams, "S1");
        const S2 = knockoutPartClassPush(e, teams, "S2");
        const S3 = knockoutPartClassPush(e, teams, "S3");
        const S4 = knockoutPartClassPush(e, teams, "S4");
        expect(S1).to.equal("wrong");
        expect(S2).to.equal("wrong");
        expect(S3).to.equal("wrong");
        expect(S4).to.equal("wrong");
      });
      it("calculates final correctly", () => {
        const F1 = knockoutPartClassPush(e, teams, "F1");
        const F2 = knockoutPartClassPush(e, teams, "F2");
        expect(F1).to.equal("wrong");
        expect(F2).to.equal("wrong");
      });
      it("calculates champ correctly", () => {
        const champ = knockoutPartClassPush(e, teams, "Champ");
        expect(champ).to.equal("wrong");
      });
    });

    describe("coach's picks", () => {
      let coach;

      beforeEach(() => {
        coach = participants.find((part) => part.name === "Coach Raiff");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartClassPush(coach, teams, "Q1");
        const Q2 = knockoutPartClassPush(coach, teams, "Q2");
        const Q3 = knockoutPartClassPush(coach, teams, "Q3");
        const Q4 = knockoutPartClassPush(coach, teams, "Q4");
        const Q5 = knockoutPartClassPush(coach, teams, "Q5");
        const Q6 = knockoutPartClassPush(coach, teams, "Q6");
        const Q7 = knockoutPartClassPush(coach, teams, "Q7");
        const Q8 = knockoutPartClassPush(coach, teams, "Q8");
        expect(Q1).to.equal("correct");
        expect(Q2).to.equal("correct");
        expect(Q3).to.equal("wrong");
        expect(Q4).to.equal("correct");
        expect(Q5).to.equal("correct");
        expect(Q6).to.equal("wrong");
        expect(Q7).to.equal("correct");
        expect(Q8).to.equal("wrong");
      });
      it("calculates semis correctly", () => {
        const S1 = knockoutPartClassPush(coach, teams, "S1");
        const S2 = knockoutPartClassPush(coach, teams, "S2");
        const S3 = knockoutPartClassPush(coach, teams, "S3");
        const S4 = knockoutPartClassPush(coach, teams, "S4");
        expect(S1).to.equal("wrong");
        expect(S2).to.equal("correct");
        expect(S3).to.equal("wrong");
        expect(S4).to.equal("correct");
      });
      it("calculates final correctly", () => {
        const F1 = knockoutPartClassPush(coach, teams, "F1");
        const F2 = knockoutPartClassPush(coach, teams, "F2");
        expect(F1).to.equal("wrong");
        expect(F2).to.equal("wrong");
      });
      it("calculates champ correctly", () => {
        const champ = knockoutPartClassPush(coach, teams, "Champ");
        expect(champ).to.equal("wrong");
      });
    });

    describe("kelly's picks", () => {
      let kelly;

      beforeEach(() => {
        kelly = participants.find((part) => part.name === "Kelly");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartClassPush(kelly, teams, "Q1");
        const Q2 = knockoutPartClassPush(kelly, teams, "Q2");
        const Q3 = knockoutPartClassPush(kelly, teams, "Q3");
        const Q4 = knockoutPartClassPush(kelly, teams, "Q4");
        const Q5 = knockoutPartClassPush(kelly, teams, "Q5");
        const Q6 = knockoutPartClassPush(kelly, teams, "Q6");
        const Q7 = knockoutPartClassPush(kelly, teams, "Q7");
        const Q8 = knockoutPartClassPush(kelly, teams, "Q8");
        expect(Q1).to.equal("wrong");
        expect(Q2).to.equal("correct");
        expect(Q3).to.equal("wrong");
        expect(Q4).to.equal("correct");
        expect(Q5).to.equal("correct");
        expect(Q6).to.equal("correct");
        expect(Q7).to.equal("correct");
        expect(Q8).to.equal("wrong");
      });
      it("calculates semis correctly", () => {
        const S1 = knockoutPartClassPush(kelly, teams, "S1");
        const S2 = knockoutPartClassPush(kelly, teams, "S2");
        const S3 = knockoutPartClassPush(kelly, teams, "S3");
        const S4 = knockoutPartClassPush(kelly, teams, "S4");
        expect(S1).to.equal("wrong");
        expect(S2).to.equal("wrong");
        expect(S3).to.equal("correct");
        expect(S4).to.equal("wrong");
      });
      it("calculates final correctly", () => {
        const F1 = knockoutPartClassPush(kelly, teams, "F1");
        const F2 = knockoutPartClassPush(kelly, teams, "F2");
        expect(F1).to.equal("wrong");
        expect(F2).to.equal("wrong");
      });
      it("calculates champ correctly", () => {
        const champ = knockoutPartClassPush(kelly, teams, "Champ");
        expect(champ).to.equal("wrong");
      });
    });
  });

  describe("ranks teams in the group", () => {
    describe("no ties", () => {
      it("calcs no ties", () => {
        teams = teams.filter((team) => team.group === "A");

        teams = teams.map((team) => {
          switch (team.name) {
            case "Ecuador":
              team.GF = 15;
              team.GD = 10;
              team.Pts = 3;
              break;

            case "Netherlands":
              team.GF = 15;
              team.GD = 10;
              team.Pts = 8;
              break;

            case "Qatar":
              team.GF = 15;
              team.GD = 10;
              team.Pts = 9;
              break;

            case "Senegal":
              team.GF = 15;
              team.GD = 10;
              team.Pts = 6;
              break;
            default:
              break;
          }

          return team;
        });

        const answer = teamRankSort(teams);

        const names = Object.values(answer);

        expect(names[0]).to.eql("Qatar");
        expect(names[1]).to.eql("Netherlands");
        expect(names[2]).to.eql("Senegal");
        expect(names[3]).to.eql("Ecuador");
      });
    });

    describe("2-way tie for 1st", () => {
      it("GD determines the winner", () => {});
      it("GD is also the same - GF determines the winner", () => {});
      it("GF is also the same - manual func is needed", () => {
        //need to incorporate the 'tieExists key in the team model.
      });
    });

    describe("2-way tie for 2nd", () => {
      it("GD determines the runner-up", () => {});
      it("GD is also the same - GF determines the runner-up", () => {});
      it("GF is also the same - manual func is needed", () => {});
    });

    describe("3-way tie for 1st", () => {
      it("GD determines the winner & runner-up", () => {});
      it("GD can't decide a either a winner, runner-up, or both - manual func is needed", () => {});
    });

    describe("3-way tie for 2nd", () => {
      it("GD determines the winner & runner-up", () => {});
      it("GD can't decide a either a winner, runner-up, or both - manual func is needed", () => {});
    });
  });
});
