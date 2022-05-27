const singleGroupCalc = (partObj, teams, group) => {
  const partPrediction1 = partObj[`group${group}1`];
  const partPrediction2 = partObj[`group${group}2`];
  const partPrediction3 = partObj[`group${group}3`];
  const partPrediction4 = partObj[`group${group}4`];

  return teams
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition)
    .reduce(
      (a, teamObj) => {
        if (teamObj.groupIsFinished) {
          switch (teamObj.groupFinishingPosition) {
            case 1:
              teamObj.name === partPrediction1
                ? (a.R1 += 3)
                : teamObj.name === partPrediction2
                ? a.R1++
                : "";
              break;
            case 2:
              teamObj.name === partPrediction2
                ? (a.R2 += 2)
                : teamObj.name === partPrediction1
                ? a.R2++
                : ";";
              break;
            case 3:
              teamObj.name === partPrediction3 ? (a.R3 += 1) : "";
              break;
            case 4:
              teamObj.name === partPrediction4 ? (a.R4 += 1) : "";
              break;
          }
        }

        return a;
      },
      {
        R1: 0,
        R2: 0,
        R3: 0,
        R4: 0,
      }
    );
};

const knockoutRoundCalc = (round, partObj, teams) => {
  let advancingTeams, partPicks;

  switch (round) {
    case "quarters":
      advancingTeams = teams.filter((team) => team.advanceToQ);

      partPicks = Object.entries(partObj).reduce((a, arr) => {
        const key = arr[0];

        if (
          key === "knockQ1" ||
          key === "knockQ2" ||
          key === "knockQ3" ||
          key === "knockQ4" ||
          key === "knockQ5" ||
          key === "knockQ6" ||
          key === "knockQ7" ||
          key === "knockQ8"
        ) {
          a.push(arr[1]);
        }

        return a;
      }, []);
      break;

    case "semis":
      advancingTeams = teams.filter((team) => team.advanceToS);

      partPicks = Object.entries(partObj).reduce((a, arr) => {
        const key = arr[0];
        if (
          key === "knockS1" ||
          key === "knockS2" ||
          key === "knockS3" ||
          key === "knockS4"
        ) {
          a.push(arr[1]);
        }
        return a;
      }, []);
      break;

    case "finals":
      advancingTeams = teams.filter((team) => team.advanceToF);

      partPicks = Object.entries(partObj).reduce((a, arr) => {
        const key = arr[0];
        if (key === "knockF1" || key === "knockF2") {
          a.push(arr[1]);
        }
        return a;
      }, []);
      break;

    case "champ":
      advancingTeams = teams.filter((team) => team.advanceToChamp);

      partPicks = Object.entries(partObj).reduce((a, arr) => {
        const key = arr[0];
        if (key === "knockChamp") {
          a.push(arr[1]);
        }
        return a;
      }, []);
  }

  const knockoutObj = { [round]: 0 };

  return advancingTeams.reduce((a, team) => {
    if (partPicks.includes(team.name)) {
      const points =
        round === "quarters"
          ? 2
          : round === "semis"
          ? 4
          : round === "finals"
          ? 6
          : round === "champ"
          ? 10
          : 0;

      a[round] += points;
    }
    return a;
  }, knockoutObj);
};

const G = {
  R1: 0,
  R2: 0,
  R3: 0,
  R4: 0,
};

const totalScoreCalc = (
  groupA = G,
  groupB = G,
  groupC = G,
  groupD = G,
  groupE = G,
  groupF = G,
  groupG = G,
  groupH = G,
  Quart = { quarters: 0 },
  Semi = { semis: 0 },
  Final = { finals: 0 },
  Champ = { champ: 0 }
) => {
  const points = [];

  for (let i = 0; i < 8; i++) {
    const converter = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
    };

    const groupVar = eval(`group${converter[i]}`);

    Object.entries(groupVar)
      .map((entry) => {
        return entry[1];
      })
      .map((val) => points.push(val));
  }

  points.push(Quart.quarters);
  points.push(Semi.semis);
  points.push(Final.finals);
  points.push(Champ.champ);

  return points.reduce((a, b) => a + b);
};

const knockoutPartTeamPush = (part, position) => {
  return part[`knock${position}`];
};

