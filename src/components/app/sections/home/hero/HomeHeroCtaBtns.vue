<template>
  <div
    class="hero-cta-btns d-flex flex-wrap justify-center justify-lg-start ga-4 ga-sm-4"
  >
    <v-btn
      class="hero-cta-btn hero-cta-btn--primary"
      variant="flat"
      size="large"
      to="/projects"
    >
      <span class="mr-2"> View My Projects </span>
      <v-icon
        class="hero-cta-btn__icon"
        size="20"
        icon="mdi-arrow-right"
      />
    </v-btn>

    <v-btn
      class="hero-cta-btn hero-cta-btn--secondary"
      variant="outlined"
      size="large"
      to="/contact"
    >
      <span class="mr-2"> Contact Me </span>
      <v-icon
        class="hero-cta-btn__icon"
        size="20"
        icon="mdi-email-outline"
      />
    </v-btn>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero-cta-btns {
  row-gap: 0.9rem !important;
}

.hero-cta-btn {
  min-width: 11.5rem;
  min-height: 3.25rem;
  border-radius: 0.8rem;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: none;
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background-color 0.24s ease,
    color 0.24s ease,
    box-shadow 0.24s ease;
}

.hero-cta-btn:hover {
  transform: translateY(-0.12rem);
}

.hero-cta-btn:active {
  transform: translateY(0.05rem);
}

.hero-cta-btn--primary {
  background: #40c4ff !important;
  color: #002f40 !important;
  box-shadow: 0 1rem 2rem rgba(64, 196, 255, 0.2);
}

.hero-cta-btn--primary:hover {
  background: #80d8ff !important;
  box-shadow: 0 1.2rem 2.2rem rgba(64, 196, 255, 0.28);
}

.hero-cta-btn--secondary {
  border-color: rgba(178, 217, 234, 0.45) !important;
  color: #eaf6ff !important;
  background: rgba(234, 246, 255, 0.03);
}

.hero-cta-btn--secondary:hover {
  border-color: #40c4ff !important;
  color: #40c4ff !important;
  background: rgba(64, 196, 255, 0.08);
}

.hero-cta-btn__icon {
  transition: transform 0.24s ease;
}

.hero-cta-btn:hover .hero-cta-btn__icon {
  transform: translateX(0.18rem);
}

@media (max-width: 599px) {
  .hero-cta-btns {
    width: 100%;
  }

  .hero-cta-btn {
    width: 100%;
  }
}
</style>
