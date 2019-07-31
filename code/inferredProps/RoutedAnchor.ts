// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  path: ControlDescription;
  method: ControlDescription;
  color: ControlDescription;
  label: ControlDescription;
  reverse: ControlDescription;
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  size: ControlDescription;
  as: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  path: { title: "Path", type: ControlType.String },
  method: {
    title: "Method",
    options: ["replace", "push"],
    optionTitles: ["Replace", "Push"],
    type: ControlType.Enum
  },
  color: { title: "Color", type: ControlType.String },
  label: { title: "Label", type: ControlType.String },
  reverse: { title: "Reverse", type: ControlType.Boolean },
  a11yTitle: { title: "A11yTitle", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  size: { title: "Size", type: ControlType.String },
  as: { title: "As", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
