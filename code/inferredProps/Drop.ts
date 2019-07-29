// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  elevation: ControlDescription;
  overflow: ControlDescription;
  responsive: ControlDescription;
  restrictFocus: ControlDescription;
  stretch: ControlDescription;
  plain: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  elevation: { title: "Elevation", type: ControlType.String },
  overflow: { title: "Overflow", type: ControlType.String },
  responsive: { title: "Responsive", type: ControlType.Boolean },
  restrictFocus: { title: "RestrictFocus", type: ControlType.Boolean },
  stretch: { title: "Stretch", type: ControlType.Boolean },
  plain: { title: "Plain", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
