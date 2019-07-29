import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Anchor";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Anchor(props) {
  return <System.Anchor {...props} style={style} />;
}

Anchor.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Anchor, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  color: merge(controls.color, {}),
  label: merge(controls.label, {}),
  reverse: merge(controls.reverse, {}),
  size: merge(controls.size, {}),
  as: merge(controls.as, {})
});
