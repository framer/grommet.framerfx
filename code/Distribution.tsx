import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Distribution";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Distribution(props) {
  return <System.Distribution {...props} style={style} />;
}

Distribution.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Distribution, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  fill: merge(controls.fill, {}),
  gap: merge(controls.gap, {}),
  placeholder: merge(controls.placeholder, {})
});
