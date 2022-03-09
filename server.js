//start an excel doc with stage info like you did for the masters

////my_picks_unlocked page

//////group
//need to make it a component and on step to house changes to the component state
//cannot submit the same team more than once

//////knockout
//create a page to edit the knockout picks
//knockout stage - add logic for when you click on a R16 name, it auto poulates into the quarters
//if you edit a team to advance, and you have them winning the tourney - un select all previous picks

//create a stage instance and apply this to each wc stage of your server notes
//^^ audit after

////my_picks_unlocked page
//error handling
//group - cannot submit the same team twice
//group - incomplete picks
//no tiebreaker
//ko - incomplete picks

////new login - pre tourney
//when the part has no selections, only the option to choose group picks shows
//^^cannot submit incomplete picks
//make it so you cannot submit the same userName(when the time comes to create login info)

//new login - mid tourny - aka knockout stage
//knockout stage - add logic for when you click on a R16 name, it auto poulates into the quarters

////rules page
//adjust rules/scoring accordingly
//adjust payment and submitting info too

////pool-picks
//what does it look like pre-tournament - make the van persie pic fit the screen?

//all other tabs
//what does it look like pre-tournament

//------------------------------------------------------------
////before WC starts - BEFORE part makes their picks:\

//My_Picks_Locked: hide the "bottom box" tag
//Pool_Picks_Page: hide the "top-box" tag
//Pool_Picks_Page: hide "bottom box" tag
//Point_System_Cont: hide the pathname conditional that holds the pool_picks "select" tag
//App: comment out the My_Picks_Unlocked path that goes to the knockout path - audit to make sure this works
//My_Picks_Unlocked: hide the "bottom box" tag?

//------------------------------------------------------------
////before WC starts - AFTER part makes their picks:

//Pool_Picks_Page: un-hide the "top-box" tag

//------------------------------------------------------------
////once the WC commences:

//Point_System_Cont: hide the pathname conditional that holds the my_picks "select / adjust picks" tag
//Leaderboard_Page: un-hide the Leaderboard_Cont component
//Point_System_Cont: un-hide the pathname conditional that holds the pool_picks "select" tag
//App: comment out the My_Picks_Unlocked path that goes to the group path - audit to make sure this works

//------------------------------------------------------------
////once groupstage settles, before KO stage begins

//postgres_info: complete the groupFinishingPosition instance for each team.
//Point_System_Cont: hide the pathname conditional that holds the pool_picks "select" tag
//Pool_Picks_Page: hide the "box left" tag
//My_Picks_Locked: un-hide the "bottom box" tag
//Point_System_Cont: un-hide the pathname conditional that holds the my_picks "select" tag
//need to potentially change this one: adjust the edit options to only edit the ko stage info
//App: un-hide the My_Picks_Unlocked path that goes to the KO path - audit to make sure this works

//------------------------------------------------------------
////once KO stage commences:

//Point_System_Cont: hide the pathname conditional that holds the my_picks "select" tag
//Pool_Picks_Page: un-hide "box left" tag
//Pool_Picks_Page: un-hide "bottom box" tag
//Pool_Picks_Page: comment out all of the <div>&nbsp;</div> at the bottom
//Point_System_Cont: un-hide the pathname conditional that holds the pool_picks "select" tag
//App: comment out the My_Picks_Unlocked path that goes to the KO path - audit to make sure this works

//------------------------------------------------------------
//stage table:
//before WC starts: pre-WC
//once the WC commences: WC-C
//once groupstage settles, before KO stage begins: pre-KO
//once KO stage commences: KO-C

//apply all error handling

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
