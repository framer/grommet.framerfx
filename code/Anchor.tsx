import { addPropertyControls, ControlType } from "framer"
import * as System from "grommet"
import * as React from "react"
import { colorControl, sizeControl } from "./utils/customControls"
import { withHOC } from "./withHOC"

const InnerAnchor: React.SFC = props => {
    return <System.Anchor {...props} />
}

export const Anchor = withHOC(InnerAnchor)

Anchor.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Anchor, {
    color: colorControl,
    label: { title: "Label", defaultValue: "Anchor", type: ControlType.String },
    size: sizeControl,
    href: { type: ControlType.String, defaultValue: "https://framer.com" },
})
