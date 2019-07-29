// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  dropHeight: ControlDescription;
  focusIndicator: ControlDescription;
  plain: ControlDescription;
  size: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  dropHeight: { title: "DropHeight", type: ControlType.String },
  focusIndicator: { title: "FocusIndicator", type: ControlType.Boolean },
  plain: { title: "Plain", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
