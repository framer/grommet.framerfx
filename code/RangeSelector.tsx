import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/RangeSelector";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function RangeSelector(props) {
  return <System.RangeSelector {...props} style={style} />;
}

RangeSelector.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RangeSelector, {
  color: merge(controls.color, {}),
  direction: merge(controls.direction, {}),
  invert: merge(controls.invert, {}),
  max: merge(controls.max, {}),
  min: merge(controls.min, {}),
  opacity: merge(controls.opacity, {}),
  round: merge(controls.round, {}),
  size: merge(controls.size, {}),
  step: merge(controls.step, {}),
  placeholder: merge(controls.placeholder, {})
});
