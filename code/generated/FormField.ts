// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  error: ControlDescription;
  help: ControlDescription;
  htmlFor: ControlDescription;
  label: ControlDescription;
  name: ControlDescription;
  pad: ControlDescription;
  required: ControlDescription;
  checked: ControlDescription;
  disabled: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  error: { title: "Error", defaultValue: "", type: ControlType.String },
  help: { title: "Help", defaultValue: "", type: ControlType.String },
  htmlFor: { title: "HtmlFor", defaultValue: "", type: ControlType.String },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  pad: { title: "Pad", defaultValue: false, type: ControlType.Boolean },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
