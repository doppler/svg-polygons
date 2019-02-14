import React, { useState } from "react";
import Polygon from "./Polygon";
import "./App.css";

const App = () => {
  const [vertices, setVertices] = useState(6);
  const handleVerticesSliderChange = event =>
    setVertices(Number(event.target.value));
  return (
    <div id="App">
      <Polygon {...{ vertices }} />
      <input
        type="range"
        value={vertices}
        onChange={handleVerticesSliderChange}
        min={3}
        max={60}
      />
      <output>{JSON.stringify({ vertices }, null, 2)}</output>
    </div>
  );
};

export default App;
