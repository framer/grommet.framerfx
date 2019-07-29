import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/DataTable";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function DataTable(props) {
  return <System.DataTable {...props} style={style} />;
}

DataTable.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DataTable, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  groupBy: merge(controls.groupBy, {}),
  primaryKey: merge(controls.primaryKey, {}),
  resizeable: merge(controls.resizeable, {}),
  size: merge(controls.size, {}),
  sortable: merge(controls.sortable, {}),
  step: merge(controls.step, {}),
  placeholder: merge(controls.placeholder, {})
});
