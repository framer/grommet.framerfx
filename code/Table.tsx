import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Table";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Table(props) {
  return <System.Table {...props} style={style} />;
}

Table.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Table, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  caption: merge(controls.caption, {}),
  placeholder: merge(controls.placeholder, {})
});
