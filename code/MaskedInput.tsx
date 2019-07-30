import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/MaskedInput";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function MaskedInput(props) {
  return <System.MaskedInput {...props} style={style} />;
}

MaskedInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MaskedInput, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
