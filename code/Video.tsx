import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Video";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Video(props) {
  return <System.Video {...props} style={style} />;
}

Video.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Video, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  fit: merge(controls.fit, {}),
  mute: merge(controls.mute, {})
});
