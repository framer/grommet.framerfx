import { addPropertyControls, ControlType } from "framer";
import * as System from "grommet";
import * as React from "react";
import { colorControl, sizeControl } from "./utils/customControls";
import { useManagedState } from "./utils/useManagedState";
import { withHOC } from "./withHOC";

const InnerRadioButtonGroup: React.SFC<any> = ({
  ["children"]: _,
  width: _1,
  height: _2,
  onChange,
  value,
  id,
  ...props
}) => {
  const [currentValue, setValue] = useManagedState(value, onChange);
  return (
    <System.RadioButtonGroup
      {...props}
      name={`radio-button-group-${id}`}
      value={currentValue}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const RadioButtonGroup = withHOC(InnerRadioButtonGroup);

RadioButtonGroup.defaultProps = {
  width: 245,
  height: 180,
  fill: true
};

addPropertyControls(RadioButtonGroup, {
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  alignContent: {
    title: "AlignContent",
    options: ["start", "center", "end", "stretch", "between", "around"],
    optionTitles: ["Start", "Center", "End", "Stretch", "Between", "Around"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  animation: {
    title: "Animation",
    options: [
      "fadeIn",
      "fadeOut",
      "jiggle",
      "pulse",
      "slideUp",
      "slideDown",
      "slideLeft",
      "slideRight",
      "zoomIn",
      "zoomOut"
    ],
    optionTitles: [
      "FadeIn",
      "FadeOut",
      "Jiggle",
      "Pulse",
      "SlideUp",
      "SlideDown",
      "SlideLeft",
      "SlideRight",
      "ZoomIn",
      "ZoomOut"
    ],
    defaultValue: "fadeIn",
    type: ControlType.Enum
  },
  background: { ...colorControl, title: "Background", defaultValue: "light-1" },
  border: {
    title: "Border",
    options: [
      "horizontal",
      "vertical",
      "all",
      "top",
      "left",
      "bottom",
      "right",
      undefined
    ],
    optionTitles: [
      "Horizontal",
      "Vertical",
      "All",
      "Top",
      "Left",
      "Bottom",
      "Right",
      "None"
    ],
    defaultValue: undefined,
    type: ControlType.Enum
  },
  direction: {
    title: "Direction",
    options: [
      "row",
      "column",
      "row-responsive",
      "row-reverse",
      "column-reverse"
    ],
    optionTitles: [
      "Row",
      "Column",
      "Row-responsive",
      "Row-reverse",
      "Column-reverse"
    ],
    defaultValue: "row",
    type: ControlType.Enum
  },
  elevation: sizeControl,
  flex: {
    title: "Flex",
    options: ["grow", "shrink"],
    optionTitles: ["Grow", "Shrink"],
    defaultValue: "grow",
    type: ControlType.Enum
  },
  fill: {
    title: "Fill",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    defaultValue: "horizontal",
    type: ControlType.Enum
  },
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
