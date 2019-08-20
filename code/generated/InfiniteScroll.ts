// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  replace: ControlDescription;
  scrollableAncestor: ControlDescription;
  show: ControlDescription;
  step: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  replace: { title: "Replace", defaultValue: false, type: ControlType.Boolean },
  scrollableAncestor: {
    title: "ScrollableAncestor",
    defaultValue: "",
    type: ControlType.String
  },
  show: { title: "Show", type: ControlType.Number },
  step: { title: "Step", type: ControlType.Number }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
