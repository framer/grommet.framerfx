// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  path: ControlDescription;
  method: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  path: { title: "Path", type: ControlType.String },
  method: {
    title: "Method",
    options: ["push", "replace"],
    optionTitles: ["Push", "Replace"],
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
