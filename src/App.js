import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [baseHue, setBaseHue] = useState(48);
  const handleHueSliderChange = event => setBaseHue(Number(event.target.value));
  return (
    <div id="App">
      <svg
        height="500"
        width="500"
        style={{ backgroundColor: `hsl(${baseHue}, 100%, 50%)` }}
      >
        <polygon
          points="100,10 40,198 190,78 10,78 160,198"
          style={{
            stroke: `hsl(${baseHue + 180}, 100%, 50%)`,
            fill: `hsl(${baseHue + 120}, 100%, 50%)`,
            strokeWidth: 5,
            fillRule: "nonzero"
          }}
        />
      </svg>
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
