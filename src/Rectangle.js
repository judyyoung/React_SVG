import React from "react";

const SVG = ({
  style = { background: "#000", padding: "10" },
  fill = "#000",
  width = "",
  height = "",
  objHeight = "",
  className = "",
  startY = "0"
}) => (
  <svg
    width={width}
    height={height}
    style={{ backgroundColor: fill, padding: "4" }}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-rect ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width={width} height={objHeight} fill="#FFF" y={startY} />
  </svg>
);

export default SVG;
