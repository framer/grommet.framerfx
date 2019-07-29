import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Clock";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Clock(props) {
  return <System.Clock {...props} style={style} />;
}

Clock.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Clock, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  hourLimit: merge(controls.hourLimit, {}),
  precision: merge(controls.precision, {}),
  run: merge(controls.run, {}),
  size: merge(controls.size, {}),
  time: merge(controls.time, {})
});
