import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/RadioButtonGroup";
import { withHOC } from "./withHOC";
import { sizeControl } from "./colors";

const InnerRadioButtonGroup: React.SFC<any> = ({
  ["children"]: _,
  ...props
}) => {
  return <System.RadioButtonGroup {...props} />;
};

export const RadioButtonGroup = withHOC(InnerRadioButtonGroup);

RadioButtonGroup.defaultProps = {
  width: 245,
  height: 180,
  fill: true
};

addPropertyControls(RadioButtonGroup, {
  value: merge(controls.value, {}),
  align: merge(controls.align, { defaultValue: "start" }),
  alignContent: merge(controls.alignContent, {}),
  animation: merge(controls.animation, {}),
  background: merge(controls.background, {}),
  basis: merge(controls.basis, {}),
  border: merge(controls.border, {}),
  direction: merge(controls.direction, { defaultValue: "column" }),
  elevation: sizeControl,
  gap: sizeControl,
  pad: sizeControl,
  round: sizeControl,
  options: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["Apples", "Oranges", "Potatoes"]
  }
});
