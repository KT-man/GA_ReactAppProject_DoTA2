import React from "react";
import WinPercentStatement from "./WinPercentStatement";

const PageTwo = (props) => {
  const winPercent = (
    (props.matchesPlayed.win / props.matchesPlayed.total) *
    100
  ).toPrecision(4);
  return (
    <>
      <p>Over the years, you've racked up </p>
      <p>
        <span>
          {props.matchesPlayed.win} wins {props.matchesPlayed.loss} losses
        </span>
      </p>

      <p>That's an awful lot of losses don't you think?</p>
      <br></br>
      <br></br>
      <p>Your Win Percentage is:</p>
      <span>{winPercent}% </span>

      <WinPercentStatement winPercent={winPercent}></WinPercentStatement>
    </>
  );
};

export default PageTwo;
