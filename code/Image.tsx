import * as React from "react";
import * as System from "grommet";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Image";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerImage: React.SFC = ({ ["children"]: _, ...props }) => {
  return <System.Image {...props} style={style} />;
};

export const Image = withHOC(InnerImage);

Image.defaultProps = {
  width: 200,
  height: 200
};

addPropertyControls(Image, {
  alignSelf: merge(controls.alignSelf, {}),
  fit: merge(controls.fit, {}),
  src: {
    type: ControlType.Image,
    defaultValue: "https://placehold.it/200x200"
  },
  fallback: { type: ControlType.Image },
  opacity: { type: ControlType.Enum, options: ["weak", "medium", "strong"] }
});
