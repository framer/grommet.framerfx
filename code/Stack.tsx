import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Stack";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Stack(props) {
  return <System.Stack {...props} style={style} />;
}

Stack.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Stack, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  anchor: merge(controls.anchor, {}),
  fill: merge(controls.fill, {}),
  guidingChild: merge(controls.guidingChild, {}),
  interactiveChild: merge(controls.interactiveChild, {}),
  placeholder: merge(controls.placeholder, {})
});
