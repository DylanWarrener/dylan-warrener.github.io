<template>
  <v-app :theme="theme">
    <AppHeader />

    <AppNavigation v-if="isMobile" />

    <v-main class="pt-15" style="border: 4px solid black">
      <NuxtPage />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
const display = useDisplay()

const theme = ref("light")
//theme.value = theme.value === "light" ? "dark" : "light"
//const isMobile = computed(() => mobile.value)

const isMobile = computed(() => display.smAndDown.value)
</script>
