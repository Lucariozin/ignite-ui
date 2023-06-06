import { createStitches, defaultThemeMap } from '@stitches/react'

import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  spaces,
} from '@ignite-ui-lucariozin/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space: spaces,
  },
})
