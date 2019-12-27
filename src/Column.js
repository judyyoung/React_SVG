import React from "react";
import Rect from "./Rectangle";
import Trig from "./Triangle";
import jsonData from "./colorMap.json";
import "./style.css";
import { Platform, StyleSheet, View, Image } from "react-native";

const styles = {
  fontFamily: "sans-serif"
};
const col_styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  column: {
    width: 40,
    height: 40,
    padding: 20
  }
});

const eventSeq = ["A", "D", "R", "F", "G", "B", "A", "E", "C", "D"];
const colorMap = jsonData.colorMap_for_Events[0];
const patternFeq = 0.1;
const colWidth = 40;
const colHeight = 100;
const fixedHeader = 10;

// calclate column height by patternFeq
const bodyHeight = colHeight * patternFeq;
const height = bodyHeight + fixedHeader;
const startY = fixedHeader;
// encode columns' color by colorMap
/*const rectColor = eventSeq.map(e => {
  return colorMap[e];
});*/
const triangleSize = 10;
function Triangle(props) {
  var height = (props.value * triangleSize) / 10;
  //height = 10;
  const width = 2 * height;
  const path =
    "M " +
    (10 + props.value * (colWidth + 4 * 4 + 1)) +
    "," +
    (25 - height) +
    " l 0,0 l " +
    height * 2 +
    ",0 l " +
    -height +
    "," +
    height +
    " l 0,0 Z";
  return <Trig path_d={path} height={height} width={width} />;
}

function RectUnit(props) {
  return (
    <div className="eventColumn">
      <Rect
        startY={startY}
        width={colWidth}
        height={height}
        objHeight={bodyHeight}
        fill={colorMap[props.value]}
        className="column"
      />
    </div>
  );
}

class Pattern extends React.Component {
  renderEventCol(i) {
    return <RectUnit value={eventSeq[i]} style={col_styles.column} />;
  }
  renderEditsHint(i) {
    return <Triangle value={i} />;
  }
  renderEditsHint_Last(i) {
    return <Triangle value={i} />;
  }

  render() {
    const width = (colWidth + 4 * 4 + 2) * 11;
    const height = 20;
    return (
      <div className="pattern-row" style={styles} width="400" height="50">
        <div className="edit-row">
          <svg
            width={width + 8}
            height={height + 8}
            xmlns="http://www.w3.org/2000/svg"
            className="svg-trig"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            {this.renderEditsHint(0)}
            {this.renderEditsHint(1)}
            {this.renderEditsHint(2)}
            {this.renderEditsHint(3)}
            {this.renderEditsHint(4)}
            {this.renderEditsHint(5)}
            {this.renderEditsHint(6)}
            {this.renderEditsHint(7)}
            {this.renderEditsHint(8)}
            {this.renderEditsHint(9)}
          </svg>
        </div>
        <div className="event-row" style={styles}>
          {this.renderEventCol(0)}
          {this.renderEventCol(1)}
          {this.renderEventCol(2)}
          {this.renderEventCol(3)}
          {this.renderEventCol(4)}
          {this.renderEventCol(5)}
          {this.renderEventCol(6)}
          {this.renderEventCol(7)}
          {this.renderEventCol(8)}
        </div>
      </div>
    );
  }
}

export default Pattern;
