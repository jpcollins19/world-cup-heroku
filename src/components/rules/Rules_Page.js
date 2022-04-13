import "./Rules.css";

const Rules_Page = () => {
  return (
    <main className="rules_page">
      <div>
        <h2>There are 2 stages:</h2>
        <ul>
          <li className="to-do">
            Stage 1 - Rank where you think each country will finish in their
            respective group. Due date for stage 1 is ???.
          </li>
          <li className="to-do">
            Stage 2 - Complete a round of 16 bracket. We won't know the round of
            16 info until the afternoon of 12/2. I'll be sending out an email
            that day for you to complete your Knockout picks. The Knockout Stage
            commences the very next day (12/3) so there will be a tight
            turnaround with this stage.
          </li>
        </ul>

        <h2>Stage 1 scoring:</h2>
        <ul>
          <li>3 pts for predicting the correct country to win the group.</li>
          <li>
            2 pts for predicting the correct country to take 2nd in the group.
          </li>
          <li>
            1 pt for predicting a country to advance out of the group, but you
            did not rank them in the correct 1/2 spot.
          </li>
          <li>
            1 pt for predicting the correct 3rd and 4th place finishers of a
            group.
          </li>
        </ul>

        <h2>Stage 2 scoring:</h2>
        <ul>
          <li>
            2 pts for each team you choose correctly to advance to the quarter
            finals.
          </li>
          <li>
            4 pts for each team you choose correctly to advance to the semi
            finals.
          </li>
          <li>
            6 pts for each team you choose correctly to advance to the final.
          </li>
          <li>10 pts if you pick the correct World Cup winner.</li>
        </ul>

        <h2>Tiebreaker:</h2>
        <ul>
          <li>Total number of goals in the tourney - Price is Right rules.</li>
        </ul>

        <h2>Submitting Your Picks:</h2>
        <ul>
          <li>
            Create an Account, then sign in; the link to create an account is
            located on the Sign In page.
          </li>
          <li>Once signed in, navigate to the My Picks tab.</li>
        </ul>

        <h2>Payments/Payout:</h2>
        <ul>
          <li>$20 entry fee.</li>
          <li>Venmo: Joe-Collins-12</li>
          <li>3rd place gets money back.</li>
          <li>Winner gets 75% of remaining $.</li>
          <li>2nd gets 25% of remaining $.</li>
        </ul>
        <div>&nbsp;</div>
      </div>
    </main>
  );
};

export default Rules_Page;
