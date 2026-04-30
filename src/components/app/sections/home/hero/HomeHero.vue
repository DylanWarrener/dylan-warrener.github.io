<template>
  <div class="hero-container w-100 position-relative">
    <section
      class="position-absolute top-0 left-0 w-100 h-100 px-4 px-sm-10"
      style="border: 2px solid black"
    >
      <div
        class="w-100 h-100 d-flex flex-column ga-4 pt-4"
        style="border: 2px solid red"
      >
        <div class="d-flex justify-center align-center">
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

        <div class="d-flex flex-column ga-4">
          <h1
            class="text-inverted text-center text-h1 font-weight-bold"
          >
            <p>Full-Stack Engineer -</p>
            <span class="gradient-text">
              Web & AI-Powered
            </span>
            <p>Software in the Cloud</p>
          </h1>

          <p class="text-inverted text-center">
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
  background-color: rgb(var(--v-theme-background));
}
</style>
