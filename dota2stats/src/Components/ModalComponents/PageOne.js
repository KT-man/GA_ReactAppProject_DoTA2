import React from "react";

const PageOne = (props) => {
  const firstGameYear = Number(props.userFirstGameDate.split("-")[0]);
  const yearsPlayed = new Date().getFullYear() - firstGameYear;
  return (
    <>
      <p>
        Your first game was played on {props.userFirstGameDate}, which is over{" "}
        {yearsPlayed} years ago!
      </p>
      <p>
        And that doesn't even count all the time you spent on DoTA1 you freaking
        dinosaur.
      </p>
    </>
  );
};

export default PageOne;
