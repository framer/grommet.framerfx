import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/RangeInput";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function RangeInput(props) {
  return <System.RangeInput {...props} style={style} />;
}

RangeInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RangeInput, {
  placeholder: merge(controls.placeholder, {})
});
