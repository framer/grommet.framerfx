import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Video";
import { withHOC } from "./withHOC";
import { themesControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerVideo = ({ src, ...props }) => {
  return (
    <System.Video {...props} style={style}>
      <source key="video" src={src} type="video/mp4" style={style} />
    </System.Video>
  );
};

export const Video = withHOC(InnerVideo);

Video.defaultProps = {
  width: 342,
  height: 192
};

addPropertyControls(Video, {
  src: {
    type: ControlType.String,
    title: "Source",
    defaultValue: "https://www.krijnrijshouwer.com/file/example.mp4"
  },
  mute: merge(controls.mute, { defaultValue: false }),
  customTheme: themesControl
});
