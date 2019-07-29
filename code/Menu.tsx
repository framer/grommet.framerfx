import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Menu";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Menu(props) {
  return <System.Menu {...props} style={style} />;
}

Menu.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Menu, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  dropBackground: merge(controls.dropBackground, {}),
  justifyContent: merge(controls.justifyContent, {}),
  icon: merge(controls.icon, {}),
  label: merge(controls.label, {}),
  open: merge(controls.open, {}),
  size: merge(controls.size, {}),
  placeholder: merge(controls.placeholder, {})
});
