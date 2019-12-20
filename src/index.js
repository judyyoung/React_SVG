import React from "react";
import { render } from "react-dom";

import Icon from "./TelephoneIcon";

import "./style.css";

const styles = {
  fontFamily: "sans-serif"
};

const App = () => (
  <div style={styles}>
    <Icon width={30} />
    <Icon width={100} fill="#49c" />
    <Icon width={200} fill="#fa2" />
    <Icon
      fill="#fff"
      width={350}
      className="telephone"
      style={{ background: "#333", padding: "16px" }}
    />
  </div>
);

render(<App />, document.getElementById("root"));
