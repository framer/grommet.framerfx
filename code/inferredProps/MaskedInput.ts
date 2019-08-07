// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  id: ControlDescription;
  name: ControlDescription;
  size: ControlDescription;
  value: ControlDescription;
  checked: ControlDescription;
  disabled: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  id: { title: "Id", type: ControlType.String },
  name: { title: "Name", type: ControlType.String },
  size: { title: "Size", type: ControlType.Number },
  value: { title: "Value", type: ControlType.String },
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
