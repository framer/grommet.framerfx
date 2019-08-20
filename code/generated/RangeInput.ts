// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  id: ControlDescription;
  min: ControlDescription;
  max: ControlDescription;
  name: ControlDescription;
  step: ControlDescription;
  value: ControlDescription;
  checked: ControlDescription;
  disabled: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  min: { title: "Min", defaultValue: "", type: ControlType.String },
  max: { title: "Max", defaultValue: "", type: ControlType.String },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  step: { title: "Step", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
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
