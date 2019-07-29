import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Keyboard";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Keyboard(props) {
  return <System.Keyboard {...props} style={style} />;
}

Keyboard.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Keyboard, {
  target: merge(controls.target, {})
});
