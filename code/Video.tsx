import { addPropertyControls, ControlType } from "framer";
import * as System from "grommet";
import * as React from "react";
import { themesControl } from "./utils/customControls";
import { withHOC } from "./withHOC";

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
  mute: { type: ControlType.Boolean, defaultValue: false },
  customTheme: themesControl
});
