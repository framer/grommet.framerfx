import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/FormField";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFormField: React.SFC = props => {
  return <System.FormField {...props} style={style} />;
};

export const FormField = withHOC(InnerFormField);

FormField.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormField, {
  error: merge(controls.error, {}),
  help: merge(controls.help, {}),
  htmlFor: merge(controls.htmlFor, {}),
  label: merge(controls.label, {}),
  name: merge(controls.name, {}),
  pad: merge(controls.pad, {}),
  required: merge(controls.required, {}),
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