const knockoutPartClassPush = (part, teams, position) => {
  const partPick = part[`knock${position}`];

  const round = position === "Champ" ? "Champ" : position.split("")[0];
  const number = position === "Champ" ? "Champ" : position.split("")[1] * 1;

  const placeObj = {
    Q: {
      1: ["A1", "B2"],
      2: ["C1", "D2"],
      3: ["E1", "F2"],
      4: ["G1", "H2"],
      5: ["B1", "A2"],
      6: ["D1", "C2"],
      7: ["F1", "E2"],
      8: ["H1", "G2"],
    },
    S: {
      1: ["A1", "B2", "C1", "D2"],
      2: ["E1", "F2", "G1", "H2"],
      3: ["B1", "A2", "D1", "C2"],
      4: ["F1", "E2", "H1", "G2"],
    },
    F: {
      1: ["A1", "B2", "C1", "D2", "E1", "F2", "G1", "H2"],
      2: ["B1", "A2", "D1", "C2", "F1", "E2", "H1", "G2"],
    },
  };

  let advancingTeam, knockoutPos;

  if (position !== "Champ") {
    knockoutPos = placeObj[round][number];
  }

  switch (round) {
    case "Q":
      advancingTeam = teams.find(
        (team) =>
          team[`advanceTo${round}`] &&
          (team.knockoutPosition === knockoutPos[0] ||
            team.knockoutPosition === knockoutPos[1])
      ).name;
      break;
    case "S":
      advancingTeam = teams.find(
        (team) =>
          team[`advanceTo${round}`] &&
          (team.knockoutPosition === knockoutPos[0] ||
            team.knockoutPosition === knockoutPos[1] ||
            team.knockoutPosition === knockoutPos[2] ||
            team.knockoutPosition === knockoutPos[3])
      ).name;
      break;
    case "F":
      advancingTeam = teams.find(
        (team) =>
          team[`advanceTo${round}`] &&
          (team.knockoutPosition === knockoutPos[0] ||
            team.knockoutPosition === knockoutPos[1] ||
            team.knockoutPosition === knockoutPos[2] ||
            team.knockoutPosition === knockoutPos[3] ||
            team.knockoutPosition === knockoutPos[4] ||
            team.knockoutPosition === knockoutPos[5] ||
            team.knockoutPosition === knockoutPos[6] ||
            team.knockoutPosition === knockoutPos[7])
      ).name;
      break;
    case "Champ":
      advancingTeam = teams.find((team) => team[`advanceTo${round}`]).name;
      break;
    default:
      throw "error";
  }

  return partPick === advancingTeam ? "correct" : "wrong";
};

