<template>
  <v-app :theme="theme" class="light-bg-top-to-bottom" style="border: 4px solid black">
    <v-img
      src="/images/backgrounds/light/top-to-bottom.svg"
      class="bg-img fade-bottom"
      aria-hidden="true"
      alt=""></v-img>
    <v-img
      src="/images/backgrounds/light/bottom-to-top.svg"
      class="bg-img fade-top"
      aria-hidden="true"
      alt=""></v-img>

    <AppHeader />

    <AppNavigation v-if="isMobile" />

    <v-main>
      <v-container fluid class="d-flex flex-column ga-4" style="border: 4px solid black">
        <NuxtPage />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
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
