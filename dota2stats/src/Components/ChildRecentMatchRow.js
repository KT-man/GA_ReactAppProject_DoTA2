import React from "react";
import heroes from "../JSONfiles/heroes";

const ChildRecentMatchRow = (props) => {
  let iconUrl = `https://cdn.cloudflare.steamstatic.com/${
    heroes[props.data.hero_id].icon
  }`;
  return (
    <>
      <tr>
        <td>{props.index + 1}</td>
        <td>
          <img src={iconUrl}></img>
          {heroes[props.data.hero_id].localized_name}
        </td>
        <td>{props.data.radiant_win ? "Radiant Won" : "Dire Won"}</td>
        <td>{Math.floor(props.data.duration / 60)} Minutes</td>
        <td>
          {props.data.kills}/{props.data.assists}/{props.data.deaths}
        </td>
      </tr>
    </>
  );
};

export default ChildRecentMatchRow;
