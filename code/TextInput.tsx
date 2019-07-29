import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/TextInput";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function TextInput(props) {
  return <System.TextInput {...props} style={style} />;
}

TextInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextInput, {
  dropHeight: merge(controls.dropHeight, {}),
  focusIndicator: merge(controls.focusIndicator, {}),
  plain: merge(controls.plain, {}),
  size: merge(controls.size, {})
});
