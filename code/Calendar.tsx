import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Calendar";
import { withHOC } from "./withHOC";
import { themesControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCalendar: React.SFC = props => {
  return <System.Calendar {...props} style={style} />;
};

export const Calendar = withHOC(InnerCalendar);

Calendar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Calendar, {
  animate: merge(controls.animate, { defaultValue: true }),
  daysOfWeek: merge(controls.daysOfWeek, { defaultValue: true }),
  showAdjacentDays: merge(controls.showAdjacentDays, { defaultValue: true }),
  size: {
    type: ControlType.Enum,
    options: ["small", "medium", "large"],
    defaultValue: "medium"
  },
  customTheme: themesControl
});
