<template>
  <section
    class="d-flex flex-column ga-4 test-background-main pa-4"
  >
    <h1 class="test-main-title text-h1">Main title</h1>
    <h2 class="test-title text-h2">General Title</h2>
    <h3 class="test-subtitle text-h3">Subtitle</h3>
    <h4
      class="test-subtitle-emphasized text-h4 font-italic"
    >
      Subtitle emphasized
    </h4>
    <p class="test-normal-text text-body-1">Normal text</p>
    <p class="test-link">Link text</p>
    <p class="test-link-hover">Link text hover</p>
    <p class="test-highlight">Highlight text</p>
    <p class="test-disabled">Disabled text</p>

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
        class="test-btn-disabled"
        variant="flat"
        disabled
      >
        Disabled btn CTA
      </v-btn>
    </div>

    <div class="d-flex flex-wrap ga-4 mt-4">
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
        class="test-btn-secondary-active"
        variant="outlined"
      >
        Secondary active
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

    <div class="test-background-sample">
      <p class="test-background-sample-text">
        Text on background
      </p>
    </div>

    <div class="pa-4 test-border">
      Border / separation test
    </div>
  </section>
</template>
