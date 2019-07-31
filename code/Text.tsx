import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Text";

const style: React.CSSProperties = {
  overflow: "hidden"
};

export function Text({ ["children"]: _, label, ...props }) {
  return (
    <System.Text {...props} style={style}>
      {label}
    </System.Text>
  );
}

Text.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Text, {
  color: merge(controls.color, {}),
  size: {
    type: ControlType.Enum,
    options: ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]
  },
  label: { type: ControlType.String, defaultValue: "Text" },
  truncate: merge(controls.truncate, {}),
  weight: merge(controls.weight, {}),
  wordBreak: merge(controls.wordBreak, {})
});
