// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  checked: ControlDescription;
  disabled: ControlDescription;
  id: ControlDescription;
  label: ControlDescription;
  name: ControlDescription;
  reverse: ControlDescription;
  toggle: ControlDescription;
  indeterminate: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  reverse: { title: "Reverse", defaultValue: false, type: ControlType.Boolean },
  toggle: { title: "Toggle", defaultValue: false, type: ControlType.Boolean },
  indeterminate: {
    title: "Indeterminate",
    defaultValue: false,
    type: ControlType.Boolean
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
