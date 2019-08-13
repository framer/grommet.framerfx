import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Image";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Image({ ["children"]: _, ...props }) {
  return <System.Image {...props} style={style} />;
}

Image.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Image, {
  alignSelf: merge(controls.alignSelf, {}),
  fit: merge(controls.fit, {}),
  src: { type: ControlType.Image },
  fallback: { type: ControlType.Image },
  opacity: { type: ControlType.Enum, options: ["weak", "medium", "strong"] }
});
