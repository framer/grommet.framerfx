import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Accordion";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Accordion(props) {
  return <System.Accordion {...props} style={style} />;
}

Accordion.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Accordion, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  activeIndex: merge(controls.activeIndex, {}),
  animate: merge(controls.animate, {}),
  multiple: merge(controls.multiple, {}),
  placeholder: merge(controls.placeholder, {})
});
