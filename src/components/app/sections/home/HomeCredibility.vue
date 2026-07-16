<template>
  <section
    id="credibility"
    class="credibility-section"
    aria-labelledby="credibility-title"
  >
    <v-container
      fluid
      class="credibility-content"
    >
      <div class="credibility-top">
        <header class="credibility-intro">
          <p class="credibility-eyebrow">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="mdiShieldCheckOutline" />
            </svg>
            <span>CREDIBILITY</span>
          </p>

          <h2
            id="credibility-title"
            class="credibility-title"
          >
            Trusted to build
            <span>production software.</span>
          </h2>

          <p class="credibility-description">
            Professional experience building enterprise web
            applications, cloud-based systems and AI-powered
            internal tools with a focus on maintainability,
            scalability and long-term reliability.
          </p>
        </header>

        <ul
          class="credibility-stats"
          aria-label="Professional credibility statistics"
        >
          <li
            v-for="stat in stats"
            :key="stat.title"
            class="credibility-stats__item"
          >
            <HomeCredibilityStatCard
              :icon="stat.icon"
              :title="stat.title"
              :value="stat.value"
            />
          </li>
        </ul>
      </div>

      <div class="credibility-details">
        <article
          class="credibility-panel credibility-employer"
        >
          <header class="credibility-panel__heading">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="mdiBriefcaseOutline" />
            </svg>
            <h3>WHERE I BUILD</h3>
          </header>

          <div class="credibility-employer__body">
            <div class="credibility-employer__identity">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path :d="mdiOfficeBuildingOutline" />
              </svg>
              <span>AB Mauri</span>
            </div>

            <div class="credibility-employer__copy">
              <h4>Full-Stack Software Developer</h4>
              <p class="credibility-employer__company">
                AB Mauri
              </p>
              <time datetime="2025-04"
                >April 2025 – Present</time
              >
              <p class="credibility-employer__summary">
                Building enterprise web applications and
                AI-powered internal tools using modern
                full-stack technologies, cloud services and
                scalable architecture to improve business
                operations and deliver production-ready
                software.
              </p>
            </div>
          </div>

          <ul
            class="credibility-tags"
            aria-label="Role capabilities"
          >
            <li
              v-for="tag in capabilityTags"
              :key="tag.label"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path :d="tag.icon" />
              </svg>
              <span>{{ tag.label }}</span>
            </li>
          </ul>
        </article>

        <section
          class="credibility-panel credibility-credentials"
          aria-labelledby="credentials-title"
        >
          <header class="credibility-panel__heading">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="mdiCertificateOutline" />
            </svg>
            <h3 id="credentials-title">CREDENTIALS</h3>
          </header>

          <ul class="credibility-credentials__list">
            <li
              v-for="credential in credentials"
              :key="credential.title"
            >
              <span
                class="credibility-credentials__marker"
                aria-hidden="true"
              />

              <span
                class="credibility-credentials__icon"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path :d="credential.icon" />
                </svg>
              </span>

              <span class="credibility-credentials__copy">
                <strong>{{ credential.title }}</strong>
                <span v-if="credential.issuer">
                  {{ credential.issuer }}
                </span>
              </span>
            </li>
          </ul>
        </section>
      </div>

      <section
        class="credibility-panel credibility-technologies"
        aria-labelledby="technologies-title"
      >
        <header class="credibility-panel__heading">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path :d="mdiCodeTags" />
          </svg>
          <h3 id="technologies-title">
            TECHNOLOGIES &amp; TOOLS
          </h3>
        </header>

        <ul class="credibility-technologies__list">
          <li
            v-for="technology in technologies"
            :key="technology.label"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="technology.icon" />
            </svg>
            <span>{{ technology.label }}</span>
          </li>
        </ul>
      </section>

      <aside class="credibility-cta">
        <span
          class="credibility-cta__icon"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24">
            <path :d="mdiCodeBraces" />
          </svg>
        </span>

        <div class="credibility-cta__copy">
          <h3>Want to see more of my work?</h3>
          <p>
            Explore the projects I've built and the problems
            I solve.
          </p>
        </div>

        <v-btn
          class="credibility-cta__button"
          size="large"
          to="/projects"
          :ripple="false"
        >
          <span>See Featured Projects</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path :d="mdiArrowRight" />
          </svg>
        </v-btn>
      </aside>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import {
  mdiArrowRight,
  mdiBriefcaseOutline,
  mdiCertificateOutline,
  mdiCloudOutline,
  mdiCodeBraces,
  mdiCodeTags,
  mdiCreationOutline,
  mdiDatabase,
  mdiGithub,
  mdiLanguageTypescript,
  mdiMicrosoftAzure,
  mdiNuxt,
  mdiOfficeBuildingOutline,
  mdiRocketLaunchOutline,
  mdiSchoolOutline,
  mdiShieldCheckOutline,
  mdiTailwind,
  mdiVuejs,
} from '@mdi/js'