const currentScoresObj = (parts, teams, actualGoalsScored = null) => {
  const scores = [];

  return parts
    .reduce((a, part) => {
      const total = totalScoreCalc(
        singleGroupCalc(part, teams, "A"),
        singleGroupCalc(part, teams, "B"),
        singleGroupCalc(part, teams, "C"),
        singleGroupCalc(part, teams, "D"),
        singleGroupCalc(part, teams, "E"),
        singleGroupCalc(part, teams, "F"),
        singleGroupCalc(part, teams, "G"),
        singleGroupCalc(part, teams, "H"),
        knockoutRoundCalc("quarters", part, teams),
        knockoutRoundCalc("semis", part, teams),
        knockoutRoundCalc("finals", part, teams),
        knockoutRoundCalc("champ", part, teams)
      );

      let partObj = {};
      partObj[part.name] = total;
      partObj.tiebreaker = part.tiebreaker;

      a.push(partObj);

      return a;
    }, [])
    .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
    .reduce((a, partObj) => {
      const name = Object.keys(partObj)[0];
      const tiebreaker = Object.values(partObj)[1];
      const score = Object.values(partObj)[0];

      if (scores.includes(score)) {
        const previousPart = a.pop();
        const previousPartName = Object.keys(previousPart)[0];
        const previousPartNameTiebreaker = Object.values(previousPart)[1];

        if (
          //throw error
          tiebreaker === previousPartNameTiebreaker
        ) {
          throw "Error";
        } else if (
          //both are over - scenario 7 & 8
          tiebreaker > actualGoalsScored &&
          previousPartNameTiebreaker > actualGoalsScored
        ) {
          if (tiebreaker > previousPartNameTiebreaker) {
            a.push(previousPart);

            partObj = {};
            partObj[name] = score;
            partObj.tiebreaker = tiebreaker;
            a.push(partObj);
          } else {
            partObj = {};
            partObj[name] = score;
            partObj.tiebreaker = tiebreaker;
            a.push(partObj);

            a.push(previousPart);
          }
        } else if (
          //both are under - scenario 9 & 10
          tiebreaker < actualGoalsScored &&
          previousPartNameTiebreaker < actualGoalsScored
        ) {
          if (tiebreaker > previousPartNameTiebreaker) {
            partObj = {};
            partObj[name] = score;
            partObj.tiebreaker = tiebreaker;
            a.push(partObj);

            a.push(previousPart);
          } else {
            a.push(previousPart);

            partObj = {};
            partObj[name] = score;
            partObj.tiebreaker = tiebreaker;
            a.push(partObj);
          }
        } else if (
          //scenario 4 & 6
          tiebreaker === actualGoalsScored &&
          previousPartNameTiebreaker !== actualGoalsScored
        ) {
          partObj = {};
          partObj[name] = score;
          partObj.tiebreaker = tiebreaker;
          a.push(partObj);

          a.push(previousPart);
        } else if (
          //scenario 3 & 5
          tiebreaker !== actualGoalsScored &&
          previousPartNameTiebreaker === actualGoalsScored
        ) {
          a.push(previousPart);

          partObj = {};
          partObj[name] = score;
          partObj.tiebreaker = tiebreaker;
          a.push(partObj);
        } else if (
          //scenario 1
          tiebreaker > actualGoalsScored &&
          previousPartNameTiebreaker < actualGoalsScored
        ) {
          a.push(previousPart);

          partObj = {};
          partObj[name] = score;
          partObj.tiebreaker = tiebreaker;
          a.push(partObj);
        } else if (
          //scenario 2
          tiebreaker < actualGoalsScored &&
          previousPartNameTiebreaker > actualGoalsScored
        ) {
          partObj = {};
          partObj[name] = score;
          partObj.tiebreaker = tiebreaker;
          a.push(partObj);

          a.push(previousPart);
        }

        return a;
      } else {
        partObj = {};

        partObj[name] = score;
        partObj.tiebreaker = tiebreaker;

        scores.push(score);
        a.push(partObj);
        return a;
      }
    }, [])
    .reduce((a, partObj) => {
      const name = Object.keys(partObj)[0];
      const score = Object.values(partObj)[0];

      a[name] = score;
      scores.push(score);
      return a;
    }, {});
};

// const groupDetailsPush = (arr, group) => {
//   return (
//     <div>
//       <div className="single-group-cont-text-1">
//         <h3>Group {group}</h3>
//         {arr
//           .filter((team) => team.group === group)
//           .map((team) => (
//             <div key={team.id}>
//               <img className="flag" src={team.flag}></img>
//               <div className="country-name">{team.name}</div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

const knockoutR16Push = (teams, finishingPosition) => {
  return teams.find((team) => team.knockoutPosition === finishingPosition).name;
};

const teamRankSort = (teams) => {
  const sorted = teams.sort((a, b) => b.Pts - a.Pts);

  return sorted.reduce((a, team, idx) => {
    a[idx + 1] = team.name;
    return a;
  }, {});
};

const paidStatus = (users, name) => {
  return users.find((user) => user.name === name).paid;
};

const dupeValInArr = (arr) => {
  return arr.length === new Set(arr).size;
};

const urlWord = (str) => {
  return str.split("").reduce((a, letter) => {
    if (letter === " ") {
      letter = "_";
    }
    a += letter;
    return a;
  }, "");
};

const findTeam = (obj, letter, rank) => {
  return { value: obj, label: obj[`group${letter}${rank}`] };
};

module.exports = {
  singleGroupCalc,
  totalScoreCalc,
  knockoutRoundCalc,
  knockoutPartTeamPush,
  knockoutPartClassPush,
  currentScoresObj,
  knockoutR16Push,
  teamRankSort,
  paidStatus,
  dupeValInArr,
  urlWord,
  findTeam,
};
