import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TextInput";
import { withHOC } from "./withHOC";
import { sizeControl, themesControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTextInput: React.SFC = ({ ["children"]: _, ...props }) => {
  return <System.TextInput {...props} style={style} />;
};

export const TextInput = withHOC(InnerTextInput);

TextInput.defaultProps = {
  width: 200,
  height: 50
};

addPropertyControls(TextInput, {
  placeholder: merge(controls.placeholder, {
    defaultValue: "Text Input Rules!"
  }),
  plain: merge(controls.plain, {}),
  size: sizeControl,
  value: merge(controls.value, { defaultValue: "" }),
  disabled: merge(controls.disabled, {}),
  customTheme: themesControl
});
