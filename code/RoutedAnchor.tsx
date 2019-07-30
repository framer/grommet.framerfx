import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/RoutedAnchor";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function RoutedAnchor(props) {
  return <System.RoutedAnchor {...props} style={style} />;
}

RoutedAnchor.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RoutedAnchor, {
  path: merge(controls.path, {}),
  method: merge(controls.method, {}),
  color: merge(controls.color, {}),
  label: merge(controls.label, {}),
  reverse: merge(controls.reverse, {}),
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  size: merge(controls.size, {}),
  as: merge(controls.as, {})
});
