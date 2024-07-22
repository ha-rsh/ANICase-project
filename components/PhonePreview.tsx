"use client"

import { CaseColor } from "@prisma/client"
import { useRef, useState } from "react"
import { AspectRatio } from "./ui/aspect-ratio"

const PhonePreview = ({croppedImageUrl, color}: {
    croppedImageUrl: string
    color: CaseColor
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [renderedWidth, setRenderedWidth] = useState({
        height: 0,
        width:0,
    })

    return (
        <AspectRatio ref={ref} ratio={3000 / 2001} className="relative" >
            <div className="absolute z-20 scale-[]"></div>
        </AspectRatio>
    )
}

export default PhonePreview