import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TextArea";
import { withHOC } from "./withHOC";
import { sizeControl, themesControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTextArea: React.SFC = props => {
  return <System.TextArea {...props} style={style} />;
};

export const TextArea = withHOC(InnerTextArea);

TextArea.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextArea, {
  placeholder: merge(controls.placeholder, {
    defaultValue: "TextArea's are fun!"
  }),
  plain: merge(controls.plain, {}),
  value: merge(controls.value, {}),
  size: sizeControl,
  disabled: merge(controls.disabled, {}),
  customTheme: themesControl
});
