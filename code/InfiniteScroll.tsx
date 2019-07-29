import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/InfiniteScroll";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function InfiniteScroll(props) {
  return <System.InfiniteScroll {...props} style={style} />;
}

InfiniteScroll.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(InfiniteScroll, {
  replace: merge(controls.replace, {}),
  scrollableAncestor: merge(controls.scrollableAncestor, {}),
  show: merge(controls.show, {}),
  step: merge(controls.step, {})
});
