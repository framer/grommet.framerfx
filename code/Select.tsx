import { addPropertyControls, ControlType } from "framer";
import * as System from "grommet";
import * as React from "react";
import { withHOC } from "./withHOC";

const InnerSelect: React.SFC = ({ ["children"]: _, ...props }) => {
  return <System.Select options={[]} {...props} />;
};

export const Select = withHOC(InnerSelect);

Select.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Select, {
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
});
