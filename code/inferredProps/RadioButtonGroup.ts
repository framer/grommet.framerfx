// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  name: ControlDescription;
  value: ControlDescription;
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  align: ControlDescription;
  alignContent: ControlDescription;
  animation: ControlDescription;
  background: ControlDescription;
  basis: ControlDescription;
  border: ControlDescription;
  direction: ControlDescription;
  elevation: ControlDescription;
  flex: ControlDescription;
  fill: ControlDescription;
  gap: ControlDescription;
  height: ControlDescription;
  justify: ControlDescription;
  overflow: ControlDescription;
  pad: ControlDescription;
  responsive: ControlDescription;
  round: ControlDescription;
  tag: ControlDescription;
  as: ControlDescription;
  width: ControlDescription;
  wrap: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  name: { title: "Name", type: ControlType.String },
  value: { title: "Value", type: ControlType.String },
  a11yTitle: { title: "A11yTitle", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  align: {
    title: "Align",
    options: ["start", "center", "end", "stretch", "baseline"],
    optionTitles: ["Start", "Center", "End", "Stretch", "Baseline"],
    type: ControlType.Enum
  },
  alignContent: {
    title: "AlignContent",
    options: ["start", "center", "end", "stretch", "between", "around"],
    optionTitles: ["Start", "Center", "End", "Stretch", "Between", "Around"],
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
    type: ControlType.Enum
  },
  background: { title: "Background", type: ControlType.String },
  basis: { title: "Basis", type: ControlType.String },
  border: {
    title: "Border",
    options: [
      "horizontal",
      "vertical",
      "all",
      "top",
      "left",
      "bottom",
      "right"
    ],
    optionTitles: [
      "Horizontal",
      "Vertical",
      "All",
      "Top",
      "Left",
      "Bottom",
      "Right"
    ],
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
    type: ControlType.Enum
  },
  elevation: { title: "Elevation", type: ControlType.String },
  flex: {
    title: "Flex",
    options: ["grow", "shrink"],
    optionTitles: ["Grow", "Shrink"],
    type: ControlType.Enum
  },
  fill: {
    title: "Fill",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  gap: { title: "Gap", type: ControlType.String },
  height: { title: "Height", type: ControlType.String },
  justify: {
    title: "Justify",
    options: ["start", "center", "end", "between", "around", "evenly"],
    optionTitles: ["Start", "Center", "End", "Between", "Around", "Evenly"],
    type: ControlType.Enum
  },
  overflow: { title: "Overflow", type: ControlType.String },
  pad: { title: "Pad", type: ControlType.String },
  responsive: { title: "Responsive", type: ControlType.Boolean },
  round: { title: "Round", type: ControlType.String },
  tag: { title: "Tag", type: ControlType.String },
  as: { title: "As", type: ControlType.String },
  width: { title: "Width", type: ControlType.String },
  wrap: {
    title: "Wrap",
    options: ["reverse"],
    optionTitles: ["Reverse"],
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
