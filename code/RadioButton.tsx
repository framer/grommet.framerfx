import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/RadioButton";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function RadioButton(props) {
  return <System.RadioButton {...props} style={style} />;
}

RadioButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RadioButton, {
  label: merge(controls.label, {}),
  placeholder: merge(controls.placeholder, {})
});
