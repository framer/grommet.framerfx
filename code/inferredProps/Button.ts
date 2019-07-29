// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  active: ControlDescription;
  color: ControlDescription;
  disabled: ControlDescription;
  fill: ControlDescription;
  focusIndicator: ControlDescription;
  gap: ControlDescription;
  hoverIndicator: ControlDescription;
  href: ControlDescription;
  target: ControlDescription;
  label: ControlDescription;
  plain: ControlDescription;
  primary: ControlDescription;
  reverse: ControlDescription;
  as: ControlDescription;
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
  active: { title: "Active", type: ControlType.Boolean },
  color: { title: "Color", type: ControlType.String },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  fill: {
    title: "Fill",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  },
  focusIndicator: { title: "FocusIndicator", type: ControlType.Boolean },
  gap: { title: "Gap", type: ControlType.String },
  hoverIndicator: { title: "HoverIndicator", type: ControlType.String },
  href: { title: "Href", type: ControlType.String },
  target: {
    title: "Target",
    options: ["_self", "_blank", "_parent", "_top"],
    optionTitles: ["_self", "_blank", "_parent", "_top"],
    type: ControlType.Enum
  },
  label: { title: "Label", type: ControlType.String },
  plain: { title: "Plain", type: ControlType.Boolean },
  primary: { title: "Primary", type: ControlType.Boolean },
  reverse: { title: "Reverse", type: ControlType.Boolean },
  as: {
    title: "As",
    options: [
      "symbol",
      "object",
      "div",
      "small",
      "time",
      "link",
      "menu",
      "dialog",
      "text",
      "a",
      "style",
      "title",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noindex",
      "noscript",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "source",
      "span",
      "strong",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "webview",
      "svg",
      "animate",
      "animateMotion",
      "animateTransform",
      "circle",
      "clipPath",
      "defs",
      "desc",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "switch",
      "textPath",
      "tspan",
      "use",
      "view"
    ],
    optionTitles: [
      "Symbol",
      "Object",
      "Div",
      "Small",
      "Time",
      "Link",
      "Menu",
      "Dialog",
      "Text",
      "A",
      "Style",
      "Title",
      "Abbr",
      "Address",
      "Area",
      "Article",
      "Aside",
      "Audio",
      "B",
      "Base",
      "Bdi",
      "Bdo",
      "Big",
      "Blockquote",
      "Body",
      "Br",
      "Button",
      "Canvas",
      "Caption",
      "Cite",
      "Code",
      "Col",
      "Colgroup",
      "Data",
      "Datalist",
      "Dd",
      "Del",
      "Details",
      "Dfn",
      "Dl",
      "Dt",
      "Em",
      "Embed",
      "Fieldset",
      "Figcaption",
      "Figure",
      "Footer",
      "Form",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "Head",
      "Header",
      "Hgroup",
      "Hr",
      "Html",
      "I",
      "Iframe",
      "Img",
      "Input",
      "Ins",
      "Kbd",
      "Keygen",
      "Label",
      "Legend",
      "Li",
      "Main",
      "Map",
      "Mark",
      "Menuitem",
      "Meta",
      "Meter",
      "Nav",
      "Noindex",
      "Noscript",
      "Ol",
      "Optgroup",
      "Option",
      "Output",
      "P",
      "Param",
      "Picture",
      "Pre",
      "Progress",
      "Q",
      "Rp",
      "Rt",
      "Ruby",
      "S",
      "Samp",
      "Script",
      "Section",
      "Select",
      "Source",
      "Span",
      "Strong",
      "Sub",
      "Summary",
      "Sup",
      "Table",
      "Tbody",
      "Td",
      "Textarea",
      "Tfoot",
      "Th",
      "Thead",
      "Tr",
      "Track",
      "U",
      "Ul",
      "Var",
      "Video",
      "Wbr",
      "Webview",
      "Svg",
      "Animate",
      "AnimateMotion",
      "AnimateTransform",
      "Circle",
      "ClipPath",
      "Defs",
      "Desc",
      "Ellipse",
      "FeBlend",
      "FeColorMatrix",
      "FeComponentTransfer",
      "FeComposite",
      "FeConvolveMatrix",
      "FeDiffuseLighting",
      "FeDisplacementMap",
      "FeDistantLight",
      "FeFlood",
      "FeFuncA",
      "FeFuncB",
      "FeFuncG",
      "FeFuncR",
      "FeGaussianBlur",
      "FeImage",
      "FeMerge",
      "FeMergeNode",
      "FeMorphology",
      "FeOffset",
      "FePointLight",
      "FeSpecularLighting",
      "FeSpotLight",
      "FeTile",
      "FeTurbulence",
      "Filter",
      "ForeignObject",
      "G",
      "Image",
      "Line",
      "LinearGradient",
      "Marker",
      "Mask",
      "Metadata",
      "Mpath",
      "Path",
      "Pattern",
      "Polygon",
      "Polyline",
      "RadialGradient",
      "Rect",
      "Stop",
      "Switch",
      "TextPath",
      "Tspan",
      "Use",
      "View"
    ],
    type: ControlType.Enum
  },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
