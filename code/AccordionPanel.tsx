import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/AccordionPanel";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function AccordionPanel(props) {
  return <System.AccordionPanel {...props} style={style} />;
}

AccordionPanel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AccordionPanel, {
  label: merge(controls.label, {}),
  header: merge(controls.header, {}),
  placeholder: merge(controls.placeholder, {})
});
