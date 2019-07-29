import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Tabs";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Tabs(props) {
  return <System.Tabs {...props} style={style} />;
}

Tabs.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tabs, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  activeIndex: merge(controls.activeIndex, {}),
  flex: merge(controls.flex, {}),
  justify: merge(controls.justify, {}),
  placeholder: merge(controls.placeholder, {})
});
