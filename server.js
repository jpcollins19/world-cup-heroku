//look at css for all pages to verify they are % and not rem based - on Leaderboard
//leaderboard - "score" and "rank" header centering

//all pages with a dropdown - incorporate react Select feature like you did in hoovs app in memberships page
//npm i react-select

////user admin page -- test updating this info when you have a fresh brain before moving on to next item
////add admin page for updating group info
////add admin page for updating individual team info
////add edit name page

////login and create account pages
//make it so the email is all lower case letters when submitted
//change submit button to something better

////bugs
//pool picks page - on a hard refresh, the dropdown option and pick info defaults back to the info for the person who is signed in
//^way to fix this is to house the selected part in the store/backend

////rules page
//adjust rules/scoring accordingly
//adjust payment and submitting info

//write test specs to determine scenario #11 in excel doc "java testing-audit info" - "tiebreaker testing" tab

////test/apply all error handling

////incorporate web sockets for teams and parts -- send to heroku without websockets and test first

//figure out a forgot pw route

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
