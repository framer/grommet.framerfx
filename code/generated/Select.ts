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
  closeOnChange: {
    title: "CloseOnChange",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabledKey: {
    title: "DisabledKey",
    defaultValue: "",
    type: ControlType.String
  },
  dropHeight: {
    title: "DropHeight",
    defaultValue: "",
    type: ControlType.String
  },
  focusIndicator: {
    title: "FocusIndicator",
    defaultValue: false,
    type: ControlType.Boolean
  },
  icon: { title: "Icon", defaultValue: "", type: ControlType.String },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  labelKey: { title: "LabelKey", defaultValue: "", type: ControlType.String },
  multiple: {
    title: "Multiple",
    defaultValue: false,
    type: ControlType.Boolean
  },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  open: { title: "Open", defaultValue: false, type: ControlType.Boolean },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  },
  plain: { title: "Plain", defaultValue: false, type: ControlType.Boolean },
  replace: { title: "Replace", defaultValue: false, type: ControlType.Boolean },
  searchPlaceholder: {
    title: "SearchPlaceholder",
    defaultValue: "",
    type: ControlType.String
  },
  selected: { title: "Selected", type: ControlType.Number },
  size: { title: "Size", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  valueLabel: {
    title: "ValueLabel",
    defaultValue: "",
    type: ControlType.String
  },
  valueKey: { title: "ValueKey", defaultValue: "", type: ControlType.String },
  emptySearchMessage: {
    title: "EmptySearchMessage",
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
