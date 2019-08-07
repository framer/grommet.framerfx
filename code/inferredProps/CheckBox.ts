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
  checked: { title: "Checked", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  id: { title: "Id", type: ControlType.String },
  label: { title: "Label", type: ControlType.String },
  name: { title: "Name", type: ControlType.String },
  reverse: { title: "Reverse", type: ControlType.Boolean },
  toggle: { title: "Toggle", type: ControlType.Boolean },
  indeterminate: { title: "Indeterminate", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
