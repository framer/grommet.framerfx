import { addPropertyControls, ControlType } from "framer"
import * as System from "grommet"
import * as React from "react"
import { colorControl, themesControl } from "./utils/customControls"
import { withHOC } from "./withHOC"

const InnerButton: React.SFC = ({ ["children"]: _, ...props }) => {
    return <System.Button {...props} />
}

export const Button = withHOC(InnerButton)

Button.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Button, {
    active: { title: "Active", defaultValue: false, type: ControlType.Boolean },
    color: colorControl,
    disabled: {
        title: "Disabled",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    fill: {
        title: "Fill",
        options: ["horizontal", "vertical", false, true],
        optionTitles: ["Horizontal", "Vertical", "None", "Both"],
        defaultValue: "true",
        type: ControlType.Enum,
    },
    href: { title: "Href", defaultValue: "", type: ControlType.String },
    label: { title: "Label", defaultValue: "Button", type: ControlType.String },
    plain: { title: "Plain", defaultValue: false, type: ControlType.Boolean },
    primary: { title: "Primary", defaultValue: false, type: ControlType.Boolean },
    customTheme: themesControl,
})
