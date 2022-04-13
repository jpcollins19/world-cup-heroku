//my picks through the group stage
//pool picks through the group stage
//leaderboard
//my picks for KO stage
//pool picks for KO stage
//edit name
//admin

////my_picks_unlocked page
///group
//need to make it a component and on step to house changes to the component state
//error handling in excel doc

////my_picks_locked
//way to tell if someone hasn't paid
//way to tell if someone has invalid picks?

//////knockout
//create a page to edit the knockout picks
//knockout stage - add logic for when you click on a R16 name, it auto poulates into the quarters
//error handling in excel doc

////pre tourney
//when the part has no selections, only the option to choose group picks shows
//^^cannot submit incomplete picks

//mid tourny - aka knockout stage
//knockout stage - add logic for when you click on a R16 name, it auto poulates into the quarters

////rules page
//adjust rules/scoring accordingly
//adjust payment and submitting info

////pool-picks
//what does it look like pre-tournament - make the van persie pic fit the screen?

//all tabs
//what does it look like pre-tournament

//------------------------------------------------------------

//admin page
//edit name page

//apply all error handling

//incorporate web sockets for teams and parts

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