const stats = [
  {
    value: '4+',
    title: 'Years Professional Experience',
    icon: mdiRocketLaunchOutline,
  },
  {
    value: 'Enterprise',
    title: 'Production Software',
    icon: mdiOfficeBuildingOutline,
  },
  {
    value: 'AZ-900',
    title: 'Microsoft Azure Fundamentals',
    icon: mdiCloudOutline,
  },
] as const

const capabilityTags = [
  {
    label: 'Enterprise Software',
    icon: mdiOfficeBuildingOutline,
  },
  { label: 'Cloud', icon: mdiCloudOutline },
  { label: 'AI Integration', icon: mdiCreationOutline },
  { label: 'Full-Stack', icon: mdiCodeBraces },
] as const

const credentials = [
  {
    title: 'MSc Software Application Development (Level 7)',
    issuer: 'University of Hertfordshire',
    icon: mdiSchoolOutline,
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: '',
    icon: mdiCertificateOutline,
  },
] as const

const technologies = [
  {
    label: 'TypeScript',
    icon: mdiLanguageTypescript,
  },
  { label: 'Vue.js', icon: mdiVuejs },
  { label: 'Nuxt', icon: mdiNuxt },
  {
    label: 'Azure',
    icon: mdiMicrosoftAzure,
  },
  { label: 'SQL', icon: mdiDatabase },
  {
    label: 'Tailwind CSS',
    icon: mdiTailwind,
  },
  { label: 'GitHub', icon: mdiGithub },
] as const
</script>

<style scoped lang="scss">
.credibility-section {
  --credibility-background: #002f40;
  --credibility-background-deep: #012635;
  --credibility-layer: rgba(57, 91, 106, 0.5);
  --credibility-accent: #40c4ff;
  --credibility-accent-hover: #80d8ff;
  --credibility-accent-soft: rgba(64, 196, 255, 0.08);
  --credibility-accent-border: rgba(64, 196, 255, 0.24);
  --credibility-border: rgba(178, 217, 234, 0.14);
  --credibility-timeline: rgba(178, 217, 234, 0.28);
  --credibility-surface: rgba(0, 47, 64, 0.56);
  --credibility-surface-strong: rgba(0, 47, 64, 0.72);
  --credibility-grid-line: rgba(255, 255, 255, 0.04);
  --credibility-text: #ffffff;
  --credibility-soft: #eaf6ff;
  --credibility-muted: #b2d9ea;
  --credibility-gradient: linear-gradient(
    90deg,
    #3b82f6 0%,
    #60a5fa 40%,
    #38bdf8 100%
  );
  --credibility-cta-shadow: 0 1rem 2rem
    rgba(64, 196, 255, 0.2);
  --credibility-cta-shadow-hover: 0 1.2rem 2.2rem
    rgba(64, 196, 255, 0.28);

  width: 100%;
  background:
    linear-gradient(
      315deg,
      rgba(64, 196, 255, 0.06),
      transparent 38%
    ),
    linear-gradient(
      180deg,
      var(--credibility-background-deep) 0%,
      var(--credibility-background) 100%
    );
  color: var(--credibility-text);
}

.credibility-content {
  max-width: 1360px;
  padding: 2.25rem 2rem 2rem;
}

.credibility-top {
  display: grid;
  grid-template-columns: minmax(23rem, 1.8fr) minmax(0, 3fr);
  gap: 1.4rem;
}

.credibility-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 0.8rem;
}

.credibility-eyebrow,
.credibility-panel__heading {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--credibility-accent);
  font-size: 0.96rem;
  font-weight: 750;
  line-height: 1.4;
}

.credibility-eyebrow {
  margin: 0 0 1.5rem;
}

.credibility-eyebrow svg,
.credibility-panel__heading svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;
  fill: currentColor;
}

.credibility-title {
  max-width: 31rem;
  color: var(--credibility-text);
  font-size: clamp(2.7rem, 3.3vw, 3.25rem);
  font-weight: 800;
  line-height: 1.07;
  letter-spacing: -0.025em;
}

.credibility-title span {
  display: block;
  background: var(--credibility-gradient);
  background-clip: text;
  color: transparent;
}

.credibility-description {
  max-width: 30rem;
  margin-top: 1.25rem;
  color: var(--credibility-muted);
  font-size: 1.05rem;
  line-height: 1.65;
}

.credibility-stats,
.credibility-tags,
.credibility-credentials__list,
.credibility-technologies__list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.credibility-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.3rem;
}

