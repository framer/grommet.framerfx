import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Tab";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Tab(props) {
  return <System.Tab {...props} style={style} />;
}

Tab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tab, {
  plain: merge(controls.plain, {}),
  placeholder: merge(controls.placeholder, {})
});
