import colors from 'vuetify/util/colors'

const commonTheme = {
  primary: '#3642f7',
  secondary: '#151428',
}

const lightTheme = {
  dark: false,
  colors: {
    ...commonTheme,
    default: colors.shades.black,
    inverted: colors.shades.white,
  },
}

const darkTheme = {
  dark: true,
  colors: {
    ...commonTheme,
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
