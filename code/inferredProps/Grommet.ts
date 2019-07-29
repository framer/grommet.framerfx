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
  cssVars: { title: "CssVars", type: ControlType.Boolean },
  full: { title: "Full", type: ControlType.Boolean },
  plain: { title: "Plain", type: ControlType.Boolean },
  userAgent: { title: "UserAgent", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
