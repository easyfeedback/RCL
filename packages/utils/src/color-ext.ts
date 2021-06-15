import Color from 'color'

/**
 * @param {Color} Color Original color object
 * @param {number} ratio Value of brightness to apply
 * @returns {Color} New color
 */
export const lightenAbs = (Color: Color, ratio: number): Color => {
  const lightness = Color.lightness()
  return Color.lightness(lightness + (100 - lightness) * ratio)
}

/**
 * @param {Color} Color Original color object
 * @param {number} ratio Value of dankness to apply
 * @returns {Color} New color
 */
export const darkenAbs = (Color: Color, ratio: number): Color => {
  const lightness = Color.lightness()
  return Color.lightness(lightness - lightness * ratio)
}
