<template>
  <div
    class="d-flex ga-2 align-center w-100 justify-center justify-lg-start"
  >
    <p class="text-no-wrap text-subtitle-1">
      I'm here as a
    </p>

    <TypeOfClientSelectorMobileView />
    <TypeOfClientSelectorDesktopView />

    <div class="pt-4">
      <v-select
        variant="underlined"
        density="compact"
        min-width="150"
        max-width="300"
        :items="['Client', 'Recruiter', 'Developer']"
      ></v-select>
    </div>

    <div class="d-flex justify-center ga-2 flex-wrap">
      <v-btn
        class="test-btn-secondary"
        variant="outlined"
        size="large"
      >
        <v-icon
          size="20"
          icon="mdi-download"
        />
        <span class="ml-2"> Client </span>
      </v-btn>

      <v-btn
        class="test-btn-secondary"
        variant="outlined"
        size="large"
      >
        <v-icon
          size="20"
          icon="mdi-download"
        />
        <span class="ml-2"> Recruiter </span>
      </v-btn>

      <v-btn
        class="test-btn-secondary"
        variant="outlined"
        size="large"
      >
        <v-icon
          size="20"
          icon="mdi-download"
        />
        <span class="ml-2"> Developer </span>
      </v-btn>
    </div>

    <p class="text-center">
      Tailored view for clients. Looking for something else?
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
