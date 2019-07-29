import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Drop";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Drop(props) {
  return <System.Drop {...props} style={style} />;
}

Drop.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Drop, {
  elevation: merge(controls.elevation, {}),
  overflow: merge(controls.overflow, {}),
  responsive: merge(controls.responsive, {}),
  restrictFocus: merge(controls.restrictFocus, {}),
  stretch: merge(controls.stretch, {}),
  plain: merge(controls.plain, {}),
  placeholder: merge(controls.placeholder, {})
});
