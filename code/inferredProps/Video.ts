// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  autoPlay: ControlDescription;
  controls: ControlDescription;
  fit: ControlDescription;
  loop: ControlDescription;
  mute: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  a11yTitle: { title: "A11yTitle", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  autoPlay: { title: "AutoPlay", type: ControlType.Boolean },
  controls: { title: "Controls", type: ControlType.Boolean },
  fit: {
    title: "Fit",
    options: ["cover", "contain"],
    optionTitles: ["Cover", "Contain"],
    type: ControlType.Enum
  },
  loop: { title: "Loop", type: ControlType.Boolean },
  mute: { title: "Mute", type: ControlType.Boolean },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
