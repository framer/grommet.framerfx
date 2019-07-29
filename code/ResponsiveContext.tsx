import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/ResponsiveContext";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function ResponsiveContext(props) {
  return <System.ResponsiveContext {...props} style={style} />;
}

ResponsiveContext.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ResponsiveContext, {
  length: merge(controls.length, {})
});
