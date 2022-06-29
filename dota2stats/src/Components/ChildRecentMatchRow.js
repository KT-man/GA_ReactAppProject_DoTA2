import React from "react";
import heroes from "../JSONfiles/heroes";

const ChildRecentMatchRow = (props) => {
  let iconUrl = `https://cdn.cloudflare.steamstatic.com/${
    heroes[props.data.hero_id].icon
  }`;

  let matchDate = props.data.start_time;
  matchDate = new Date(matchDate * 1000).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  let radiantOrDire = "";
  switch (props.data.player_slot) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      radiantOrDire = "Radiant";
      break;
    case 128:
    case 129:
    case 130:
    case 131:
    case 132:
      radiantOrDire = "Dire";
      break;
    default:
      return props.data.player_slot;
  }

  let matchResult = "";
  switch (props.data.radiant_win) {
    case true:
      if (radiantOrDire === "Radiant") {
        matchResult = "Player Won Match";
      } else {
        matchResult = "Player Lost Match";
      }
      break;
    case false:
      if (radiantOrDire === "Dire") {
        matchResult = "Player Won Match";
      } else {
        matchResult = "Player Lost Match";
      }
      break;
    default:
      return props.data.radiant_win;
  }

  return (
    <>
      <tr>
        <td>{props.index + 1}</td>
        <td>{matchDate}</td>
        <td>
          <img src={iconUrl} alt="heroicon"></img>
          {heroes[props.data.hero_id].localized_name}
        </td>
        <td>
          {props.data.radiant_win ? "Radiant Victory" : "Dire Victory"} -{" "}
          {matchResult}
        </td>
        <td>{Math.floor(props.data.duration / 60)} Minutes</td>
        <td>
          {props.data.kills}/{props.data.assists}/{props.data.deaths}
        </td>
      </tr>
    </>
  );
};

export default ChildRecentMatchRow;
