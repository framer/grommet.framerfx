// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  target: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  target: {
    title: "Target",
    options: ["component", "document"],
    optionTitles: ["Component", "Document"],
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
