<template>
  <v-app :theme="theme">
    <AppHeader />

    <!-- <AppNavigation /> -->

    <v-main class="pt-15" style="border: 4px solid black">
      <NuxtPage />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue"
//import { useDisplay } from "vuetify"

//const { mobile } = useDisplay()

const theme = ref("light")
//theme.value = theme.value === "light" ? "dark" : "light"

//const isMobile = computed(() => mobile.value)
</script>
