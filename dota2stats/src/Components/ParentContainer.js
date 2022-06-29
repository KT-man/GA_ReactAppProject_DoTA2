import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

//Temp Static Files
// import allMatches from "../JSONfiles/allMatches";
// import recentMatches from "../JSONfiles/recentMatches";
// import userSummary from "../JSONfiles/userSummary";
// import peers from "../JSONfiles/peers";
// import userHeroes from "../JSONfiles/userHeroes";
//------------------

import SummaryStats from "./SummaryStats";

const bigInt = require("big-integer");

const ParentContainer = () => {
  //To relook at the useStates. Some of them (such as search) might be better stored as useRefs to prevent excessive rerendering
  const [search, setSearch] = useState("");
  const [didSearch, setDidSearch] = useState(false);

  const [userSummaryStats, setUserSummaryStats] = useState({});
  const [recentStats, setRecentStats] = useState([]);
  const [summaryStats, setSummaryStats] = useState([]);
  const [userPeers, setUserPeers] = useState([]);
  const [userHeroStats, setUserHeroStats] = useState([]);

  //-------------------------- Function to handle search input ---------------//
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //-------------------------- Function to handle search input for Steam Community ID
  // function idConverter(seventeenDigitID) {
  //   if (seventeenDigitID.split("") === 17) {
  //     const convertConstant = "76561197960265728";
  //     let convertedID = bigInt(seventeenDigitID).minus(bigInt(convertConstant));
  //     console.log("hello");
  //     convertedID = Number(convertedID.value);

  //     return convertedID;
  //   }
  // }

  // useEffect(() => {
  //   idConverter(search);
  //   console.log(search);
  // }, [search]);

  //-------------------------- Function to handle submit button --------------//
  // On submit button, to make GET request to OpenDota API and request for data
  // Multiple search queries to be made, one to be made to get recent data, another for longer term data and to be stored in modal

  const handleSubmit = (event) => {
    event.preventDefault();

    //------------------------ URLs for GET request from OpenDotaAPI ---------//

    //matches searches for ALL matches; recentMatches for most recent 20 matches; players for user summary; userPeers for friends of user, arranged in descending order of games together; heroes for herostats

    let summaryStatsUrl = `https://api.opendota.com/api/players/${search}/matches`;
    let recentStatsUrl = `https://api.opendota.com/api/players/${search}/recentMatches`;
    let userSummaryStatsUrl = `https://api.opendota.com/api/players/${search}`;
    let userPeersUrl = `https://api.opendota.com/api/players/${search}/peers`;
    let userHeroesUrl = `https://api.opendota.com/api/players/${search}/heroes`;

    function makeGetRequest(url) {
      axios.get(url).then(
        (response) => {
          switch (url) {
            case summaryStatsUrl:
              console.log(url);
              return setSummaryStats(response.data);
            case recentStatsUrl:
              return setRecentStats(response.data);
            case userSummaryStatsUrl:
              return setUserSummaryStats(response.data);
            case userPeersUrl:
              return setUserPeers(response.data);
            case userHeroesUrl:
              return setUserHeroStats(response.data);
            default:
              return url;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }

    //-------------------Wrapping multiple makeGetRequests to get required data from OpenDotaAPI
    function getDotaStats() {
      makeGetRequest(summaryStatsUrl);
      makeGetRequest(recentStatsUrl);
      makeGetRequest(userSummaryStatsUrl);
      makeGetRequest(userPeersUrl);
      makeGetRequest(userHeroesUrl);

      setDidSearch(true);
    }

    getDotaStats();
    setSearch("");

    // ------------------------------
    // ------------------------------Replacing with static data first
    // ------------------------------
    // ------------------------------
    // setRecentStats(recentMatches);
    // setSummaryStats(allMatches);
    // setUserSummaryStats(userSummary);
    // setUserPeers(peers);
    // setUserHeroStats(userHeroes);
  };

  return (
    <div className="container">
      {!didSearch && (
        <SearchBar
          search={search}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
        ></SearchBar>
      )}
      {didSearch && summaryStats.length !== 0 && (
        <SummaryStats
          userSummary={userSummaryStats}
          recentMatches={recentStats}
          summaryStats={summaryStats}
          userPeers={userPeers}
          userHeroStats={userHeroStats}
          search={search}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
        ></SummaryStats>
      )}
    </div>
  );
};

export default ParentContainer;
