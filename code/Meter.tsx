import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Meter";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Meter(props) {
  return <System.Meter {...props} style={style} />;
}

Meter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Meter, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  background: merge(controls.background, {}),
  round: merge(controls.round, {}),
  size: merge(controls.size, {}),
  thickness: merge(controls.thickness, {}),
  type: merge(controls.type, {})
});
