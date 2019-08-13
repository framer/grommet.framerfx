import * as React from "react";
import * as System from "grommet";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Heading";
import { colorControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Heading({ text, ...props }) {
  return (
    <System.Heading {...props} style={style}>
      {text}
    </System.Heading>
  );
}

Heading.defaultProps = {
  width: 202,
  height: 120
};

addPropertyControls(Heading, {
  color: colorControl,
  level: merge(controls.level, {}),
  responsive: merge(controls.responsive, {}),
  textAlign: merge(controls.textAlign, {}),
  truncate: merge(controls.truncate, { defaultValue: false }),
  text: { type: ControlType.String, defaultValue: "Heading!" }
});
