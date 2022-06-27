import "./App.css";
import ParentContainer from "./Components/ParentContainer";
import SearchBar from "./Components/SearchBar";
// https://docs.opendota.com/
// userid = 86942246
//https://app.swaggerhub.com/apis/magnacartaelle/OpenDota_API/18.0.0#/constants/get_constants__resource_
// "abilities",
// "ability_ids",
// "aghs_desc",
// "ancients",
// "chat_wheel",
// "cluster",
// "countries",
// "game_mode",
// "hero_abilities",
// "hero_lore",
// "hero_names",
// "heroes",
// "item_colors",
// "item_ids",
// "items",
// "lobby_type",
// "neutral_abilities",
// "order_types",
// "patch",
// "patchnotes",
// "permanent_buffs",
// "player_colors",
// "region",
// "skillshots",
// "xp_level"

function App() {
  return (
    <div className="App">
      <h1>Dont - TA2</h1>
      <ParentContainer></ParentContainer>
    </div>
  );
}

export default App;
