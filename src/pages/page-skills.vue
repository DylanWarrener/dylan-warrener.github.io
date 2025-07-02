<template>
  <v-container class="py-10">
    <h1 class="text-h4 font-weight-bold mb-6">Skills</h1>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title>Languages</v-card-title>
          <v-list>
            <v-list-item v-for="lang in languages" :key="lang" :title="lang" />
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title>Frameworks</v-card-title>
          <v-list>
            <v-list-item v-for="fw in frameworks" :key="fw" :title="fw" />
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title>Packages</v-card-title>
          <v-list>
            <v-list-item v-for="pkg in packages" :key="pkg" :title="pkg" />
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
definePageMeta({
  alias: ["/skills"],
})

const languages = ["TypeScript", "JavaScript", "HTML", "CSS"]
const frameworks = ["Nuxt", "Vue", "Express"]
const packages = ["Pinia", "Vuetify", "Tailwind CSS"]
</script>
