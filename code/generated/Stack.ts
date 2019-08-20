// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  anchor: ControlDescription;
  fill: ControlDescription;
  guidingChild: ControlDescription;
  interactiveChild: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  a11yTitle: { title: "A11yTitle", defaultValue: "", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", defaultValue: "", type: ControlType.String },
  margin: { title: "Margin", defaultValue: "", type: ControlType.String },
  anchor: {
    title: "Anchor",
    options: [
      "center",
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
      "Top",
      "Left",
      "Bottom",
      "Right",
      "Bottom-left",
      "Bottom-right",
      "Top-left",
      "Top-right"
    ],
    defaultValue: "center",
    type: ControlType.Enum
  },
  fill: { title: "Fill", defaultValue: false, type: ControlType.Boolean },
  guidingChild: {
    title: "GuidingChild",
    options: ["first", "last"],
    optionTitles: ["First", "Last"],
    defaultValue: "first",
    type: ControlType.Enum
  },
  interactiveChild: {
    title: "InteractiveChild",
    options: ["first", "last"],
    optionTitles: ["First", "Last"],
    defaultValue: "first",
    type: ControlType.Enum
  },
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
