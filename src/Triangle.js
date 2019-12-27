import React from "react";

const SVG = ({
  style = { background: "#", padding: "1" },
  fill = "#000",
  width = "20",
  height = "20",
  className = "",
  startY = "0",
  path_d = ""
}) => <path d={path_d} fill="#FFF" stroke="#434343" strokeWidth="2" />;

export default SVG;
