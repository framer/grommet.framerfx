import { addPropertyControls, ControlType } from "framer";
import * as System from "grommet";
import * as React from "react";
import { colorControl, sizeControl } from "./utils/customControls";
import { withHOC } from "./withHOC";

const InnerText = ({ text, ...props }) => {
  return <System.Text {...props}>{text}</System.Text>;
};

export const Text = withHOC(InnerText);

Text.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Text, {
  color: colorControl,
  size: sizeControl,
  text: { type: ControlType.String, defaultValue: "Text" },
  textAlign: {
    title: "TextAlign",
    options: ["start", "center", "end"],
    optionTitles: ["Start", "Center", "End"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  truncate: {
    title: "Truncate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  weight: {
    title: "Weight",
    options: ["normal", "bold"],
    optionTitles: ["Normal", "Bold"],
    defaultValue: "normal",
    type: ControlType.Enum
  },
  wordBreak: {
    title: "WordBreak",
    options: ["normal", "break-all", "keep-all", "break-word"],
    optionTitles: ["Normal", "Break-all", "Keep-all", "Break-word"],
    defaultValue: "normal",
    type: ControlType.Enum
  }
});
