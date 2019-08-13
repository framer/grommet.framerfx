import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Paragraph";
import { colorControl, sizeControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Paragraph({ label, ...props }) {
  return (
    <System.Paragraph {...props} style={style}>
      {label}
    </System.Paragraph>
  );
}

Paragraph.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Paragraph, {
  color: colorControl,
  responsive: merge(controls.responsive, {}),
  size: sizeControl,
  textAlign: merge(controls.textAlign, {}),
  label: { type: ControlType.String, defaultValue: "Text" }
});
