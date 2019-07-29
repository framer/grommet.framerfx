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
  hourLimit: {
    title: "HourLimit",
    options: ["12", "24"],
    optionTitles: ["12", "24"],
    type: ControlType.Enum
  },
  precision: {
    title: "Precision",
    options: ["hours", "minutes", "seconds"],
    optionTitles: ["Hours", "Minutes", "Seconds"],
    type: ControlType.Enum
  },
  run: {
    title: "Run",
    options: ["backward", "forward"],
    optionTitles: ["Backward", "Forward"],
    type: ControlType.Enum
  },
  size: { title: "Size", type: ControlType.String },
  time: { title: "Time", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
