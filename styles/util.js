export const getOpacedColor = (color, opacity) => {
    const hexaOpacity = Math.round(opacity *  255).toString(16)
    return `${color}${hexaOpacity}`
}