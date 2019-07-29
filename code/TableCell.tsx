import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/TableCell";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function TableCell(props) {
  return <System.TableCell {...props} style={style} />;
}

TableCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableCell, {
  plain: merge(controls.plain, {}),
  size: merge(controls.size, {}),
  verticalAlign: merge(controls.verticalAlign, {}),
  placeholder: merge(controls.placeholder, {})
});
