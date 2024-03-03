type CssStandardColors = {
    black: string
    silver: string
    gray: string
    white: string
    maroon: string
    red: string
    purple: string
    fuchsia: string
    green: string
    lime: string
    olive: string
    yellow: string
    navy: string
    blue: string
    teal: string
    aqua: string
}

const cssStandardColors: CssStandardColors = {
    black: '#000000',
    silver: '#c0c0c0',
    gray: '#808080',
    white: '#ffffff',
    maroon: '#800000',
    red: '#ff0000',
    purple: '#800080',
    fuchsia: '#ff00ff',
    green: '#008000',
    lime: '#00ff00',
    olive: '#808000',
    yellow: '#ffff00',
    navy: '#000080',
    blue: '#0000ff',
    teal: '#008080',
    aqua: '#00ffff'
}

const cssStandardColorsArray = Object.keys(cssStandardColors)

export type { CssStandardColors }
export { cssStandardColors, cssStandardColorsArray }
