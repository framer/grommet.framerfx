// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  fill: ControlDescription;
  focusIndicator: ControlDescription;
  plain: ControlDescription;
  resize: ControlDescription;
  size: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  fill: { title: "Fill", type: ControlType.Boolean },
  focusIndicator: { title: "FocusIndicator", type: ControlType.Boolean },
  plain: { title: "Plain", type: ControlType.Boolean },
  resize: {
    title: "Resize",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  size: { title: "Size", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
