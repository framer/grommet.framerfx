import { ControlType } from "framer";

export const colors: string[] = [
  "brand",
  "accent-1",
  "accent-2",
  "accent-3",
  "accent-4",
  "neutral-1",
  "neutral-2",
  "neutral-3",
  "neutral-4",
  "status-critical",
  "status-error",
  "status-warning",
  "status-ok",
  "status-unknown",
  "status-disabled",
  "light-1",
  "light-2",
  "light-3",
  "light-4",
  "light-5",
  "light-6",
  "dark-1",
  "dark-2",
  "dark-3",
  "dark-4",
  "dark-5",
  "dark-6"
];

type EnumControl = {
  type: ControlType.Enum;
  options: string[];
  optionTitles: string[];
  defaultValue?: string;
};

export const colorControl: EnumControl = {
  type: ControlType.Enum,
  options: colors,
  optionTitles: colors.map(color => {
    return color.split("-").join(" ");
  }),
  defaultValue: "brand"
};

export const sizes: string[] = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge"
];

export const sizeControl: EnumControl = {
  type: ControlType.Enum,
  options: sizes,
  optionTitles: sizes,
  defaultValue: "medium"
};
