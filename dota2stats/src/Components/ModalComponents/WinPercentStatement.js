import React from "react";
import winPercent from "../../JSONfiles/winPercent";

const WinPercentStatement = (props) => {
  let statement = "working";

  if (Number(props.winPercent) < 50) {
    statement =
      winPercent.below50[Math.floor(Math.random() * winPercent.below50.length)];
  } else if (Number(props.winPercent) < 55) {
    statement =
      winPercent.from50to55[
        Math.floor(Math.random() * winPercent.from50to55.length)
      ];
  } else {
    statement =
      winPercent.above55[Math.floor(Math.random() * winPercent.above55.length)];
  }
  return (
    <div>
      <span>{statement}</span>
    </div>
  );
};

export default WinPercentStatement;
