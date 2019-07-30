import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/FormField";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function FormField(props) {
  return <System.FormField {...props} style={style} />;
}

FormField.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormField, {
  error: merge(controls.error, {}),
  help: merge(controls.help, {}),
  htmlFor: merge(controls.htmlFor, {}),
  label: merge(controls.label, {}),
  pad: merge(controls.pad, {}),
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
