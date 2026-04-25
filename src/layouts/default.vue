<template>
  <v-app :theme="theme" style="border: 4px solid blue">
    <AppHeader />
    <AppNavigation v-if="isMobile" />
    <v-main>
      <v-container fluid class="d-flex flex-column ga-4" style="border: 4px solid green">
        <NuxtPage />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
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
