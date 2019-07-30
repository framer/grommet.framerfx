import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/TextArea";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function TextArea(props) {
  return <System.TextArea {...props} style={style} />;
}

TextArea.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextArea, {
  fill: merge(controls.fill, {}),
  focusIndicator: merge(controls.focusIndicator, {}),
  placeholder: merge(controls.placeholder, {}),
  plain: merge(controls.plain, {}),
  resize: merge(controls.resize, {}),
  size: merge(controls.size, {}),
  disabled: merge(controls.disabled, {})
});
