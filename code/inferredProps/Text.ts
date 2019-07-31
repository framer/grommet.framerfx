// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  color: ControlDescription;
  size: ControlDescription;
  tag: ControlDescription;
  as: ControlDescription;
  textAlign: ControlDescription;
  truncate: ControlDescription;
  weight: ControlDescription;
  wordBreak: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  a11yTitle: { title: "A11yTitle", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  color: { title: "Color", type: ControlType.String },
  size: { title: "Size", type: ControlType.String },
  tag: { title: "Tag", type: ControlType.String },
  as: { title: "As", type: ControlType.String },
  textAlign: {
    title: "TextAlign",
    options: ["start", "center", "end"],
    optionTitles: ["Start", "Center", "End"],
    type: ControlType.Enum
  },
  truncate: { title: "Truncate", type: ControlType.Boolean },
  weight: {
    title: "Weight",
    options: ["normal", "bold"],
    optionTitles: ["Normal", "Bold"],
    type: ControlType.Enum
  },
  wordBreak: {
    title: "WordBreak",
    options: ["normal", "break-all", "keep-all", "break-word"],
    optionTitles: ["Normal", "Break-all", "Keep-all", "Break-word"],
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
