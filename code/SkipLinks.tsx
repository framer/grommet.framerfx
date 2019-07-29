import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/SkipLinks";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function SkipLinks(props) {
  return <System.SkipLinks {...props} style={style} />;
}

SkipLinks.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SkipLinks, {
  children: merge(controls.children, {})
});
