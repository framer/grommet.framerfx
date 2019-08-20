// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  id: ControlDescription;
  fill: ControlDescription;
  focusIndicator: ControlDescription;
  name: ControlDescription;
  placeholder: ControlDescription;
  plain: ControlDescription;
  value: ControlDescription;
  resize: ControlDescription;
  size: ControlDescription;
  disabled: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  fill: { title: "Fill", defaultValue: false, type: ControlType.Boolean },
  focusIndicator: {
    title: "FocusIndicator",
    defaultValue: false,
    type: ControlType.Boolean
  },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  },
  plain: { title: "Plain", defaultValue: false, type: ControlType.Boolean },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  resize: {
    title: "Resize",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    defaultValue: "horizontal",
    type: ControlType.Enum
  },
  size: { title: "Size", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
