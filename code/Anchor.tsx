import * as React from "react";
import * as System from "grommet";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Anchor";
import { colorControl, sizeControl } from "./colors";

export function Anchor(props) {
  return <System.Anchor {...props} />;
}

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
