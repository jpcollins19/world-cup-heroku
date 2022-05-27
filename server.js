//my picks edit page
//do css work on the dropdown options
//audit for work both scenarios of user not having picks vs. having picks
//audit work that submitting and editing works

//pool picks page dropdown - incorporate react Select

////user admin page -- test updating this info for every aspect
////add admin page for updating group info
////add admin page for updating individual team info
////add edit name page

////login and create account pages
//make it so the email is all lower case letters when submitted
//change submit button to something better

////all pages that have a submit/edit button - do css work on these

////bugs
//pool picks page - on a hard refresh, the dropdown option and pick info defaults back to the info for the person who is signed in

////rules page
//adjust rules/scoring accordingly
//adjust payment and submitting info

//write test specs to determine scenario #11 in excel doc "java testing-audit info" - "tiebreaker testing" tab

////test/apply all error handling in local state

////incorporate web sockets for teams and parts -- send to heroku without websockets and test first

//figure out a forgot pw route

////test/apply all error handling in heroku state

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
