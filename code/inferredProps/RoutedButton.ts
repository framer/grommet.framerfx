// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  path: ControlDescription;
  method: ControlDescription;
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  active: ControlDescription;
  color: ControlDescription;
  disabled: ControlDescription;
  fill: ControlDescription;
  focusIndicator: ControlDescription;
  gap: ControlDescription;
  hoverIndicator: ControlDescription;
  href: ControlDescription;
  target: ControlDescription;
  label: ControlDescription;
  plain: ControlDescription;
  primary: ControlDescription;
  reverse: ControlDescription;
  type: ControlDescription;
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
  a11yTitle: { title: "A11yTitle", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  active: { title: "Active", type: ControlType.Boolean },
  color: { title: "Color", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  fill: {
    title: "Fill",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  focusIndicator: { title: "FocusIndicator", type: ControlType.Boolean },
  gap: { title: "Gap", type: ControlType.String },
  hoverIndicator: { title: "HoverIndicator", type: ControlType.String },
  href: { title: "Href", type: ControlType.String },
  target: {
    title: "Target",
    options: ["_self", "_blank", "_parent", "_top"],
    optionTitles: ["_self", "_blank", "_parent", "_top"],
    type: ControlType.Enum
  },
  label: { title: "Label", type: ControlType.String },
  plain: { title: "Plain", type: ControlType.Boolean },
  primary: { title: "Primary", type: ControlType.Boolean },
  reverse: { title: "Reverse", type: ControlType.Boolean },
  type: {
    title: "Type",
    options: ["button", "reset", "submit"],
    optionTitles: ["Button", "Reset", "Submit"],
    type: ControlType.Enum
  },
  as: { title: "As", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
