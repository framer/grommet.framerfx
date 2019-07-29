import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Image";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Image(props) {
  return <System.Image {...props} style={style} />;
}

Image.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Image, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  fit: merge(controls.fit, {}),
  fallback: merge(controls.fallback, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  opacity: merge(controls.opacity, {}),
  placeholder: merge(controls.placeholder, {})
});
