// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  id: ControlDescription;
  label: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  id: { title: "Id", type: ControlType.String },
  label: { title: "Label", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
