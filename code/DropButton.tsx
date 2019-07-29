import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/DropButton";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function DropButton(props) {
  return <System.DropButton {...props} style={style} />;
}

DropButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DropButton, {
  open: merge(controls.open, {}),
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  active: merge(controls.active, {}),
  color: merge(controls.color, {}),
  disabled: merge(controls.disabled, {}),
  fill: merge(controls.fill, {}),
  focusIndicator: merge(controls.focusIndicator, {}),
  gap: merge(controls.gap, {}),
  hoverIndicator: merge(controls.hoverIndicator, {}),
  href: merge(controls.href, {}),
  target: merge(controls.target, {}),
  label: merge(controls.label, {}),
  plain: merge(controls.plain, {}),
  primary: merge(controls.primary, {}),
  reverse: merge(controls.reverse, {}),
  type: merge(controls.type, {}),
  as: merge(controls.as, {})
});
