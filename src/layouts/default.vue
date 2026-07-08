<template>
  <v-app :theme="theme">
    <!-- <AppHeader /> -->
    <!-- <AppNavigation v-if="isMobile" /> -->
    <v-main>
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
