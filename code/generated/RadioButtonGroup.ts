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
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  a11yTitle: { title: "A11yTitle", defaultValue: "", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", defaultValue: "", type: ControlType.String },
  margin: { title: "Margin", defaultValue: "", type: ControlType.String },
  align: {
    title: "Align",
    options: ["start", "center", "end", "stretch", "baseline"],
    optionTitles: ["Start", "Center", "End", "Stretch", "Baseline"],
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
  background: {
    title: "Background",
    defaultValue: "",
    type: ControlType.String
  },
  basis: { title: "Basis", defaultValue: "", type: ControlType.String },
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
    defaultValue: "horizontal",
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
  elevation: { title: "Elevation", defaultValue: "", type: ControlType.String },
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
  gap: { title: "Gap", defaultValue: "", type: ControlType.String },
  height: { title: "Height", defaultValue: "", type: ControlType.String },
  justify: {
    title: "Justify",
    options: ["start", "center", "end", "between", "around", "evenly"],
    optionTitles: ["Start", "Center", "End", "Between", "Around", "Evenly"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  overflow: { title: "Overflow", defaultValue: "", type: ControlType.String },
  pad: { title: "Pad", defaultValue: "", type: ControlType.String },
  responsive: {
    title: "Responsive",
    defaultValue: false,
    type: ControlType.Boolean
  },
  round: { title: "Round", defaultValue: "", type: ControlType.String },
  tag: {
    title: "Tag",
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
    defaultValue: "symbol",
    type: ControlType.Enum
  },
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
    defaultValue: "symbol",
    type: ControlType.Enum
  },
  width: { title: "Width", defaultValue: "", type: ControlType.String },
  wrap: {
    title: "Wrap",
    options: ["reverse"],
    optionTitles: ["Reverse"],
    defaultValue: "reverse",
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
