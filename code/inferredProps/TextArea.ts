// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  id: ControlDescription;
  fill: ControlDescription;
  focusIndicator: ControlDescription;
  name: ControlDescription;
  placeholder: ControlDescription;
  plain: ControlDescription;
  value: ControlDescription;
  resize: ControlDescription;
  size: ControlDescription;
  disabled: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  id: { title: "Id", type: ControlType.String },
  fill: { title: "Fill", type: ControlType.Boolean },
  focusIndicator: { title: "FocusIndicator", type: ControlType.Boolean },
  name: { title: "Name", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String },
  plain: { title: "Plain", type: ControlType.Boolean },
  value: { title: "Value", type: ControlType.String },
  resize: {
    title: "Resize",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  size: { title: "Size", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
