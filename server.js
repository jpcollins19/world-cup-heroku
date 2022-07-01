//need to figure out how to get the paid satus to update right away
//^^ add a paidStatus to the leaderboard calc func?

//add website loading feature for when someone signs in - see masters app - maybe incorporate spinners?

////roll through each file and remove any commented out info
//everything in server
//everything in store
//admin
//edit-name
//group-details
//header
//leaderboard
//login
//my-picks
//pool-picks
//rules

/////local state
//test/apply all error handling
//roll through the entire tourney lifecycle to make sure all is working as expected

////send to heroku

//figure out a forgot pw route

/////heroku state
//test/apply all error handling
//roll through the entire tourney lifecycle to make sure all is working as expected
//test forgot pw route too

////bugz
//my-picks-unlocked - stage 1 - when you scroll down on the page, the team dropdown options for each group have a higher zIndex than the navbar text

/////////////////////////////////
// Tourney Stage Info //

// 1 = pre tourney
// 2 = tourney commenced
// 3 = group stages are finishing
// 4 = pre-ko
// 5 = ko commenced
/////////////////////////////////

const express = require("express");
const app = express();
const syncAndSeed = require("./server/script/seed");
const path = require("path");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use("/", require("./server/api/updated"));
app.use("/", require("./server/api/users"));
app.use("/", require("./server/api/auth"));
app.use("/", require("./server/api/teams"));
app.use("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "html/main.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 1919;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
