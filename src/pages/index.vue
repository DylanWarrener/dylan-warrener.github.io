<template>
  <v-container
    fluid
    class="pa-0 d-flex flex-column ga-4"
    style="border: 2px solid black">
    <!-- CTA -->
    <v-row dense>
      <v-col class="pa-0">
        <div class="h-screen" style="border: 2px solid green">Hero Section</div>
      </v-col>
    </v-row>

    <!-- Recent Projects -->
    <v-row dense style="border: 2px solid red">
      <v-col style="border: 2px solid blue">
        <v-container style="border: 2px solid black">
          <v-row style="border: 2px solid red">
            <v-col style="border: 2px solid blue">
              Recent Projects Section
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  //layout: "temp-typography",
  //layout: "temp-buttons",
})
</script>
