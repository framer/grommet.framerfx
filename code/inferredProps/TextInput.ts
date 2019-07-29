// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  dropHeight: ControlDescription;
  focusIndicator: ControlDescription;
  placeholder: ControlDescription;
  plain: ControlDescription;
  size: ControlDescription;
  disabled: ControlDescription;
  checked: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  dropHeight: { title: "DropHeight", type: ControlType.String },
  focusIndicator: { title: "FocusIndicator", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String },
  plain: { title: "Plain", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  checked: { title: "Checked", type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
