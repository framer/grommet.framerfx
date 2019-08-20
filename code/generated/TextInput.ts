// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  dropHeight: ControlDescription;
  id: ControlDescription;
  focusIndicator: ControlDescription;
  name: ControlDescription;
  placeholder: ControlDescription;
  plain: ControlDescription;
  size: ControlDescription;
  value: ControlDescription;
  disabled: ControlDescription;
  checked: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  dropHeight: {
    title: "DropHeight",
    defaultValue: "",
    type: ControlType.String
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
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
  size: { title: "Size", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
