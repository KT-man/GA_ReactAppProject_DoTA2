import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import "./App.css";
import ParentContainer from "./Components/ParentContainer";

// https://docs.opendota.com/
// userid = 86942246
//https://app.swaggerhub.com/apis/magnacartaelle/OpenDota_API/18.0.0#/constants/get_constants__resource_

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit}></Particles>
      <h1>Dont - TA2</h1>
      <ParentContainer></ParentContainer>
    </div>
  );
}

export default App;
