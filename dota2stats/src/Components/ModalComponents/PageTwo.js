import React from "react";

const PageTwo = (props) => {
  console.log(props);
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
      <span>
        {(
          (props.matchesPlayed.win / props.matchesPlayed.total) *
          100
        ).toPrecision(4)}
        %{" "}
      </span>

      <p>
        [PLACEHOLDER] so I guess you can proudly tell your family and friends
        you didn't entirely "waste your time", Picasso.
      </p>
    </>
  );
};

export default PageTwo;
