import { addPropertyControls, ControlType } from "framer";
import * as System from "grommet";
import * as React from "react";
import {
  colorControl,
  sizeControl,
  themesControl
} from "./utils/customControls";
import { withHOC } from "./withHOC";

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
  round: { title: "Round", defaultValue: false, type: ControlType.Boolean },
  size: sizeControl,
  type: {
    title: "Type",
    options: ["circle", "bar"],
    optionTitles: ["Circle", "Bar"],
    defaultValue: "circle",
    type: ControlType.Enum
  },
  value: { type: ControlType.Number, min: 0, max: 100, defaultValue: 50 },
  barColor: colorControl,
  customTheme: themesControl
});
