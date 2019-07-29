// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  checked: ControlDescription;
  disabled: ControlDescription;
  label: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  checked: { title: "Checked", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  label: { title: "Label", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
