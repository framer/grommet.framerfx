import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Layer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Layer(props) {
  return <System.Layer {...props} style={style} />;
}

Layer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Layer, {
  animate: merge(controls.animate, {}),
  animation: merge(controls.animation, {}),
  full: merge(controls.full, {}),
  margin: merge(controls.margin, {}),
  modal: merge(controls.modal, {}),
  plain: merge(controls.plain, {}),
  position: merge(controls.position, {}),
  responsive: merge(controls.responsive, {}),
  placeholder: merge(controls.placeholder, {})
});
