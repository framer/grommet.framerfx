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
  error: { title: "Error", type: ControlType.String },
  help: { title: "Help", type: ControlType.String },
  htmlFor: { title: "HtmlFor", type: ControlType.String },
  label: { title: "Label", type: ControlType.String },
  name: { title: "Name", type: ControlType.String },
  pad: { title: "Pad", type: ControlType.Boolean },
  required: { title: "Required", type: ControlType.Boolean },
  checked: { title: "Checked", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
