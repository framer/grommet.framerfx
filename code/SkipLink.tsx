import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/SkipLink";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function SkipLink(props) {
  return <System.SkipLink {...props} style={style} />;
}

SkipLink.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SkipLink, {
  id: merge(controls.id, {}),
  label: merge(controls.label, {})
});
