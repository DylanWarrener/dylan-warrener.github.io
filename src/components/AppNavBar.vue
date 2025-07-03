<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Dylan Warrener</v-toolbar-title>
    <v-spacer />
    <v-btn to="/" variant="text" class="mx-2">Home</v-btn>
    <v-btn to="/projects" variant="text" class="mx-2">Projects</v-btn>
    <v-btn to="/skills" variant="text" class="mx-2">Skills</v-btn>
    <v-btn to="/about" variant="text" class="mx-2">About</v-btn>
    <v-btn to="/contact" variant="text" class="mx-2">Contact</v-btn>
    <v-btn href="/CV.pdf" download variant="text" class="mx-2">CV</v-btn>
  </v-app-bar>
</template>
<script setup lang="ts"></script>
