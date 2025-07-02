<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h4 font-weight-bold mb-6">Welcome to My Portfolio</h1>
        <p class="mb-4">
          Navigate using the links below to learn more about my work.
        </p>
        <div class="d-flex justify-center flex-wrap gap-4">
          <v-btn color="primary" to="/projects">Projects</v-btn>
          <v-btn color="primary" to="/skills">Skills</v-btn>
          <v-btn color="primary" to="/about">About</v-btn>
          <v-btn color="primary" to="/contact">Contact</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
definePageMeta({
  alias: ["/"],
})
</script>
