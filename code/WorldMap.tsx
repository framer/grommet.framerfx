import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/WorldMap";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function WorldMap(props) {
  return <System.WorldMap {...props} style={style} />;
}

WorldMap.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(WorldMap, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  hoverColor: merge(controls.hoverColor, {})
});
