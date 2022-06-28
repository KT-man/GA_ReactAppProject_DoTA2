import React, { useState } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

//Multi-page modal. Think of it as states. Starts off as 1. Next Page + 1, Previous Page -1.
//Render pages accordingly based on page state

const DotaModal = (props) => {
  // ---------
  const [pageState, setPageState] = useState(0);

  const setNextPage = () => {
    setPageState(pageState + 1);
  };

  const setPreviousPage = () => {
    setPageState(pageState - 1);
  };

  //----------Get user's first game played and store in userFirstGameDate
  const tempDate = new Date(
    props.summaryStats[props.summaryStats.length - 1].start_time * 1000
  );

  const userFirstGameDate = tempDate.toISOString().split("T")[0];
  //----------------------------------------------------------------------------------------------

  //----------Get user's Win/Loss profile and store in matchesPlayed
  //----------Get user's total losing time and store in userTotalLossTime (s) in matchesPlayed
  const matchesPlayed = {
    total: 0,
    win: 0,
    loss: 0,
    userTotalLossTime: 0,
  };

  matchesPlayed.total = props.summaryStats.length;

  props.summaryStats.map((match) => {
    switch (match.player_slot) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        if (match.radiant_win) {
          return (matchesPlayed.win += 1);
        } else {
          matchesPlayed.userTotalLossTime += match.duration;
          return (matchesPlayed.loss += 1);
        }
      case 128:
      case 129:
      case 130:
      case 131:
      case 132:
        if (match.radiant_win) {
          matchesPlayed.userTotalLossTime += match.duration;
          return (matchesPlayed.loss += 1);
        } else {
          return (matchesPlayed.win += 1);
        }
    }
  });

  //-----------------------------------------------------------------------------------------
  //---------------Get user's KDA and store in matchesKDA
  const matchesKDA = {
    kills: 0,
    deaths: 0,
    assists: 0,
  };

  props.summaryStats.map((match) => {
    matchesKDA.kills += match.kills;
    matchesKDA.deaths += match.deaths;
    matchesKDA.assists += match.assists;
    return matchesKDA;
  });
  //-----------------------------------------------------------------------------------------
  //---------------Get user's top loser friends and number of losses
  const topLosersList = [];
  for (let i = 0; i < 5; i++) {
    topLosersList.push(props.userPeers[i]);
  }

  const listOfTopLosers = [];
  for (const player of topLosersList) {
    const topLosersNameAndLosses = {};
    topLosersNameAndLosses.account_id = player.account_id;
    topLosersNameAndLosses.personaname = player.personaname;
    topLosersNameAndLosses.losses = player.with_games - player.with_win;

    listOfTopLosers.push(topLosersNameAndLosses);
  }

  //-----------------------------------------------------------------------------------------

  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          toSetShowModal={props.toSetShowModal}
          matchesPlayed={matchesPlayed}
          userFirstGameDate={userFirstGameDate}
          listOfTopLosers={listOfTopLosers}
          pageState={pageState}
          setNextPage={setNextPage}
          setPreviousPage={setPreviousPage}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};
export default DotaModal;
