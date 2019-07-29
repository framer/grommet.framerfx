// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  color: ControlDescription;
  direction: ControlDescription;
  invert: ControlDescription;
  max: ControlDescription;
  min: ControlDescription;
  opacity: ControlDescription;
  round: ControlDescription;
  size: ControlDescription;
  step: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  color: { title: "Color", type: ControlType.String },
  direction: {
    title: "Direction",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  invert: { title: "Invert", type: ControlType.Boolean },
  max: { title: "Max", type: ControlType.Number },
  min: { title: "Min", type: ControlType.Number },
  opacity: { title: "Opacity", type: ControlType.String },
  round: { title: "Round", type: ControlType.String },
  size: { title: "Size", type: ControlType.String },
  step: { title: "Step", type: ControlType.Number },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
