import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Collapsible";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Collapsible(props) {
  return <System.Collapsible {...props} style={style} />;
}

Collapsible.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Collapsible, {
  open: merge(controls.open, {}),
  direction: merge(controls.direction, {}),
  placeholder: merge(controls.placeholder, {})
});
