import React from "react";
import "./App.css";

const App = () => {
  const startHue = 30;
  return (
    <div id="App">
      <svg
        height="500"
        width="500"
        style={{ backgroundColor: `hsl(${startHue}, 100%, 50%)` }}
      >
        <polygon
          points="100,10 40,198 190,78 10,78 160,198"
          // style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"
          style={{
            stroke: `hsl(${startHue + 180}, 100%, 50%)`,
            fill: `hsl(${startHue + 120}, 100%, 50%)`,
            strokeWidth: 5,
            fillRule: "nonzero"
          }}
        />
      </svg>
    </div>
  );
};

export default App;
