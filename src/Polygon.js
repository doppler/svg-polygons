import React from "react";

const Polygon = ({ baseHue, vertices = 5 }) => {
  const size = 500;
  const h = size / 2;
  const k = size / 2;
  const r = size / 2 - 5;

  const verticesPoints = () => {
    return Array.from(Array(vertices))
      .map((_, i) => i * (360 / vertices))
      .map(angle => {
        return [
          h + r * Math.cos((angle * Math.PI) / 180),
          k + r * Math.sin((angle * Math.PI) / 180)
        ].join(",");
      })
      .join(" ");
  };

  return (
    <svg
      height={size}
      width={size}
      style={{ backgroundColor: `hsl(${baseHue}, 100%, 50%)` }}
    >
      <polygon
        // points="100,10 40,198 190,78 10,78 160,198"
        points={verticesPoints()}
        style={{
          stroke: `hsl(${baseHue + 180}, 100%, 50%)`,
          fill: `hsl(${baseHue + 120}, 100%, 50%)`,
          strokeWidth: 5,
          fillRule: "nonzero"
        }}
      />
    </svg>
  );
};

export default Polygon;
