<template>
  <v-container class="py-10">
    <h1 class="text-h4 font-weight-bold mb-6">About Me</h1>
    <v-card class="mb-4">
      <v-card-text>
        <p class="mb-4">
          I grew up in the north of England where my fascination with computers
          began early. Exploring how software works soon turned into a love for
          coding.
        </p>
        <p class="mb-4">
          Today I work as a full-stack developer, crafting web applications with
          modern tools like Nuxt and Vue. Building clean and accessible
          interfaces is what drives me every day.
        </p>
        <p>
          Looking forward, I aim to keep expanding my skills and contribute to
          open source projects that inspire others to code.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
definePageMeta({
  alias: ["/about"],
})
</script>
