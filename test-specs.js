const { expect } = require("chai");
const {
  singleGroupCalc,
  totalScoreCalc,
  knockoutRoundCalc,
  knockoutPartTeamPush,
  knockoutPartClassPush,
  currentScoresObj,
  teamRankSort,
  urlWord,
} = require("./src/store/funcs");

describe("Cals everthing correctly", () => {
  let teams, participants;
  beforeEach(() => {
    teams = [
      {
        knockoutPosition: "A1",
        id: "45dbb4a2-1db6-4dbe-b6a4-33f1f0640840",
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
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.537Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "A2",
        id: "c414163e-2cc8-42d7-b31a-9c3eaf981743",
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
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.537Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "A3",
        id: "aa9422dd-07e2-4a08-8ab7-96e772312d57",
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
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.536Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "A4",
        id: "3f5053d8-4daf-43f4-99a6-531524dc7b5c",
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
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.537Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "C1",
        id: "76e33b87-e918-4981-83d9-9031fbbe8608",
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
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: true,
        advanceToChamp: true,
        createdAt: "2022-05-23T17:55:42.538Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "C2",
        id: "0f317907-934c-4db7-bb1c-2264378becf2",
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
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.538Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "C3",
        id: "ec0f8f8e-c57c-4f24-92cb-8475d5e26f47",
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
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.538Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "C4",
        id: "f0195102-fd8e-4953-bef2-dd1cea776719",
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
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.538Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "E1",
        id: "51d5579b-ebac-4b8f-8cbc-18cd1f7a05d2",
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
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.540Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "E2",
        id: "cd447483-740f-46ee-8cfd-6e778390e589",
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
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.541Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "E3",
        id: "8f41e679-91dc-4529-b185-fed59bb63e87",
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
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.541Z",
        updatedAt: "2022-05-23T17:55:42.687Z",
      },
      {
        knockoutPosition: "E4",
        id: "21d3cee0-d088-48eb-9952-37cd7db00c6c",
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
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.540Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "G1",
        id: "1a4a3b48-93dc-470c-972c-ad04f2c692f0",
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
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.541Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "G2",
        id: "673def52-36e7-4721-a004-16220c53faa3",
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
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.542Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "G3",
        id: "10faf3c4-515e-488a-8375-73cc69cc04e4",
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
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.542Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "G4",
        id: "258281ef-92e1-47e8-8083-12f686b171f8",
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
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.542Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "B1",
        id: "4ac46966-0c46-41ab-bc47-3e76a004de6b",
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
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.537Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "B2",
        id: "7491d0a4-c8d2-4446-a9de-ab1d0a317561",
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
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.537Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "B3",
        id: "93702111-cf81-4331-a8bd-9556b893ef62",
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
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.538Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "B4",
        id: "edb6981c-0b7c-4ec1-b5f1-6111fe6e757e",
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
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.538Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "D1",
        id: "0b81281c-abd1-4dd3-bf8f-18c3e58ad64e",
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
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.540Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "D2",
        id: "c257f6be-c2b7-4aa9-a6ab-8bc1fce31afe",
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
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.538Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "D3",
        id: "149c1ea8-4f5d-451d-921b-5f5439a52c3b",
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
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.540Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "D4",
        id: "351debdd-a419-45cc-8caf-6b9309a6d2c6",
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
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.540Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "F1",
        id: "16cbdbc0-59f2-4446-9cac-b6aba24689bf",
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
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: true,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.541Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "F2",
        id: "a60623cf-79d2-4d4d-90a3-ef867688d319",
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
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.541Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "F3",
        id: "95cbdc8e-e01b-4eaf-83f5-62197ebc1c25",
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
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.541Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "F4",
        id: "eae71b50-2384-435e-8a81-50b14fe31705",
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
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.541Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "H1",
        id: "880665c4-4067-4575-b11c-784d9021b371",
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
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.542Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "H2",
        id: "c6260aac-d63a-4a9b-8e01-d404450e417d",
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
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.542Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "H3",
        id: "3b393857-616b-4a0d-baae-b5c760e09060",
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
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.542Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
      },
      {
        knockoutPosition: "H4",
        id: "30bdfb8f-9f19-4f7e-ae11-da4ddaa5693c",
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
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-05-23T17:55:42.542Z",
        updatedAt: "2022-05-23T17:55:42.688Z",
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
});

describe("func testing", () => {
  describe("urlWord", () => {
    it("works", () => {
      const group = urlWord("group");
      const leaderboard = urlWord("leaderboard");
      const my_picks = urlWord("my picks");
      const pool_picks = urlWord("pool picks");
      const group_details = urlWord("group details");

      expect(group).to.equal("group");
      expect(leaderboard).to.equal("leaderboard");
      expect(my_picks).to.equal("my_picks");
      expect(pool_picks).to.equal("pool_picks");
      expect(group_details).to.equal("group_details");
    });
  });
});
