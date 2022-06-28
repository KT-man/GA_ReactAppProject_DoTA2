import React from "react";
import heroes from "../JSONfiles/heroes";

const ChildRecentMatchRow = (props) => {
  let iconUrl = `https://cdn.cloudflare.steamstatic.com/${
    heroes[props.data.hero_id].icon
  }`;

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
  }

  console.log(props);

  return (
    <>
      <tr>
        <td>{props.index + 1}</td>
        <td>{radiantOrDire}</td>
        <td>
          <img src={iconUrl}></img>
          {heroes[props.data.hero_id].localized_name}
        </td>
        <td>{props.data.radiant_win ? "Radiant Victory!" : "Dire Victory!"}</td>
        <td>{Math.floor(props.data.duration / 60)} Minutes</td>
        <td>
          {props.data.kills}/{props.data.assists}/{props.data.deaths}
        </td>
      </tr>
    </>
  );
};

export default ChildRecentMatchRow;
