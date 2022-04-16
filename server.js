////group details
//create test specs for func to sort teams
//write func

////nav bar
//add # of picks submitted info

////my picks locked
//audit what happens after each game ends in the ko stage

////leaderboard in its entirety
//mark off things to audit for during each stage for the leaderboard page

////pool picks in its entirety
//way to tell if someone hasn't paid
//way to tell if someone has invalid picks?
//mark off things to audit for during each stage for the pool picks page

////my picks unlocked in its entirety
//knockout stage - add logic for when you click on a R16 name, it auto poulates into the quarters
//error handling in excel doc
//mark off things to audit for during each stage for the unlockd page page

////admin page for updating user info
////admin page for updating team info
////edit name page

////rules page
//adjust rules/scoring accordingly
//adjust payment and submitting info

////test/apply all error handling

////incorporate web sockets for teams and parts -- send to heroku without websockets and test first

//figure out a forgot pw route

//write test specs to determine scenario #11 in excel doc "java testing-audit info" - "tiebreaker testing" tab

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
