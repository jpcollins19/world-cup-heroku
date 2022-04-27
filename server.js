////add admin page for updating user info - need to add POST stuff - try and do this from memory first

//all pages - add logic for each stage of the tourney, test too
//my-picks page - group stage - make the cont smaller if the group stage has no outcome or point info yet
//pool-picks page - group stage - make the cont smaller if the group stage has no outcome or point info yet

////my picks unlocked
//group stage - Group_Cont_Unlocked page - add local state to house group picks - look at pick em code for ideas on how to approach this clean
//^^add logic for when someone already has picks, it auto populates to their picks
//add submitting functionality

//both stages - try to break the submission process for both stages to see if you need to put an audit point in place to track if someone has invalid picks
//error handling in excel doc
//excel doc - mark off things to audit for during each stage for the my picks unlocked page

////user admin page - need to finish adding group and ko pick info, test updating this info too
////add admin page for updating group info
////add admin page for updating individual team info
////add edit name page

////login and create account pages
//make it so the email is all lower case letters when submitted

////bugs
//pool picks page - on a hard refresh, the dropdown option and pick info defaults back to the info for the person who is signed in

////fix css
//leaderboard - "score" and "rank" header centering

////rules page
//adjust rules/scoring accordingly
//adjust payment and submitting info

//write test specs to determine scenario #11 in excel doc "java testing-audit info" - "tiebreaker testing" tab

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
