import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/CheckBox";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function CheckBox(props) {
  return <System.CheckBox {...props} style={style} />;
}

CheckBox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CheckBox, {
  label: merge(controls.label, {}),
  reverse: merge(controls.reverse, {}),
  toggle: merge(controls.toggle, {}),
  indeterminate: merge(controls.indeterminate, {}),
  placeholder: merge(controls.placeholder, {})
});
