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
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  animate: merge(controls.animate, {}),
  date: merge(controls.date, {}),
  daysOfWeek: merge(controls.daysOfWeek, {}),
  firstDayOfWeek: merge(controls.firstDayOfWeek, {}),
  locale: merge(controls.locale, {}),
  range: merge(controls.range, {}),
  reference: merge(controls.reference, {}),
  showAdjacentDays: merge(controls.showAdjacentDays, {}),
  size: merge(controls.size, {}),
  placeholder: merge(controls.placeholder, {})
});
