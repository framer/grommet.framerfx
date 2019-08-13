import * as React from "react";
import * as System from "grommet";
import {
  ControlType,
  PropertyControls,
  addPropertyControls,
  Color
} from "framer";
import { controls, merge } from "./inferredProps/Meter";
import { sizeControl, colorControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Meter({ value, barColor, ...props }) {
  return (
    <System.Meter values={[{ value, color: barColor }] as any} {...props} />
  );
}

Meter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Meter, {
  background: { ...colorControl, defaultValue: "light-1" },
  round: merge(controls.round, {}),
  size: sizeControl,
  thickness: merge(controls.thickness, {}),
  type: merge(controls.type, { defaultValue: "bar" }),
  value: { type: ControlType.Number, min: 0, max: 100, defaultValue: 50 },
  barColor: colorControl
});