.credibility-details {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 1.4rem;
  margin-top: 1.6rem;
}

.credibility-panel {
  border: 1px solid var(--credibility-border);
  border-radius: 1rem;
  background: var(--credibility-surface);
  backdrop-filter: blur(10px);
}

.credibility-employer,
.credibility-credentials {
  min-height: 21.7rem;
  padding: 1.5rem 1.3rem 1.25rem;
}

.credibility-panel__heading {
  margin: 0;
}

.credibility-panel__heading h3 {
  font: inherit;
}

.credibility-employer__body {
  display: grid;
  grid-template-columns: 10.9rem minmax(0, 1fr);
  gap: 1.15rem;
  margin-top: 1.5rem;
}

.credibility-employer__identity {
  display: flex;
  min-height: 7.55rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 1rem;
  border: 1px solid var(--credibility-border);
  border-radius: 1rem;
  background: var(--credibility-surface-strong);
  color: var(--credibility-text);
  text-align: center;
}

.credibility-employer__identity svg {
  width: 2.15rem;
  height: 2.15rem;
  fill: var(--credibility-accent);
}

.credibility-employer__identity span {
  font-size: 1.25rem;
  font-weight: 800;
}

.credibility-employer__copy h4 {
  color: var(--credibility-text);
  font-size: 1.38rem;
  font-weight: 750;
  line-height: 1.3;
}

.credibility-employer__company {
  margin: 0.45rem 0 0;
  color: var(--credibility-accent);
  font-size: 1.05rem;
  font-weight: 700;
}

.credibility-employer__copy time {
  display: block;
  margin-top: 0.25rem;
  color: var(--credibility-muted);
  font-size: 0.96rem;
}

.credibility-employer__summary {
  margin-top: 1.3rem;
  color: var(--credibility-muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

.credibility-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.25rem;
}

.credibility-tags li {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.4rem;
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--credibility-accent-border);
  border-radius: 999px;
  background: var(--credibility-accent-soft);
  color: var(--credibility-soft);
  font-size: 0.86rem;
  font-weight: 700;
}

.credibility-tags svg {
  width: 1.2rem;
  height: 1.2rem;
  flex: 0 0 auto;
  fill: var(--credibility-accent);
}

.credibility-credentials__list {
  position: relative;
  display: grid;
  margin-top: 1.2rem;
  padding-left: 1.9rem;
}

.credibility-credentials__list::before {
  position: absolute;
  top: 0.8rem;
  bottom: 1.2rem;
  left: 0.25rem;
  width: 1px;
  background: var(--credibility-timeline);
  content: '';
}

.credibility-credentials__list li {
  position: relative;
  display: grid;
  grid-template-columns: 4rem minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  min-height: 5.8rem;
  border-bottom: 1px solid var(--credibility-border);
}

.credibility-credentials__list li:last-child {
  border-bottom: 0;
}

.credibility-credentials__marker {
  position: absolute;
  top: 50%;
  left: -2.01rem;
  width: 0.68rem;
  height: 0.68rem;
  border: 1px solid var(--credibility-background-deep);
  border-radius: 50%;
  background: var(--credibility-accent);
  box-shadow: 0 0 0 0.25rem rgba(64, 196, 255, 0.1);
  transform: translateY(-50%);
}

.credibility-credentials__icon {
  display: grid;
  width: 4rem;
  height: 4rem;
  place-items: center;
  border-radius: 0.75rem;
  background: var(--credibility-accent-soft);
  color: var(--credibility-accent);
}

.credibility-credentials__icon svg {
  width: 2rem;
  height: 2rem;
  fill: currentColor;
}

.credibility-credentials__copy {
  display: grid;
  gap: 0.25rem;
}

.credibility-credentials__copy strong {
  color: var(--credibility-text);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.35;
}

.credibility-credentials__copy > span {
  color: var(--credibility-muted);
  font-size: 0.9rem;
}

.credibility-technologies {
  min-height: 7.7rem;
  margin-top: 1rem;
  padding: 1.35rem 1.5rem;
}

.credibility-technologies__list {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 1rem;
  align-items: center;
  margin-top: 1.1rem;
}

.credibility-technologies__list li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  color: var(--credibility-soft);
  font-size: 0.98rem;
  font-weight: 650;
  white-space: nowrap;
}

.credibility-technologies__list svg {
  width: 2rem;
  height: 2rem;
  flex: 0 0 auto;
  fill: var(--credibility-accent);
}

