import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/TableHeader";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function TableHeader(props) {
  return <System.TableHeader {...props} style={style} />;
}

TableHeader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableHeader, {
  placeholder: merge(controls.placeholder, {})
});
