import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

//import theme from './themes'
//import typography from './typography'

const baseTheme = {
  accent: '#40C4FF', // main CTA / key highlight
}

const lightTheme = {
  dark: false,
  colors: {
    // Base UI
    background: '', // page background
    layer: '', // cards / nav / panels
    layerRaised: '', // elevated cards / hover layers

    // Accent system
    attention: baseTheme.accent,
    attentionHover: '',
    attentionActive: '',
    attentionSoft: '',

    // States
    success: '',
    failed: '',

    // Text
    contrast: '',
    muted: '',

    // Structure
    separation: '',
  },
}

const darkTheme = {
  dark: true,
  colors: {
    // Base UI
    background: '', // page background
    layer: '', // cards / nav / panels
    layerRaised: '', // elevated cards / hover layers

    // Accent system
    attention: '#40C4FF',
    attentionHover: '',
    attentionActive: '',
    attentionSoft: '',

    // States
    success: '',
    failed: '',

    // Text
    contrast: '',
    muted: '',

    // Structure
    separation: '',
  },
}

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
})
