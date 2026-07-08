<template>
  <div class="hero-container w-100 position-relative">
    <section class="hero-section w-100 h-100">
      <v-container
        fluid
        class="hero-content h-100"
      >
        <v-row
          class="hero-row h-100"
          align="center"
        >
          <v-col
            cols="12"
            lg="6"
            class="hero-copy d-flex flex-column align-center align-lg-start"
          >
            <BaseStatusChip class="mb-8">
              Open to opportunities
            </BaseStatusChip>

            <h1
              class="hero-title text-center text-lg-start"
            >
              <span>Full-Stack</span>
              <span>Engineer&nbsp;—</span>
              <span class="gradient-text"
                >Web & AI-Powered</span
              >
              <span>Software in the Cloud</span>
            </h1>

            <p
              class="hero-description text-center text-lg-start mt-6"
            >
              I design and develop modern web and AI-powered
              applications that are stable, scalable, and
              built for real users.
            </p>

            <div class="mt-8 w-100">
              <HomeHeroCtaBtns />
            </div>

            <div class="mt-10 w-100">
              <HomeHeroTypeOfClientSelector />
            </div>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            class="hero-visual d-none d-lg-flex align-center justify-center"
          >
            <div class="hero-visual-placeholder">
              Hero visual
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <MouseScrollIndicator />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero-container {
  min-height: calc(100dvh - var(--v-layout-top));
  background-color: rgb(var(--v-theme-background));
}

.hero-section {
  min-height: calc(100dvh - var(--v-layout-top));
  padding-top: 6rem;
}

.hero-content {
  max-width: 1360px;
  padding-inline: 2rem;
}

.hero-row {
  align-content: center;
}

.hero-copy {
  min-height: 100%;
}

.hero-title {
  color: #ffffff;
  font-size: clamp(3rem, 4.2vw, 4.5rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.04em;
}

.hero-title span {
  display: block;
}

.hero-description {
  max-width: 35rem;
  color: #eaf6ff;
  font-size: clamp(1.125rem, 1.5vw, 1.3rem);
  line-height: 1.55;
}

.hero-visual {
  min-height: 62vh;
  padding-left: 2.5rem;
}

.hero-visual-placeholder {
  width: 100%;
  min-height: 440px;
  border: 1px dashed rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.45);
}
</style>
