import React from "react"
import { cssStandardColors, cssStandardColorsArray, CssStandardColors } from "../lib/cssStandardColors"

const useHouseColorsGradient = (houseColors: string) => {
    // Parse the houseColours
    const [fromHouseColor, toHouseColor] = houseColors.toLowerCase().split(' and ')

    const isValidCssColor = (color: string): boolean => {
        return cssStandardColorsArray.includes(color)
    }

    const isValidHouseColors = isValidCssColor(fromHouseColor) && isValidCssColor(toHouseColor)

    let fromColor = null
    let toColor = null

    if (isValidHouseColors) {
        fromColor = cssStandardColors[fromHouseColor as keyof CssStandardColors]
        toColor = cssStandardColors[toHouseColor as keyof CssStandardColors]
    }

    // If the house colors are not valid css colors returns a default gradient from black to white
    const cssColorVars = { '--fromColor': fromColor ?? '#ffffff', '--toColor': toColor ?? '#000000' } as React.CSSProperties

    return {
        cssColorVars
    }
}

export default useHouseColorsGradient
