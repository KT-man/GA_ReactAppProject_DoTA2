import React from "react";

const PageOne = (props) => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - props.tempDate.getTime();

  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  const userFirstGameDate = props.tempDate.toLocaleString("en-GB", {
    dateStyle: "medium",
  });

  return (
    <>
      <p>
        Your first game was played on <span>{userFirstGameDate}</span>.
      </p>
      <p>
        That's a whopping <span>{daysDifference}</span> days since you started
        this game.
      </p>
      <p>
        Let's not get started on the time you spent on Dota, or League of
        Legends, or Clash Royale, or any other games out there you pretend to be
        good at.
      </p>
    </>
  );
};

export default PageOne;
