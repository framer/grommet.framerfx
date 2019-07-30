import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Text";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Text(props) {
  return <System.Text {...props} style={style} />;
}

Text.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Text, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  color: merge(controls.color, {}),
  size: merge(controls.size, {}),
  tag: merge(controls.tag, {}),
  as: merge(controls.as, {}),
  textAlign: merge(controls.textAlign, {}),
  truncate: merge(controls.truncate, {}),
  weight: merge(controls.weight, {}),
  wordBreak: merge(controls.wordBreak, {}),
  placeholder: merge(controls.placeholder, {})
});
