<template>
  <v-app theme="light">
    <p>Header here</p>

    <v-main class="d-flex flex-column">
      <v-container fluid class="pa-0">
        <v-row dense>
          <v-col class="pa-0">
            <NuxtPage />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <p>Footer here</p>
  </v-app>
</template>

<script lang="ts">
export default defineComponent({
  name: "home-layout",
})
</script>
