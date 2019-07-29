import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/TableFooter";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function TableFooter(props) {
  return <System.TableFooter {...props} style={style} />;
}

TableFooter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableFooter, {
  placeholder: merge(controls.placeholder, {})
});
