// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  align: ControlDescription;
  alignContent: ControlDescription;
  columns: ControlDescription;
  fill: ControlDescription;
  gap: ControlDescription;
  justify: ControlDescription;
  justifyContent: ControlDescription;
  rows: ControlDescription;
  tag: ControlDescription;
  as: ControlDescription;
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
  align: {
    title: "Align",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  alignContent: {
    title: "AlignContent",
    options: ["start", "center", "end", "stretch", "between", "around"],
    optionTitles: ["Start", "Center", "End", "Stretch", "Between", "Around"],
    type: ControlType.Enum
  },
  columns: { title: "Columns", type: ControlType.String },
  fill: {
    title: "Fill",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  gap: { title: "Gap", type: ControlType.String },
  justify: {
    title: "Justify",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  justifyContent: {
    title: "JustifyContent",
    options: ["start", "center", "end", "stretch", "between", "around"],
    optionTitles: ["Start", "Center", "End", "Stretch", "Between", "Around"],
    type: ControlType.Enum
  },
  rows: { title: "Rows", type: ControlType.String },
  tag: { title: "Tag", type: ControlType.String },
  as: { title: "As", type: ControlType.String },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
