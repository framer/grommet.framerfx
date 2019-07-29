import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Select";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Select(props) {
  return <System.Select {...props} style={style} />;
}

Select.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Select, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  closeOnChange: merge(controls.closeOnChange, {}),
  disabledKey: merge(controls.disabledKey, {}),
  dropHeight: merge(controls.dropHeight, {}),
  focusIndicator: merge(controls.focusIndicator, {}),
  icon: merge(controls.icon, {}),
  id: merge(controls.id, {}),
  labelKey: merge(controls.labelKey, {}),
  multiple: merge(controls.multiple, {}),
  name: merge(controls.name, {}),
  open: merge(controls.open, {}),
  placeholder: merge(controls.placeholder, {}),
  plain: merge(controls.plain, {}),
  replace: merge(controls.replace, {}),
  searchPlaceholder: merge(controls.searchPlaceholder, {}),
  selected: merge(controls.selected, {}),
  size: merge(controls.size, {}),
  value: merge(controls.value, {}),
  valueLabel: merge(controls.valueLabel, {}),
  valueKey: merge(controls.valueKey, {}),
  emptySearchMessage: merge(controls.emptySearchMessage, {})
});
