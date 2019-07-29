import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Diagram";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Diagram(props) {
  return <System.Diagram {...props} style={style} />;
}

Diagram.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Diagram, {});
