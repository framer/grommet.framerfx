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
  a11yTitle: { title: "A11yTitle", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  animate: { title: "Animate", type: ControlType.Boolean },
  date: { title: "Date", type: ControlType.String },
  daysOfWeek: { title: "DaysOfWeek", type: ControlType.Boolean },
  firstDayOfWeek: {
    title: "FirstDayOfWeek",
    options: ["0", "1"],
    optionTitles: ["0", "1"],
    type: ControlType.Enum
  },
  locale: { title: "Locale", type: ControlType.String },
  range: { title: "Range", type: ControlType.Boolean },
  reference: { title: "Reference", type: ControlType.String },
  showAdjacentDays: { title: "ShowAdjacentDays", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
