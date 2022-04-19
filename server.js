////pool picks in its entirety
//excel doc - mark off things to audit for during each stage for the pool picks page

////my picks unlocked in its entirety
//knockout stage - add logic for when you click on a R16 name, it auto poulates into the quarters
//try to break the submission process for both stages to see if you need to put an audit point in place to track if someone has invalid picks
//error handling in excel doc
//excel doc - mark off things to audit for during each stage for the pool picks page

////admin page for updating user info

//all  pages
//my-picks page - group stage - make the cont smaller if the group stage has no outcome or point info yet
//pool-picks page - group stage - make the cont smaller if the group stage has no outcome or point info yet

////admin page for updating group info
////admin page for updating individual team info
////edit name page

////pool picks
//on a hard refresh, the dropdown option and pick info defaults back to the info for the person who is signed in

////leaderboard
//fix css on "score" and "rank" header centering

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
