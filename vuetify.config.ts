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
    /* Background colours from Adobe Colour Pallete - Monochromatic */
    // These should be used for different elevations / intensities of the same base.
    /*
      #183440  ← very dark
      #395B6A
      #698895
      #A6B8BF
      #B2D9EA  ← light
     */

    // Base UI
    background: '#002f40', // page background
    layer: '#395B6A', // cards / nav / panels / sections (slight contrast from background)
    layerRaised: '#698895', // elevated UI / hover layers / overlays
    separation: '#698895', // borders / dividers (can be a slight variation of layerRaised)

    // Text system
    contrast: '#FFFFFF', // primary text / high contrast elements
    soft: '#EAF6FF', // normal readable text on dark UI
    muted: '#A6B8BF', // secondary text / labels / descriptions
    emphasis: '#40C4FF', // links / highlighted words
    subtle: '#B2D9EA', // tertiary / icons

    // Accent system
    attention: '#40C4FF', // cta buttons / links / highlights
    attentionHover: '#4ea0cc',
    attentionActive: '#356e8c',
    attentionSoft: '',

    // States
    success: 'green',
    failed: 'red',
    disabled: '',
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
