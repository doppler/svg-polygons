import React from "react";

const Polygon = ({ vertices = 5 }) => {
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
      style={{ backgroundColor: `hsl(60, 100%, 50%)` }}
    >
      <polygon
        points={verticesPoints()}
        style={{
          stroke: `hsl(240, 100%, 50%)`,
          fill: `hsl(180, 100%, 50%)`,
          strokeWidth: 5,
          fillRule: "nonzero"
        }}
      />
    </svg>
  );
};

export default Polygon;
