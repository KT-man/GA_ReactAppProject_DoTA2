import React from "react";

const PageTwo = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Over the years, you've racked up {props.matchesPlayed.win} wins and{" "}
        {props.matchesPlayed.loss} losses over your {props.matchesPlayed.total}{" "}
        matches played. That's an awful lot of losses don't you think?
      </p>
      <p>Let's have a closer look at your losses...</p>
      <p>
        By our calculations, your Win/Loss ratio is hovering near{" "}
        {(props.matchesPlayed.win / props.matchesPlayed.loss).toPrecision(4)},
        [PLACEHOLDER] so I guess you can proudly tell your family and friends
        you didn't entirely "waste your time", Picasso.
      </p>
    </>
  );
};

export default PageTwo;
