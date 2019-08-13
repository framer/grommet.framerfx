import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Chart";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

// Expose in v2
function Chart(props) {
  return <System.Chart {...props} style={style} />;
}

Chart.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Chart, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  color: merge(controls.color, {}),
  overflow: merge(controls.overflow, {}),
  round: merge(controls.round, {}),
  size: merge(controls.size, {}),
  thickness: merge(controls.thickness, {}),
  type: merge(controls.type, {})
});
