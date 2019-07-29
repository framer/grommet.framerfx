import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Grid";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Grid(props) {
  return <System.Grid {...props} style={style} />;
}

Grid.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Grid, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  align: merge(controls.align, {}),
  alignContent: merge(controls.alignContent, {}),
  columns: merge(controls.columns, {}),
  fill: merge(controls.fill, {}),
  gap: merge(controls.gap, {}),
  justify: merge(controls.justify, {}),
  justifyContent: merge(controls.justifyContent, {}),
  rows: merge(controls.rows, {}),
  tag: merge(controls.tag, {}),
  as: merge(controls.as, {}),
  placeholder: merge(controls.placeholder, {})
});
