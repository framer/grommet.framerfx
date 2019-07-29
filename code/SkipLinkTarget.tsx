import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/SkipLinkTarget";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function SkipLinkTarget(props) {
  return <System.SkipLinkTarget {...props} style={style} />;
}

SkipLinkTarget.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SkipLinkTarget, {
  id: merge(controls.id, {}),
  label: merge(controls.label, {})
});
