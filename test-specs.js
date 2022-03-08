const { expect } = require("chai");
const {
  singleGroupCalc,
  totalScoreCalc,
  knockoutRoundCalc,
  knockoutPartTeamPush,
  knockoutPartClassPush,
  currentScoresObj,
} = require("./src/store/funcs");

describe("Calculates Leaderboard correctly", () => {
  let teams, participants;
  beforeEach(() => {
    teams = [
      {
        knockoutPosition: "A1",
        id: "f26bdb92-0802-4ef8-b54a-46cfebfbc20c",
        name: "Uruguay",
        group: "A",
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.638Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "A2",
        id: "e647f08a-8830-4bc2-9dbb-cf9e3c22e743",
        name: "Russia",
        group: "A",
        groupFinishingPosition: 2,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.639Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "A4",
        id: "e5235127-3e7d-4279-a73e-ecc7fe86f4c0",
        name: "Egypt",
        group: "A",
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.639Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "B2",
        id: "e7510762-a3d7-434c-bc33-3b5e1f7c9664",
        name: "Portugal",
        group: "B",
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.639Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "B1",
        id: "a4c68b93-af97-4569-81c1-50c14db747df",
        name: "Spain",
        group: "B",
        groupFinishingPosition: 1,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.639Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "A3",
        id: "9c42b3d1-7f13-4b92-a197-cdeb323e9320",
        name: "Saudi Arabia",
        group: "A",
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.639Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "B3",
        id: "fb22d21c-c551-48df-8b63-017583516fca",
        name: "Iran",
        group: "B",
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.639Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "B4",
        id: "79414db6-648f-4595-bc77-75ce04296f7c",
        name: "Morocco",
        group: "B",
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "C1",
        id: "e1bfd4bb-6843-402c-aadd-6a65b427e288",
        name: "France",
        group: "C",
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "C3",
        id: "239494b6-c4da-490b-82ea-5113ace0e3e8",
        name: "Peru",
        group: "C",
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "C2",
        id: "43a6e9a2-8065-4ac7-94b3-c9b991612011",
        name: "Denmark",
        group: "C",
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "C4",
        id: "5995da17-b55e-4ff6-9f23-7796fd19c553",
        name: "Australia",
        group: "C",
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "D2",
        id: "3d5d05cd-112f-4b1e-856a-1459833d9d65",
        name: "Argentina",
        group: "D",
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "D1",
        id: "23c160ad-1797-4fd0-a3b9-89297841a58c",
        name: "Croatia",
        group: "D",
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: true,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "D3",
        id: "ceb99c81-e897-4efd-bfaa-bc5cdbc89f23",
        name: "Nigeria",
        group: "D",
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "D4",
        id: "90a2aa74-5406-4683-8891-8ced584b744d",
        name: "Iceland",
        group: "D",
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.685Z",
      },
      {
        knockoutPosition: "E1",
        id: "1ae8ca68-a7f9-44aa-8e3c-2ddf3f77b125",
        name: "Brasil",
        group: "E",
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "E2",
        id: "20e5579f-f1c2-47e7-ae16-0c065cc51d3a",
        name: "Switz",
        group: "E",
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.640Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "E3",
        id: "6b947f8f-73ca-4df5-89e5-8b11c889938e",
        name: "Serbia",
        group: "E",
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "E4",
        id: "4b9a0635-a36b-4ac9-a4a6-f392102306e4",
        name: "Costa Rica",
        group: "E",
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "F4",
        id: "e9545b2e-fd2c-459e-92d4-f3ceb80e6a1e",
        name: "Germany",
        group: "F",
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "F2",
        id: "52fc1bf0-5b38-4fba-9af7-4a20572eb796",
        name: "Mexico",
        group: "F",
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "F1",
        id: "6c570753-4052-4981-9425-8186e271aa3d",
        name: "Sweden",
        group: "F",
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "F3",
        id: "fe607f43-432d-44fd-890f-93b8f0909554",
        name: "S. Korea",
        group: "F",
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "G1",
        id: "e1b8ef47-01a6-4d21-aa72-dc3204934d97",
        name: "Belgium",
        group: "G",
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: true,
        advanceToChamp: true,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "G2",
        id: "5c5730d4-0830-4db7-bad1-3a322f81a5e2",
        name: "England",
        group: "G",
        groupFinishingPosition: 2,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "G3",
        id: "c028ae64-2ca6-4b9b-bf14-86daefe940cf",
        name: "Tunisia",
        group: "G",
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "G4",
        id: "4675aad7-f087-44f3-88f8-326b899e3ccd",
        name: "Panama",
        group: "G",
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "H4",
        id: "f45d0cd0-e16c-4f83-9479-9e38826a32aa",
        name: "Poland",
        group: "H",
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "H1",
        id: "5f0b67a6-e680-4826-b23c-c2d6ae47cf8e",
        name: "Colombia",
        group: "H",
        groupFinishingPosition: 1,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "H3",
        id: "a6def828-b10a-4d88-8fc8-f936bc7c1417",
        name: "Senegal",
        group: "H",
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
      {
        knockoutPosition: "H2",
        id: "46e7348b-5449-48dd-996a-922149f004b4",
        name: "Japan",
        group: "H",
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        createdAt: "2022-01-21T22:54:26.641Z",
        updatedAt: "2022-01-21T22:54:26.686Z",
      },
    ];
    participants = [
      {
        id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
        name: "Joe",
        paid: false,
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
        createdAt: "2022-01-21T22:54:26.675Z",
        updatedAt: "2022-01-21T22:54:26.675Z",
      },
      {
        id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
        name: "E",
        paid: false,
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
        createdAt: "2022-01-21T22:54:26.675Z",
        updatedAt: "2022-01-21T22:54:26.675Z",
      },
      {
        id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
        name: "Coach",
        paid: false,
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
        createdAt: "2022-01-21T22:54:26.675Z",
        updatedAt: "2022-01-21T22:54:26.675Z",
      },
      {
        id: "b1a21648-4144-4e35-b28d-c04742e5b728",
        name: "Kelly",
        paid: false,
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
        createdAt: "2022-01-21T22:54:26.675Z",
        updatedAt: "2022-01-21T22:54:26.675Z",
      },
    ];
  });

  describe("Calculates leaderboard correctly", () => {
    describe("no ties", () => {
      it("calculates no ties correctly", () => {
        const answer = currentScoresObj(participants, teams);

        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("Kelly");
        expect(names[2]).to.equal("Coach");
        expect(names[3]).to.equal("E");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(57);
        expect(scores[2]).to.equal(53);
        expect(scores[3]).to.equal(38);
      });
    });

    describe("with a tie", () => {
      it("scenario #1", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 98,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 102,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("E");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #2", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 102,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 98,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("E");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #3", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 100,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 98,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("E");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #4", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 98,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 100,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("E");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #5", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 100,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 102,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("E");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #6", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 102,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 100,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("E");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #7", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 102,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 105,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("E");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #8", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 105,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 102,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("E");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #9", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 98,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 90,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("Joe");
        expect(names[1]).to.equal("E");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });

      it("scenario #10", () => {
        const parts = [
          {
            id: "2cae3ee2-cefc-4622-a695-68c9d5c40f6c",
            name: "Joe",
            paid: false,
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
            tiebreaker: 90,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "677a6b99-50fd-4e4e-abe4-f13e4ed66cd0",
            name: "E",
            paid: false,
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
            tiebreaker: 98,
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b966ee2b-19e5-4495-9e07-e27a0fc46cb7",
            name: "Coach",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
          {
            id: "b1a21648-4144-4e35-b28d-c04742e5b728",
            name: "Kelly",
            paid: false,
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
            createdAt: "2022-01-21T22:54:26.675Z",
            updatedAt: "2022-01-21T22:54:26.675Z",
          },
        ];

        const answer = currentScoresObj(parts, teams, 100);
        const names = Object.keys(answer);
        const scores = Object.values(answer);

        expect(names[0]).to.equal("E");
        expect(names[1]).to.equal("Joe");
        expect(names[2]).to.equal("Kelly");
        expect(names[3]).to.equal("Coach");
        expect(scores[0]).to.equal(92);
        expect(scores[1]).to.equal(92);
        expect(scores[2]).to.equal(57);
        expect(scores[3]).to.equal(53);
      });
    });
  });

  describe("Calculates knockout bracket correctly", () => {
    describe("Joe's overall", () => {
      beforeEach(() => {
        joe = participants.find((part) => part.name === "Joe");
      });

      describe("Joe's bracket picks", () => {
        it("calculates quarters correctly", () => {
          const Q1 = knockoutPartTeamPush(joe, teams, "Q1");
          const Q2 = knockoutPartTeamPush(joe, teams, "Q2");
          const Q3 = knockoutPartTeamPush(joe, teams, "Q3");
          const Q4 = knockoutPartTeamPush(joe, teams, "Q4");
          const Q5 = knockoutPartTeamPush(joe, teams, "Q5");
          const Q6 = knockoutPartTeamPush(joe, teams, "Q6");
          const Q7 = knockoutPartTeamPush(joe, teams, "Q7");
          const Q8 = knockoutPartTeamPush(joe, teams, "Q8");

          expect(Q1).to.equal("Uruguay");
          expect(Q2).to.equal("France");
          expect(Q3).to.equal("Brasil");
          expect(Q4).to.equal("Belgium");
          expect(Q5).to.equal("Russia");
          expect(Q6).to.equal("Croatia");
          expect(Q7).to.equal("Sweden");
          expect(Q8).to.equal("England");
        });

        it("calculates semis correctly", () => {
          const S1 = knockoutPartTeamPush(joe, teams, "S1");
          const S2 = knockoutPartTeamPush(joe, teams, "S2");
          const S3 = knockoutPartTeamPush(joe, teams, "S3");
          const S4 = knockoutPartTeamPush(joe, teams, "S4");

          expect(S1).to.equal("Uruguay");
          expect(S2).to.equal("Belgium");
          expect(S3).to.equal("Croatia");
          expect(S4).to.equal("England");
        });

        it("calculates final correctly", () => {
          const F1 = knockoutPartTeamPush(joe, teams, "F1");
          const F2 = knockoutPartTeamPush(joe, teams, "F2");

          expect(F1).to.equal("Belgium");
          expect(F2).to.equal("Croatia");
        });

        it("calculates winner correctly", () => {
          const champ = knockoutPartTeamPush(joe, teams, "Champ");

          expect(champ).to.equal("Belgium");
        });
      });

      describe("Joe's class info", () => {
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
    });

    describe("E's overall", () => {
      beforeEach(() => {
        e = participants.find((part) => part.name === "E");
      });

      describe("E's bracket picks", () => {
        it("calculates quarters correctly", () => {
          const Q1 = knockoutPartTeamPush(e, teams, "Q1");
          const Q2 = knockoutPartTeamPush(e, teams, "Q2");
          const Q3 = knockoutPartTeamPush(e, teams, "Q3");
          const Q4 = knockoutPartTeamPush(e, teams, "Q4");
          const Q5 = knockoutPartTeamPush(e, teams, "Q5");
          const Q6 = knockoutPartTeamPush(e, teams, "Q6");
          const Q7 = knockoutPartTeamPush(e, teams, "Q7");
          const Q8 = knockoutPartTeamPush(e, teams, "Q8");

          expect(Q1).to.equal("Portugal");
          expect(Q2).to.equal("France");
          expect(Q3).to.equal("Brasil");
          expect(Q4).to.equal("Belgium");
          expect(Q5).to.equal("Russia");
          expect(Q6).to.equal("Croatia");
          expect(Q7).to.equal("Switz");
          expect(Q8).to.equal("England");
        });

        it("calculates semis correctly", () => {
          const S1 = knockoutPartTeamPush(e, teams, "S1");
          const S2 = knockoutPartTeamPush(e, teams, "S2");
          const S3 = knockoutPartTeamPush(e, teams, "S3");
          const S4 = knockoutPartTeamPush(e, teams, "S4");

          expect(S1).to.equal("Portugal");
          expect(S2).to.equal("Brasil");
          expect(S3).to.equal("Russia");
          expect(S4).to.equal("Switz");
        });

        it("calculates final correctly", () => {
          const F1 = knockoutPartTeamPush(e, teams, "F1");
          const F2 = knockoutPartTeamPush(e, teams, "F2");

          expect(F1).to.equal("Portugal");
          expect(F2).to.equal("Russia");
        });

        it("calculates winner correctly", () => {
          const champ = knockoutPartTeamPush(e, teams, "Champ");

          expect(champ).to.equal("Portugal");
        });
      });

      describe("E's class info", () => {
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
    });

    describe("Coach's overall", () => {
      beforeEach(() => {
        coach = participants.find((part) => part.name === "Coach");
      });

      describe("Coach's bracket picks", () => {
        it("calculates quarters correctly", () => {
          const Q1 = knockoutPartTeamPush(coach, teams, "Q1");
          const Q2 = knockoutPartTeamPush(coach, teams, "Q2");
          const Q3 = knockoutPartTeamPush(coach, teams, "Q3");
          const Q4 = knockoutPartTeamPush(coach, teams, "Q4");
          const Q5 = knockoutPartTeamPush(coach, teams, "Q5");
          const Q6 = knockoutPartTeamPush(coach, teams, "Q6");
          const Q7 = knockoutPartTeamPush(coach, teams, "Q7");
          const Q8 = knockoutPartTeamPush(coach, teams, "Q8");

          expect(Q1).to.equal("Uruguay");
          expect(Q2).to.equal("France");
          expect(Q3).to.equal("Mexico");
          expect(Q4).to.equal("Japan");
          expect(Q5).to.equal("Russia");
          expect(Q6).to.equal("Denmark");
          expect(Q7).to.equal("Sweden");
          expect(Q8).to.equal("Colombia");
        });

        it("calculates semis correctly", () => {
          const S1 = knockoutPartTeamPush(coach, teams, "S1");
          const S2 = knockoutPartTeamPush(coach, teams, "S2");
          const S3 = knockoutPartTeamPush(coach, teams, "S3");
          const S4 = knockoutPartTeamPush(coach, teams, "S4");

          expect(S1).to.equal("France");
          expect(S2).to.equal("Belgium");
          expect(S3).to.equal("Denmark");
          expect(S4).to.equal("England");
        });

        it("calculates final correctly", () => {
          const F1 = knockoutPartTeamPush(coach, teams, "F1");
          const F2 = knockoutPartTeamPush(coach, teams, "F2");

          expect(F1).to.equal("Belgium");
          expect(F2).to.equal("Denmark");
        });

        it("calculates winner correctly", () => {
          const champ = knockoutPartTeamPush(coach, teams, "Champ");

          expect(champ).to.equal("Denmark");
        });
      });

      describe("Coach's class info", () => {
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
          expect(Q4).to.equal("wrong");
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

          expect(F1).to.equal("correct");
          expect(F2).to.equal("wrong");
        });

        it("calculates champ correctly", () => {
          const champ = knockoutPartClassPush(coach, teams, "Champ");

          expect(champ).to.equal("wrong");
        });
      });
    });

    describe("Kelly's overall", () => {
      beforeEach(() => {
        kelly = participants.find((part) => part.name === "Kelly");
      });

      describe("Joe's bracket picks", () => {
        it("calculates quarters correctly", () => {
          const Q1 = knockoutPartTeamPush(kelly, teams, "Q1");
          const Q2 = knockoutPartTeamPush(kelly, teams, "Q2");
          const Q3 = knockoutPartTeamPush(kelly, teams, "Q3");
          const Q4 = knockoutPartTeamPush(kelly, teams, "Q4");
          const Q5 = knockoutPartTeamPush(kelly, teams, "Q5");
          const Q6 = knockoutPartTeamPush(kelly, teams, "Q6");
          const Q7 = knockoutPartTeamPush(kelly, teams, "Q7");
          const Q8 = knockoutPartTeamPush(kelly, teams, "Q8");

          expect(Q1).to.equal("Portugal");
          expect(Q2).to.equal("France");
          expect(Q3).to.equal("Mexico");
          expect(Q4).to.equal("Belgium");
          expect(Q5).to.equal("Russia");
          expect(Q6).to.equal("Croatia");
          expect(Q7).to.equal("Sweden");
          expect(Q8).to.equal("Colombia");
        });

        it("calculates semis correctly", () => {
          const S1 = knockoutPartTeamPush(kelly, teams, "S1");
          const S2 = knockoutPartTeamPush(kelly, teams, "S2");
          const S3 = knockoutPartTeamPush(kelly, teams, "S3");
          const S4 = knockoutPartTeamPush(kelly, teams, "S4");

          expect(S1).to.equal("France");
          expect(S2).to.equal("Mexico");
          expect(S3).to.equal("Croatia");
          expect(S4).to.equal("Colombia");
        });

        it("calculates final correctly", () => {
          const F1 = knockoutPartTeamPush(kelly, teams, "F1");
          const F2 = knockoutPartTeamPush(kelly, teams, "F2");

          expect(F1).to.equal("Mexico");
          expect(F2).to.equal("Croatia");
        });

        it("calculates winner correctly", () => {
          const champ = knockoutPartTeamPush(kelly, teams, "Champ");

          expect(champ).to.equal("Mexico");
        });
      });

      describe("Joe's class info", () => {
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
          expect(F2).to.equal("correct");
        });

        it("calculates champ correctly", () => {
          const champ = knockoutPartClassPush(kelly, teams, "Champ");

          expect(champ).to.equal("wrong");
        });
      });
    });
  });

  describe("Calculates everyone's overall scores correctly", () => {
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

          console.log("stanley");
          console.log(knockoutRoundCalc("champ", joe, teams));

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

        expect(groupA.R1).to.equal(0);
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

        expect(groupTotal).to.equal(26);
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

          expect(total).to.equal(38);
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

          expect(total).to.equal(38);
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

          expect(total).to.equal(38);
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

          expect(total).to.equal(38);
        });
      });
    });

    describe("Coach's Scores", () => {
      let coach;

      beforeEach(() => {
        coach = participants.filter((part) => part.name === "Coach")[0];
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

          expect(total).to.equal(39);
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

          expect(total).to.equal(47);
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

          expect(total).to.equal(53);
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

          expect(total).to.equal(53);
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

          expect(total).to.equal(57);
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

          expect(total).to.equal(57);
        });
      });
    });
  });
});
