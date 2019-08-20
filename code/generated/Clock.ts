// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  hourLimit: ControlDescription;
  precision: ControlDescription;
  run: ControlDescription;
  size: ControlDescription;
  time: ControlDescription;
  type: ControlDescription;
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
  hourLimit: {
    title: "HourLimit",
    options: ["12", "24"],
    optionTitles: ["12", "24"],
    defaultValue: "12",
    type: ControlType.Enum
  },
  precision: {
    title: "Precision",
    options: ["hours", "minutes", "seconds"],
    optionTitles: ["Hours", "Minutes", "Seconds"],
    defaultValue: "hours",
    type: ControlType.Enum
  },
  run: {
    title: "Run",
    options: ["backward", "forward"],
    optionTitles: ["Backward", "Forward"],
    defaultValue: "backward",
    type: ControlType.Enum
  },
  size: { title: "Size", defaultValue: "", type: ControlType.String },
  time: { title: "Time", defaultValue: "", type: ControlType.String },
  type: { title: "Type", defaultValue: "", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
