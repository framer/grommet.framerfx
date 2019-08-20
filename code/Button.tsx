import * as React from "react";
import * as System from "grommet";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Button";
import { withHOC } from "./withHOC";
import { colorControl, themesControl } from "./colors";

const InnerButton: React.SFC = ({ ["children"]: _, ...props }) => {
  return <System.Button {...props} />;
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Button, {
  active: merge(controls.active, { defaultValue: false }),
  color: colorControl,
  disabled: merge(controls.disabled, { defaultValue: false }),
  fill: merge(controls.fill, {
    options: ["horizontal", "vertical", "true"],
    defaultValue: "true"
  }),
  focusIndicator: merge(controls.focusIndicator, { defaultValue: false }),
  hoverIndicator: merge(controls.hoverIndicator, {}),
  href: merge(controls.href, {}),
  label: merge(controls.label, { defaultValue: "Button" }),
  plain: merge(controls.plain, { defaultValue: false }),
  primary: merge(controls.primary, { defaultValue: true }),
  customTheme: themesControl
});
