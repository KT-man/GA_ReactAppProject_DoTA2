import React from "react";
import achievements from "../../AchievementHours/achievementsHours";

const PageThree = (props) => {
  return (
    <>
      <p>
        In your losing games, you've spent well over{" "}
        {Math.floor(props.matchesPlayed.userTotalLossTime / 60 / 60)} hours
        doing... wait what were you doing again? Oh right, Losing.
      </p>
      <p>That very same amount of time you spent losing...</p>
      <p>
        You could have{" "}
        {
          achievements.hours500[
            Math.floor(Math.random() * achievements.hours500.length)
          ]
        }
      </p>
      <p>
        If failure were the mother of success, you are one real mean mother
        f*****
      </p>
    </>
  );
};

export default PageThree;
