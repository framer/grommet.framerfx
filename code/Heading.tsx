import { addPropertyControls, ControlType } from "framer"
import * as System from "grommet"
import * as React from "react"
import { colorControl, themesControl } from "./utils/customControls"
import { withHOC } from "./withHOC"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerHeading: React.SFC<any> = ({ text, ...props }) => {
    return (
        <System.Heading {...props} style={style}>
            {text}
        </System.Heading>
    )
}

export const Heading = withHOC(InnerHeading)

Heading.defaultProps = {
    width: 202,
    height: 120,
}

addPropertyControls(Heading, {
    color: colorControl,
    level: {
        title: "Level",
        options: ["1", "2", "3", "4", "5", "6"],
        optionTitles: ["1", "2", "3", "4", "5", "6"],
        defaultValue: "1",
        type: ControlType.Enum,
    },
    responsive: {
        title: "Responsive",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    textAlign: {
        title: "TextAlign",
        options: ["start", "center", "end"],
        optionTitles: ["Start", "Center", "End"],
        defaultValue: "start",
        type: ControlType.Enum,
    },
    truncate: {
        title: "Truncate",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    text: { type: ControlType.String, defaultValue: "Heading!" },
    customTheme: themesControl,
})
