import React from "react";

import Word from "./Word";

const PageThree = (props) => {
  const loseHours = Math.floor(props.matchesPlayed.userTotalLossTime / 60 / 60);
  return (
    <>
      <p>
        In your losing games, you've spent well over{" "}
        <span> {loseHours} hours</span>...{" "}
      </p>
      <p>wait what were you doing again? Oh right, Losing.</p>
      <p>You could have spent that very same amount of time and </p>
      <Word loseHours={loseHours} pageState={props.pageState}></Word>
      <br></br>
    </>
  );
};

export default PageThree;
