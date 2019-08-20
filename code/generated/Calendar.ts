// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  animate: ControlDescription;
  date: ControlDescription;
  daysOfWeek: ControlDescription;
  firstDayOfWeek: ControlDescription;
  locale: ControlDescription;
  range: ControlDescription;
  reference: ControlDescription;
  showAdjacentDays: ControlDescription;
  size: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  a11yTitle: { title: "A11yTitle", defaultValue: "", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", defaultValue: "", type: ControlType.String },
  margin: { title: "Margin", defaultValue: "", type: ControlType.String },
  animate: { title: "Animate", defaultValue: false, type: ControlType.Boolean },
  date: { title: "Date", defaultValue: "", type: ControlType.String },
  daysOfWeek: {
    title: "DaysOfWeek",
    defaultValue: false,
    type: ControlType.Boolean
  },
  firstDayOfWeek: {
    title: "FirstDayOfWeek",
    options: ["0", "1"],
    optionTitles: ["0", "1"],
    defaultValue: "0",
    type: ControlType.Enum
  },
  locale: { title: "Locale", defaultValue: "", type: ControlType.String },
  range: { title: "Range", defaultValue: false, type: ControlType.Boolean },
  reference: { title: "Reference", defaultValue: "", type: ControlType.String },
  showAdjacentDays: {
    title: "ShowAdjacentDays",
    defaultValue: false,
    type: ControlType.Boolean
  },
  size: { title: "Size", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
