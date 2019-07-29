// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  animate: ControlDescription;
  animation: ControlDescription;
  full: ControlDescription;
  margin: ControlDescription;
  modal: ControlDescription;
  plain: ControlDescription;
  position: ControlDescription;
  responsive: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  animate: { title: "Animate", type: ControlType.Boolean },
  animation: {
    title: "Animation",
    options: ["none", "fadeIn", "slide"],
    optionTitles: ["None", "FadeIn", "Slide"],
    type: ControlType.Enum
  },
  full: {
    title: "Full",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  margin: { title: "Margin", type: ControlType.String },
  modal: { title: "Modal", type: ControlType.Boolean },
  plain: { title: "Plain", type: ControlType.Boolean },
  position: {
    title: "Position",
    options: [
      "center",
      "hidden",
      "top",
      "left",
      "bottom",
      "right",
      "bottom-left",
      "bottom-right",
      "top-left",
      "top-right"
    ],
    optionTitles: [
      "Center",
      "Hidden",
      "Top",
      "Left",
      "Bottom",
      "Right",
      "Bottom-left",
      "Bottom-right",
      "Top-left",
      "Top-right"
    ],
    type: ControlType.Enum
  },
  responsive: { title: "Responsive", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
