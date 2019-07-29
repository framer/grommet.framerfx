// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  groupBy: ControlDescription;
  primaryKey: ControlDescription;
  resizeable: ControlDescription;
  size: ControlDescription;
  sortable: ControlDescription;
  step: ControlDescription;
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
  groupBy: { title: "GroupBy", type: ControlType.String },
  primaryKey: { title: "PrimaryKey", type: ControlType.String },
  resizeable: { title: "Resizeable", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  sortable: { title: "Sortable", type: ControlType.Boolean },
  step: { title: "Step", type: ControlType.Number },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
