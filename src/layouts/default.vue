<template>
  <v-app :theme="theme">
    <AppHeader />

    <v-main class="pt-13" style="border: 4px solid black">
      <v-container fluid class="pa-0">
        <NuxtPage />
      </v-container>
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
