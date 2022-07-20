//add redirect logic like you have in 2023 masters doc

//add NoMatch when you do Redirect work

//once the above is complete, see what it looks like if the user logs in with invalid cridentials, ie what does the login page on the scorecard url look like

//fix page height on scorecard page

//adjust user-details folder to mimic masters 2023 work
//add toaster for hen a pw is changed?

//add a loading File and apply it to all applicable pages

//add an Error File and apply it to all applicable pages

//add a Button File and apply it to all applicable pages

/////heroku state
//test/apply all error handling
//roll through the entire tourney lifecycle to make sure all is working as expected
//test forgot pw route with all three emails

////general after heroku testing - change joe email back to joe@gmail.com

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

app.use("/", require("./server/api/sendForgotPW"));
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
