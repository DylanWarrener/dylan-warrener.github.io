import colors from 'vuetify/util/colors'

const lightTheme = {
  dark: false,
  colors: {
    default: colors.shades.black,
    inverted: colors.shades.white,
  },
}

const darkTheme = {
  dark: false,
  colors: {
    default: colors.shades.white,
    inverted: colors.shades.black,
  },
}

const theme = {
  defaultTheme: 'light',
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
}

export default theme
