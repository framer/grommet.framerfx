import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Calendar";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Calendar(props) {
  return <System.Calendar {...props} style={style} />;
}

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
  placeholder: merge(controls.placeholder, {})
});
