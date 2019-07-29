// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  closeOnChange: ControlDescription;
  disabledKey: ControlDescription;
  dropHeight: ControlDescription;
  focusIndicator: ControlDescription;
  icon: ControlDescription;
  id: ControlDescription;
  labelKey: ControlDescription;
  multiple: ControlDescription;
  name: ControlDescription;
  open: ControlDescription;
  placeholder: ControlDescription;
  plain: ControlDescription;
  replace: ControlDescription;
  searchPlaceholder: ControlDescription;
  selected: ControlDescription;
  size: ControlDescription;
  value: ControlDescription;
  valueLabel: ControlDescription;
  valueKey: ControlDescription;
  emptySearchMessage: ControlDescription;
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
  closeOnChange: { title: "CloseOnChange", type: ControlType.Boolean },
  disabledKey: { title: "DisabledKey", type: ControlType.String },
  dropHeight: { title: "DropHeight", type: ControlType.String },
  focusIndicator: { title: "FocusIndicator", type: ControlType.Boolean },
  icon: { title: "Icon", type: ControlType.String },
  id: { title: "Id", type: ControlType.String },
  labelKey: { title: "LabelKey", type: ControlType.String },
  multiple: { title: "Multiple", type: ControlType.Boolean },
  name: { title: "Name", type: ControlType.String },
  open: { title: "Open", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String },
  plain: { title: "Plain", type: ControlType.Boolean },
  replace: { title: "Replace", type: ControlType.Boolean },
  searchPlaceholder: { title: "SearchPlaceholder", type: ControlType.String },
  selected: { title: "Selected", type: ControlType.Number },
  size: { title: "Size", type: ControlType.String },
  value: { title: "Value", type: ControlType.String },
  valueLabel: { title: "ValueLabel", type: ControlType.String },
  valueKey: { title: "ValueKey", type: ControlType.String },
  emptySearchMessage: { title: "EmptySearchMessage", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
