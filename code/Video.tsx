import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Video";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Video({ src, ...props }) {
  return (
    <System.Video {...props}>
      <source key="video" src={src} type="video/mp4" />
    </System.Video>
  );
}

Video.defaultProps = {
  width: 420,
  height: 380
};

addPropertyControls(Video, {
  src: {
    type: ControlType.String,
    title: "Source",
    defaultValue: "https://www.krijnrijshouwer.com/file/example.mp4"
  },
  alignSelf: merge(controls.alignSelf, {}),
  mute: merge(controls.mute, {})
});
