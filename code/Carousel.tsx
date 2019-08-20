import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Carousel";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCarousel: React.SFC = props => {
  return <System.Carousel {...props} style={style} />;
};

export const Carousel = withHOC(InnerCarousel);

Carousel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Carousel, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  fill: merge(controls.fill, {}),
  play: merge(controls.play, {}),
  placeholder: merge(controls.placeholder, {})
});
