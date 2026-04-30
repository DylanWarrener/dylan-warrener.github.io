<template>
  <section
    class="d-flex flex-column ga-4 test-background-main pa-4"
  >
    <h1 class="test-main-title">Main title</h1>
    <h2 class="test-title">General Title</h2>
    <h3 class="test-subtitle">Subtitle</h3>
    <h3 class="test-subtitle-emphasized">
      Subtitle emphasized
    </h3>
    <p class="test-normal-text">Normal text</p>

    <div class="d-flex flex-wrap ga-4 mt-4">
      <v-btn
        class="test-btn-cta"
        variant="flat"
      >
        Primary CTA
      </v-btn>
      <v-btn
        class="test-btn-cta-hover"
        variant="flat"
      >
        Primary CTA hover
      </v-btn>
      <v-btn
        class="test-btn-cta-active"
        variant="flat"
      >
        Primary CTA active
      </v-btn>
      <v-btn
        class="test-btn-secondary"
        variant="outlined"
      >
        Secondary
      </v-btn>
      <v-btn
        class="test-btn-secondary-hover"
        variant="outlined"
      >
        Secondary hover
      </v-btn>
      <v-btn
        class="test-btn-disabled"
        variant="flat"
        disabled
      >
        Disabled btn CTA
      </v-btn>
      <v-btn
        class="test-btn-disabled"
        variant="flat"
        disabled
      >
        Disabled btn secondary
      </v-btn>
    </div>

    <div class="test-layer">
      <p class="test-layer-text">Text on layer</p>
    </div>

    <div class="test-layer-raised">
      <p class="test-layer-raised-text">
        Text on raised layer
      </p>
    </div>

    <div class="test-background">
      <p class="test-background-text">Text on background</p>
    </div>

    <div class="pa-4 test-border">
      Border / separation test
    </div>
  </section>
</template>
