import React, { useState } from "react";
import Polygon from "./Polygon";
import "./App.css";

const App = () => {
  const [baseHue, setBaseHue] = useState(48);
  const handleHueSliderChange = event => setBaseHue(Number(event.target.value));
  return (
    <div id="App">
      <Polygon {...{ baseHue }} />
      <input
        type="range"
        value={baseHue}
        onChange={handleHueSliderChange}
        min={0}
        max={359}
      />
    </div>
  );
};

export default App;
