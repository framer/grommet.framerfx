// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  background: ControlDescription;
  round: ControlDescription;
  size: ControlDescription;
  thickness: ControlDescription;
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
  background: {
    title: "Background",
    defaultValue: "",
    type: ControlType.String
  },
  round: { title: "Round", defaultValue: false, type: ControlType.Boolean },
  size: { title: "Size", defaultValue: "", type: ControlType.String },
  thickness: { title: "Thickness", defaultValue: "", type: ControlType.String },
  type: {
    title: "Type",
    options: ["circle", "bar"],
    optionTitles: ["Circle", "Bar"],
    defaultValue: "circle",
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
