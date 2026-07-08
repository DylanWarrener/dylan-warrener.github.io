<template>
  <div class="hero-container w-100 position-relative">
    <section
      id="hero"
      class="hero-section w-100 h-100"
      aria-labelledby="hero-title"
    >
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
            <div class="hero-status mb-8">
              <span class="hero-status__dot" />
              <span>Available for software engineering roles and projects</span>
            </div>

            <h1
              id="hero-title"
              class="hero-title text-center text-lg-start"
            >
              <span>Building reliable</span>
              <span class="gradient-text">web applications</span>
              <span>with cloud-ready engineering.</span>
            </h1>

            <p
              class="hero-description text-center text-lg-start mt-6"
            >
              I'm Dylan Warrener, a full-stack software engineer who turns
              product ideas into polished, maintainable systems with thoughtful
              UX, scalable architecture, and practical AI integration where it
              adds real value.
            </p>

            <div class="hero-actions mt-8 w-100">
              <HomeHeroCtaBtns />
            </div>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            class="hero-visual d-flex align-center justify-center"
          >
            <div
              class="hero-product-shell"
              aria-hidden="true"
            >
              <div class="hero-product-shell__bar">
                <span />
                <span />
                <span />
              </div>

              <div class="hero-product-shell__body">
                <div class="hero-code-panel">
                  <div class="hero-code-panel__header">
                    <span>portfolio.system.ts</span>
                    <span>Live</span>
                  </div>

                  <div class="hero-code-lines">
                    <p>
                      <span class="code-keyword">const</span>
                      engineer =
                      <span class="code-string">'Dylan Warrener'</span>
                    </p>
                    <p>
                      focus: [
                      <span class="code-string">'Vue'</span>,
                      <span class="code-string">'Cloud'</span>,
                      <span class="code-string">'AI'</span>
                      ]
                    </p>
                    <p>
                      delivers:
                      <span class="code-string">'stable products'</span>
                    </p>
                  </div>
                </div>

                <div class="hero-metric-grid">
                  <div class="hero-metric">
                    <span class="hero-metric__value">01</span>
                    <span class="hero-metric__label">Plan clearly</span>
                  </div>

                  <div class="hero-metric">
                    <span class="hero-metric__value">02</span>
                    <span class="hero-metric__label">Build cleanly</span>
                  </div>

                  <div class="hero-metric">
                    <span class="hero-metric__value">03</span>
                    <span class="hero-metric__label">Ship confidently</span>
                  </div>
                </div>

                <div class="hero-stack">
                  <span>Nuxt</span>
                  <span>TypeScript</span>
                  <span>Cloud</span>
                  <span>AI</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero-container {
  min-height: calc(100dvh - var(--v-layout-top));
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(64, 196, 255, 0.08), transparent 34%),
    linear-gradient(180deg, #002f40 0%, #012635 100%);
}

.hero-section {
  min-height: calc(100dvh - var(--v-layout-top));
  padding-block: 6rem 5rem;
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

.hero-status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  max-width: 100%;
  padding: 0.55rem 0.9rem;
  border: 1px solid rgba(64, 196, 255, 0.28);
  border-radius: 999px;
  background: rgba(64, 196, 255, 0.08);
  color: #b2ebff;
  font-size: 0.95rem;
  font-weight: 650;
  line-height: 1.3;
}

.hero-status__dot {
  width: 0.55rem;
  height: 0.55rem;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #21d07a;
  box-shadow: 0 0 0 0.3rem rgba(33, 208, 122, 0.12);
}

.hero-title {
  color: #ffffff;
  max-width: 45rem;
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.03;
  letter-spacing: 0;
}

.hero-title span {
  display: block;
}

.hero-description {
  max-width: 42rem;
  color: #eaf6ff;
  font-size: 1.22rem;
  line-height: 1.65;
}

.hero-actions {
  max-width: 42rem;
}

.hero-visual {
  min-height: 36rem;
  padding-left: 2.5rem;
}

