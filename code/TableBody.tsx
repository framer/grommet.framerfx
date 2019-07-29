import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/TableBody";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function TableBody(props) {
  return <System.TableBody {...props} style={style} />;
}

TableBody.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableBody, {
  placeholder: merge(controls.placeholder, {})
});
