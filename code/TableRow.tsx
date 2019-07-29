import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/TableRow";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function TableRow(props) {
  return <System.TableRow {...props} style={style} />;
}

TableRow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableRow, {
  placeholder: merge(controls.placeholder, {})
});
