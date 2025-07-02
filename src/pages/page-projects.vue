<template>
  <v-container class="py-10">
    <h1 class="text-h4 font-weight-bold mb-6">Projects</h1>
    <v-row>
      <v-col cols="12" md="6" v-for="project in projects" :key="project.title">
        <v-card class="mb-4">
          <v-card-title class="text-h6">{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
definePageMeta({
  alias: ["/projects"],
})

interface Project {
  title: string
  description: string
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal site built with Nuxt and Vuetify.",
  },
  {
    title: "E-commerce Backend",
    description: "Node.js API powering a small online store.",
  },
]
</script>
