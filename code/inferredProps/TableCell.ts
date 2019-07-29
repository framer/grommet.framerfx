// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  plain: ControlDescription;
  size: ControlDescription;
  verticalAlign: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  plain: { title: "Plain", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  verticalAlign: {
    title: "VerticalAlign",
    options: ["top", "bottom", "middle"],
    optionTitles: ["Top", "Bottom", "Middle"],
    type: ControlType.Enum
  },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
