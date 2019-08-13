import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Button";
import { colorControl, sizeControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Button({ ["children"]: _, ...props }) {
  return <System.Button {...props} />;
}

Button.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Button, {
  active: merge(controls.active, {}),
  color: colorControl,
  disabled: merge(controls.disabled, {}),
  fill: merge(controls.fill, {
    options: ["horizontal", "vertical", "true"],
    defaultValue: "true"
  }),
  focusIndicator: merge(controls.focusIndicator, {}),
  hoverIndicator: merge(controls.hoverIndicator, {}),
  href: merge(controls.href, {}),
  label: merge(controls.label, { defaultValue: "Button" }),
  plain: merge(controls.plain, {}),
  primary: merge(controls.primary, { defaultValue: true })
});
