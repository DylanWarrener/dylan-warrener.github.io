<template>
  <div
    class="site-bg"
    style="
      border: 2px solid green;
      position: relative;
      min-height: 100vh;
      width: 100vw;
      overflow-x: hidden;
    ">
    <!-- <AppHomeBackground /> -->
    <!-- <v-img
      class="fade-bottom"
      style="
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw !important;
        min-width: 100vw !important;
        max-width: 100vw !important;
        height: auto !important;
        display: block;
        pointer-events: none;
        z-index: 0;
      "
      aria-hidden="true"
      src="/images/backgrounds/light/top-to-bottom.svg"
      alt="firstBgAlt" />
    <v-img
      class="fade-top"
      style="
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100vw !important;
        min-width: 100vw !important;
        max-width: 100vw !important;
        height: auto !important;
        display: block;
        pointer-events: none;
        z-index: 0;
      "
      aria-hidden="true"
      src="/images/backgrounds/light/bottom-to-top.svg"
      alt="secondBgAlt" /> -->

    <!-- <img
      class="bg-svg top"
      aria-hidden="true"
      src="/images/backgrounds/light/wave.svg"
      alt=""
      draggable="false" /> -->

    <v-app
      :theme="theme"
      style="
        position: relative;
        z-index: 1;
        background: transparent !important;
        border: 4px solid black;
      ">
      <AppHeader />
      <AppNavigation v-if="isMobile" />
      <v-main>
        <v-container fluid class="d-flex flex-column ga-4" style="border: 4px solid black">
          <NuxtPage />
        </v-container>
      </v-main>
      <AppFooter />
    </v-app>
  </div>
</template>

<script setup lang="ts">
const display = useDisplay()

const theme = ref('light')
//theme.value = theme.value === "light" ? "dark" : "light"
//const isMobile = computed(() => mobile.value)

const isMobile = computed(() => display.smAndDown.value)

// const backgroundClass = computed(() => {
//   if (theme.value === 'light') {
//     return 'light-bg-top-to-bottom light-bg-bottom-to-top'
//   } else {
//     return 'dark-bg-top-to-bottom dark-bg-bottom-to-top'
//   }
// })
</script>

<style lang="scss" scoped>
.bg-svg {
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh; /* Or whatever looks right for your header/footer */
  min-width: 100vw;
  min-height: 200px; /* Tweak for mobile */
  object-fit: cover; /* The magic! */
  object-position: top; /* For header. Use 'bottom' for footer */
  z-index: 0;
  pointer-events: none;
  user-select: none;
}
.bg-svg.bottom {
  bottom: 0;
  top: unset;
  object-position: bottom;
}
.bg-svg.top {
  top: 0;
  bottom: unset;
  object-position: top;
}
.site-bg {
  /* Take up all available space */
  min-height: 100vh;
  width: 100vw;
  position: relative;
  /* Critical line below: */
  background: url('/images/backgrounds/background.svg') no-repeat center center;
  background-size: 100% auto; /* full width, auto height */
  background-repeat: no-repeat;
  /* If you want both top & bottom from same SVG, just use one line */
  background-size: 100% 100%;
  /* For perfect fit: 100% width, 100% height, but may distort vertically! Try 100% auto for less distortion. */
  /* background-size: 100% auto; */
  z-index: 0;
}
</style>
