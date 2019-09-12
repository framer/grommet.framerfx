import { addPropertyControls, ControlType } from "framer"
import * as System from "grommet"
import * as React from "react"
import { withHOC } from "./withHOC"
import { sizeControl, colorControl } from "./utils/customControls"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerParagraph: React.SFC = props => {
    return <System.Paragraph {...props} style={style} />
}

export const Paragraph = withHOC(InnerParagraph)

Paragraph.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Paragraph, {
    color: colorControl,
    responsive: {
        title: "Responsive",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    size: sizeControl,
    textAlign: {
        title: "TextAlign",
        options: ["start", "center", "end"],
        optionTitles: ["Start", "Center", "End"],
        defaultValue: "start",
        type: ControlType.Enum,
    },
})
