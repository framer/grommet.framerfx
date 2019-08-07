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
  dropHeight: { title: "DropHeight", type: ControlType.String },
  id: { title: "Id", type: ControlType.String },
  focusIndicator: { title: "FocusIndicator", type: ControlType.Boolean },
  name: { title: "Name", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String },
  plain: { title: "Plain", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  value: { title: "Value", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  checked: { title: "Checked", type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
