import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Paragraph";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Paragraph(props) {
  return <System.Paragraph {...props} style={style} />;
}

Paragraph.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Paragraph, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  color: merge(controls.color, {}),
  responsive: merge(controls.responsive, {}),
  size: merge(controls.size, {}),
  textAlign: merge(controls.textAlign, {}),
  placeholder: merge(controls.placeholder, {})
});
