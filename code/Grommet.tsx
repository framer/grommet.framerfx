import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Grommet";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Grommet(props) {
  return <System.Grommet {...props} style={style} />;
}

Grommet.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Grommet, {
  cssVars: merge(controls.cssVars, {}),
  full: merge(controls.full, {}),
  plain: merge(controls.plain, {}),
  userAgent: merge(controls.userAgent, {}),
  placeholder: merge(controls.placeholder, {})
});
