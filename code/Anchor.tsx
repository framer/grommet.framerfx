import * as React from "react";
import * as System from "grommet";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Anchor";
import { withHOC } from "./withHOC";
import { colorControl, sizeControl } from "./colors";

const InnerAnchor: React.SFC = props => {
  return <System.Anchor {...props} />;
};

export const Anchor = withHOC(InnerAnchor);

Anchor.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Anchor, {
  color: colorControl,
  label: merge(controls.label, { defaultValue: "Anchor" }),
  size: sizeControl,
  href: { type: ControlType.String, defaultValue: "https://framer.com" }
});
