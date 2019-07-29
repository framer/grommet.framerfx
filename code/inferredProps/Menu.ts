// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  disabled: ControlDescription;
  dropBackground: ControlDescription;
  justifyContent: ControlDescription;
  icon: ControlDescription;
  label: ControlDescription;
  open: ControlDescription;
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
  disabled: { title: "Disabled", type: ControlType.Boolean },
  dropBackground: { title: "DropBackground", type: ControlType.String },
  justifyContent: {
    title: "JustifyContent",
    options: ["start", "center", "end", "stretch", "between", "around"],
    optionTitles: ["Start", "Center", "End", "Stretch", "Between", "Around"],
    type: ControlType.Enum
  },
  icon: { title: "Icon", type: ControlType.String },
  label: { title: "Label", type: ControlType.String },
  open: { title: "Open", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
