<template>
  <div class="hero-container w-100 position-relative">
    <section
      class="position-absolute top-0 left-0 w-50 h-100 pl-10"
      style="border: 2px solid black"
    >
      <div
        class="w-100 h-100 d-flex flex-column ga-4"
        style="border: 2px solid red"
      >
        <div style="border: 2px solid purple">
          <v-chip
            class="ma-2"
            color="success"
            variant="outlined"
          >
            <v-icon
              icon="mdi-circle-medium"
              start
            />
            Open to opportunities
          </v-chip>
        </div>

        <div
          class="d-flex flex-column ga-4"
          style="border: 2px solid orange"
        >
          <h1 class="text-inverted text-h1">
            Full-Stack Engineer - <br />
            <span class="text-blue">Web & AI-Powered</span>
            <br />
            Software in the Cloud
          </h1>

          <p class="text-inverted">
            I design and develop modern web and AI-powered
            applications that are stable, scalable, and
            built for real users.
          </p>
        </div>

        <HomeHeroCtaBtns />

        <TypeOfClientSelector />
      </div>
    </section>

    <MouseScrollIndicator />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero-container {
  height: calc(100dvh - var(--v-layout-top));
  background-color: #010b17;
}
</style>
