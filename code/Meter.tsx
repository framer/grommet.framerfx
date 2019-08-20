import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Meter";
import { withHOC } from "./withHOC";
import { colorControl, sizeControl, themesControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMeter: React.SFC<any> = ({ value, barColor, ...props }) => {
  return (
    <System.Meter values={[{ value, color: barColor }] as any} {...props} />
  );
};

export const Meter = withHOC(InnerMeter);

Meter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Meter, {
  background: { ...colorControl, defaultValue: "light-1" },
  round: merge(controls.round, {}),
  size: sizeControl,
  type: merge(controls.type, { defaultValue: "bar" }),
  value: { type: ControlType.Number, min: 0, max: 100, defaultValue: 50 },
  barColor: colorControl,
  customTheme: themesControl
});
