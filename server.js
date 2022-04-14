////my picks locked
//seed team finishing position info
//seed part ko picks
//audit total points data for all parts
//do css work on ko

////leaderboard in its entirety

////pool picks in its entirety
//way to tell if someone hasn't paid
//way to tell if someone has invalid picks?

////my picks unlocked in its entirety
//knockout stage - add logic for when you click on a R16 name, it auto poulates into the quarters
//error handling in excel doc

////edit name page
////admin page

////rules page
//adjust rules/scoring accordingly
//adjust payment and submitting info

////test/apply all error handling

////incorporate web sockets for teams and parts -- send to heroku without websockets and test first

//figure out a forgot pw route

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
