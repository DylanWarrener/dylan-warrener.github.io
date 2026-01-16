<template>
  <div class="site-bg-wrapper">
    <div class="site-bg-top-wrapper">
      <svg
        class="site-bg-svg"
        width="1920"
        height="4000"
        viewBox="0 0 1440 2999.999989"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"></svg>
    </div>

    <v-app
      :theme="theme"
      style="
        position: relative;
        z-index: 1;
        background: transparent !important;
        border: 4px solid blue;
      ">
      <AppHeader />
      <AppNavigation v-if="isMobile" />
      <v-main>
        <v-container fluid class="d-flex flex-column ga-4" style="border: 4px solid green">
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
          <NuxtPage />
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
const isMobile = computed(() => display.smAndDown.value)
</script>

<style scoped>
.site-bg-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100vw;
}
.site-bg-top-wrapper {
  background-color: green;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
}
</style>
