import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import allMatches from "../JSONfiles/allMatches";
import recentMatches from "../JSONfiles/recentMatches";
import userSummary from "../JSONfiles/userSummary";
import SummaryStats from "./SummaryStats";

const ParentContainer = () => {
  //To relook at the useStates. Some of them (such as search) might be better stored as useRefs to prevent excessive rerendering
  const [search, setSearch] = useState("");
  const [didSearch, setDidSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [recentStats, setRecentStats] = useState([]);
  const [summaryStats, setSummaryStats] = useState([]);
  const [userSummaryStats, setUserSummaryStats] = useState({});

  //-------------------------- Function to handle search input ---------------//
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //-------------------------- Function to handle submit button --------------//
  // On submit button, to make GET request to OpenDota API and request for data
  // Multiple search queries to be made, one to be made to get recent data, another for longer term data and to be stored in modal

  const handleSubmit = (event) => {
    event.preventDefault();

    //------------------------ URLs for GET request from OpenDotaAPI ---------//
    // Refactor userid into {search} state later

    //matches searches for ALL matches, unless limited
    //recentMatches for most recent 20 games

    //     let summaryStatsUrl =
    //       "https://api.opendota.com/api/players/86942246/matches";

    //     let recentStatsUrl =
    //       "https://api.opendota.com/api/players/86942246/recentMatches";

    //     let userSummaryStatsUrl = "https://api.opendota.com/api/players/86942246";

    //     function makeGetRequest(url) {
    //       axios.get(url).then(
    //         (response) => {
    //           switch (url) {
    //             case summaryStatsUrl:
    //               return setSummaryStats(response.data);
    //             case recentStatsUrl:
    //               return setRecentStats(response.data);
    //             case userSummaryStatsUrl:
    //               return setUserSummary(response.data);
    //             default:
    //               return url;
    //           }
    //         },
    //         (error) => {
    //           console.log(error);
    //         }
    //       );
    //     }

    //     //-------------------Wrapping multiple makeGetRequests to get required data from OpenDotaAPI
    // function getDotaStats = () => {
    //     setIsLoading(true)
    //     makeGetRequest(summaryStatsUrl)
    //     makeGetRequest(recentStatsUrl)
    //     makeGetRequest(userSummaryStatsUrl)
    //     setIsLoading(false)
    // }

    // ------------------------------
    // ------------------------------Replacing with static data first
    // ------------------------------
    // ------------------------------
    setRecentStats(recentMatches);
    setSummaryStats(allMatches);
    setUserSummaryStats(userSummary);

    setDidSearch(true);
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
      {didSearch && (
        <SummaryStats
          userSummary={userSummary}
          recentMatches={recentMatches}
          summaryStats={allMatches}
        ></SummaryStats>
      )}
    </div>
  );
};

export default ParentContainer;
