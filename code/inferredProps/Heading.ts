// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  as: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  color: ControlDescription;
  level: ControlDescription;
  responsive: ControlDescription;
  size: ControlDescription;
  textAlign: ControlDescription;
  truncate: ControlDescription;
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
  as: { title: "As", type: ControlType.String },
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  color: { title: "Color", type: ControlType.String },
  level: {
    title: "Level",
    options: ["1", "2", "3", "4", "5", "6"],
    optionTitles: ["1", "2", "3", "4", "5", "6"],
    type: ControlType.Enum
  },
  responsive: { title: "Responsive", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  textAlign: {
    title: "TextAlign",
    options: ["start", "center", "end"],
    optionTitles: ["Start", "Center", "End"],
    type: ControlType.Enum
  },
  truncate: { title: "Truncate", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
