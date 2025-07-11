<template>
  <v-app :theme="theme" style="border: 4px solid black">
    <AppHeader />

    <v-main class="d-flex flex-column" style="border: 4px solid black">
      <v-container fluid class="pa-0" style="border: 4px solid green">
        <v-row dense style="border: 4px solid red">
          <v-col class="pa-0" style="border: 4px solid blue">
            <NuxtPage />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue"

const theme = ref("light")

//theme.value = theme.value === "light" ? "dark" : "light"
</script>
