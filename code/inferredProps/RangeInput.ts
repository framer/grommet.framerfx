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
  id: { title: "Id", type: ControlType.String },
  min: { title: "Min", type: ControlType.String },
  max: { title: "Max", type: ControlType.String },
  name: { title: "Name", type: ControlType.String },
  step: { title: "Step", type: ControlType.String },
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
