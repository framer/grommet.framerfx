// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  cssVars: ControlDescription;
  full: ControlDescription;
  plain: ControlDescription;
  userAgent: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  cssVars: { title: "CssVars", defaultValue: false, type: ControlType.Boolean },
  full: { title: "Full", defaultValue: false, type: ControlType.Boolean },
  plain: { title: "Plain", defaultValue: false, type: ControlType.Boolean },
  userAgent: { title: "UserAgent", defaultValue: "", type: ControlType.String },
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
