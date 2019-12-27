import React from "react";
import { render } from "react-dom";

import Pattern from "./Column";
import "./style.css";

/*
const eventSeq = ["A", "D", "R", "F", "G", "B", "A", "E", "C", "D"];
const colorMap = jsonData.colorMap_for_Events[0];
const patternFeq = 0.1;
const colWidth = 40;
const colHeight = 100;
const fixedHeader = 16;

// calclate column height by patternFeq
const bodyHeight = colHeight * patternFeq;
const height = bodyHeight + fixedHeader;
const startY = fixedHeader;
// encode columns' color by colorMap
const rectColor = eventSeq.map(e => {
  return colorMap[e];
});*/

const App = () => (
  <div className="eventSeq-vis">
    <div className="boardA">
      <Pattern />
      <Pattern />
      <Pattern />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
