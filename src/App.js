import React, { useState } from "react";
import Polygon from "./Polygon";
import "./App.css";

const App = () => {
  const [baseHue, setBaseHue] = useState(230);
  const [vertices, setVertices] = useState(6);
  const handleHueSliderChange = event => setBaseHue(Number(event.target.value));
  const handleVerticesSliderChange = event =>
    setVertices(Number(event.target.value));
  return (
    <div id="App">
      <Polygon {...{ baseHue, vertices }} />
      <input
        type="range"
        value={baseHue}
        onChange={handleHueSliderChange}
        min={0}
        max={359}
      />
      <input
        type="range"
        value={vertices}
        onChange={handleVerticesSliderChange}
        min={3}
        max={60}
      />
      <output>{JSON.stringify({ baseHue, vertices }, null, 2)}</output>
    </div>
  );
};

export default App;
