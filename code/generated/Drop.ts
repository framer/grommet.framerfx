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
  elevation: { title: "Elevation", defaultValue: "", type: ControlType.String },
  overflow: { title: "Overflow", defaultValue: "", type: ControlType.String },
  responsive: {
    title: "Responsive",
    defaultValue: false,
    type: ControlType.Boolean
  },
  restrictFocus: {
    title: "RestrictFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  stretch: { title: "Stretch", defaultValue: false, type: ControlType.Boolean },
  plain: { title: "Plain", defaultValue: false, type: ControlType.Boolean },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