.hero-product-shell {
  position: relative;
  width: 100%;
  max-width: 34rem;
  overflow: hidden;
  border: 1px solid rgba(178, 217, 234, 0.18);
  border-radius: 1.5rem;
  background:
    linear-gradient(145deg, rgba(57, 91, 106, 0.86), rgba(0, 47, 64, 0.92)),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04) 0,
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px,
      transparent 56px
    );
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.32);
  transform: translateY(0);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.hero-product-shell:hover {
  border-color: rgba(64, 196, 255, 0.42);
  box-shadow: 0 2.4rem 5.5rem rgba(0, 0, 0, 0.38);
  transform: translateY(-0.25rem);
}

.hero-product-shell__bar {
  display: flex;
  gap: 0.45rem;
  align-items: center;
  height: 3rem;
  padding-inline: 1rem;
  border-bottom: 1px solid rgba(178, 217, 234, 0.14);
  background: rgba(0, 0, 0, 0.16);
}

.hero-product-shell__bar span {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  background: rgba(178, 217, 234, 0.45);
}

.hero-product-shell__bar span:first-child {
  background: #ff6b6b;
}

.hero-product-shell__bar span:nth-child(2) {
  background: #f5b942;
}

.hero-product-shell__bar span:nth-child(3) {
  background: #21d07a;
}

.hero-product-shell__body {
  display: grid;
  gap: 1rem;
  padding: 1.25rem;
}

.hero-code-panel,
.hero-metric,
.hero-stack {
  border: 1px solid rgba(178, 217, 234, 0.14);
  border-radius: 1rem;
  background: rgba(0, 47, 64, 0.56);
  backdrop-filter: blur(10px);
}

.hero-code-panel {
  overflow: hidden;
}

.hero-code-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(178, 217, 234, 0.12);
  color: #b2d9ea;
  font-size: 0.84rem;
  font-weight: 700;
}

.hero-code-panel__header span:last-child {
  color: #21d07a;
}

.hero-code-lines {
  display: grid;
  gap: 0.65rem;
  padding: 1rem;
  color: #eaf6ff;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-size: 0.95rem;
  line-height: 1.7;
}

.hero-code-lines p {
  margin: 0;
}

.code-keyword {
  color: #40c4ff;
}

.code-string {
  color: #b2ebff;
}

.hero-metric-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

.hero-metric {
  display: grid;
  gap: 0.45rem;
  min-height: 7rem;
  padding: 1rem;
}

.hero-metric__value {
  color: #40c4ff;
  font-size: 1.6rem;
  font-weight: 800;
}

.hero-metric__label {
  color: #eaf6ff;
  font-size: 0.92rem;
  font-weight: 650;
  line-height: 1.3;
}

.hero-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  padding: 1rem;
}

.hero-stack span {
  padding: 0.45rem 0.7rem;
  border: 1px solid rgba(64, 196, 255, 0.24);
  border-radius: 999px;
  background: rgba(64, 196, 255, 0.08);
  color: #eaf6ff;
  font-size: 0.86rem;
  font-weight: 700;
}

@media (max-width: 1279px) {
  .hero-section {
    padding-block: 5rem 4rem;
  }

  .hero-visual {
    min-height: auto;
    padding-top: 3.5rem;
    padding-left: 0;
  }

  .hero-product-shell {
    max-width: 42rem;
  }
}

@media (max-width: 959px) {
  .hero-content {
    padding-inline: 1.5rem;
  }

  .hero-title {
    font-size: 3.4rem;
  }

  .hero-description {
    font-size: 1.12rem;
  }
}

@media (max-width: 599px) {
  .hero-section {
    padding-block: 4rem 3rem;
  }

  .hero-content {
    padding-inline: 1rem;
  }

  .hero-status {
    align-items: flex-start;
    border-radius: 1rem;
    font-size: 0.88rem;
  }

  .hero-status__dot {
    margin-top: 0.3rem;
  }

  .hero-title {
    font-size: 2.65rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-product-shell__body {
    padding: 0.85rem;
  }

  .hero-metric-grid {
    grid-template-columns: 1fr;
  }

  .hero-metric {
    min-height: auto;
  }
}
</style>
