// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  plain: ControlDescription;
  scope: ControlDescription;
  size: ControlDescription;
  verticalAlign: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  plain: { title: "Plain", defaultValue: false, type: ControlType.Boolean },
  scope: { title: "Scope", defaultValue: "", type: ControlType.String },
  size: { title: "Size", defaultValue: "", type: ControlType.String },
  verticalAlign: {
    title: "VerticalAlign",
    options: ["top", "bottom", "middle"],
    optionTitles: ["Top", "Bottom", "Middle"],
    defaultValue: "top",
    type: ControlType.Enum
  },
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
