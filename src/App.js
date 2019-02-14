import React from "react";
import "./App.css";

const App = () => {
  const size = 640;

  const verticesPoints = vertices => {
    return Array.from(Array(vertices))
      .map((_, i) => i * (360 / vertices))
      .map(angle => {
        return [
          size / 2 + (size / 2) * Math.cos((angle * Math.PI) / 180),
          size / 2 + (size / 2) * Math.sin((angle * Math.PI) / 180)
        ].join(",");
      })
      .join(" ");
  };

  return (
    <div id="App">
      <svg height={size} width={size} style={{ transform: "rotate(-90deg)" }}>
        {Array.from({ length: 13 }, (x, i) => i)
          .slice(3, 13)
          .reverse() // haha, could've just done [12,11,10,9,8,7,6,5,4,3]
          .map(v => (
            <polygon
              points={verticesPoints(v)}
              style={{
                stroke: "white",
                strokeWidth: 1,
                fill: `hsla(${360 / v}, 100%, 50%, 0.33)`
              }}
            />
          ))}
      </svg>
    </div>
  );
};

export default App;
