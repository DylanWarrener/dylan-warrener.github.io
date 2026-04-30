<template>
  <v-app
    :theme="theme"
    style="border: 2px solid orange"
  >
    <!-- <AppHeader /> -->
    <!-- <AppNavigation v-if="isMobile" /> -->
    <v-main style="border: 2px solid black">
      <NuxtPage />
    </v-main>
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script setup lang="ts">
// const display = useDisplay()
const theme = ref('dark')
// const isMobile = computed(() => display.smAndDown.value)
</script>

<style scoped></style>