.credibility-cta {
  position: relative;
  display: grid;
  min-height: 7.5rem;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 1.8rem;
  overflow: hidden;
  margin-top: 1.25rem;
  padding: 1.4rem 3rem 1.4rem 2.5rem;
  border: 1px solid var(--credibility-border);
  border-radius: 1rem;
  background:
    linear-gradient(
      145deg,
      var(--credibility-layer),
      var(--credibility-surface-strong)
    ),
    repeating-linear-gradient(
      90deg,
      var(--credibility-grid-line) 0,
      var(--credibility-grid-line) 1px,
      transparent 1px,
      transparent 56px
    );
  backdrop-filter: blur(10px);
}

.credibility-cta > * {
  position: relative;
  z-index: 1;
}

.credibility-cta__icon {
  display: grid;
  width: 4.1rem;
  height: 4.1rem;
  place-items: center;
  border-radius: 0.75rem;
  background: var(--credibility-accent-soft);
  color: var(--credibility-accent);
}

.credibility-cta__icon svg {
  width: 2.35rem;
  height: 2.35rem;
  fill: currentColor;
}

.credibility-cta__copy h3 {
  color: var(--credibility-text);
  font-size: 1.35rem;
  font-weight: 750;
  line-height: 1.35;
}

.credibility-cta__copy p {
  margin-top: 0.35rem;
  color: var(--credibility-muted);
  font-size: 0.98rem;
  line-height: 1.5;
}

.credibility-cta__button {
  min-width: 18.8rem;
  min-height: 3.25rem;
  border-radius: 0.8rem;
  background: var(--credibility-accent) !important;
  color: var(--credibility-background) !important;
  box-shadow: var(--credibility-cta-shadow);
  font-size: 1rem;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: none;
  transition: none !important;
}

.credibility-cta__button svg {
  width: 1.35rem;
  height: 1.35rem;
  margin-left: 1.2rem;
  fill: currentColor;
}

.credibility-cta__button:hover {
  background: var(--credibility-accent-hover) !important;
  box-shadow: var(--credibility-cta-shadow-hover);
}

.credibility-cta__button:focus-visible {
  outline: 3px solid var(--credibility-soft);
  outline-offset: 3px;
}

@media (max-width: 1279px) {
  .credibility-content {
    padding-block: 3.5rem;
  }

  .credibility-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .credibility-intro {
    max-width: 50rem;
    padding-right: 0;
  }

  .credibility-details {
    grid-template-columns: 1fr;
  }

  .credibility-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .credibility-stats__item:last-child {
    grid-column: 1 / -1;
  }

  .credibility-technologies__list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 1.5rem;
  }
}

@media (max-width: 959px) {
  .credibility-content {
    padding-inline: 1.5rem;
  }

  .credibility-employer__body {
    grid-template-columns: 9.5rem minmax(0, 1fr);
  }

  .credibility-technologies__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .credibility-cta {
    grid-template-columns: auto minmax(0, 1fr);
    padding-inline: 1.5rem;
  }

  .credibility-cta__button {
    width: 100%;
    grid-column: 1 / -1;
  }
}

@media (max-width: 599px) {
  .credibility-content {
    padding: 3rem 1rem;
  }

  .credibility-title {
    font-size: 2.4rem;
  }

  .credibility-description {
    font-size: 1rem;
  }

  .credibility-stats {
    grid-template-columns: 1fr;
  }

  .credibility-stats__item:last-child {
    grid-column: auto;
  }

  .credibility-employer,
  .credibility-credentials,
  .credibility-technologies {
    padding: 1.2rem 1rem;
  }

  .credibility-employer__body {
    grid-template-columns: 1fr;
  }

  .credibility-employer__identity {
    min-height: 7rem;
  }

  .credibility-employer__summary {
    margin-top: 1rem;
  }

  .credibility-tags li {
    flex: 1 1 calc(50% - 0.65rem);
  }

  .credibility-credentials__list {
    padding-left: 1.25rem;
  }

  .credibility-credentials__list::before {
    left: 0.15rem;
  }

  .credibility-credentials__list li {
    grid-template-columns: 3.25rem minmax(0, 1fr);
    gap: 0.8rem;
    padding-block: 0.75rem;
  }

  .credibility-credentials__marker {
    left: -1.36rem;
  }

  .credibility-credentials__icon {
    width: 3.25rem;
    height: 3.25rem;
  }

  .credibility-technologies__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .credibility-technologies__list li {
    justify-content: flex-start;
  }

  .credibility-cta {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.25rem 1rem;
  }

  .credibility-cta__icon {
    width: 3.6rem;
    height: 3.6rem;
  }

  .credibility-cta__button {
    min-width: 0;
    grid-column: auto;
  }
}

@media (max-width: 399px) {
  .credibility-tags li {
    flex-basis: 100%;
  }

  .credibility-technologies__list {
    grid-template-columns: 1fr;
  }
}
</style>
