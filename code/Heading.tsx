import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Heading";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Heading(props) {
  return <System.Heading {...props} style={style} />;
}

Heading.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Heading, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  as: merge(controls.as, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  color: merge(controls.color, {}),
  level: merge(controls.level, {}),
  responsive: merge(controls.responsive, {}),
  size: merge(controls.size, {}),
  textAlign: merge(controls.textAlign, {}),
  truncate: merge(controls.truncate, {}),
  placeholder: merge(controls.placeholder, {})
});
