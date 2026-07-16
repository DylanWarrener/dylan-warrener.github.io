<template>
  <article class="featured-project-card">
    <div class="featured-project-card__visual">
      <span class="featured-project-card__category">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path :d="mdiFolderOutline" />
        </svg>
        {{ project.category }}
      </span>

      <img
        :src="project.image.src"
        :alt="project.image.alt"
        width="800"
        height="500"
        loading="lazy"
      />
    </div>

    <div class="featured-project-card__body">
      <header class="featured-project-card__heading">
        <span
          class="featured-project-card__icon"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24">
            <path :d="project.icon" />
          </svg>
        </span>

        <div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </header>

      <ul
        class="featured-project-card__technologies"
        :aria-label="`${project.title} placeholder technologies`"
      >
        <li
          v-for="technology in project.technologies"
          :key="technology"
        >
          {{ technology }}
        </li>
      </ul>

      <dl class="featured-project-card__summary">
        <div>
          <dt>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path :d="mdiHammerWrench" />
              </svg>
            </span>
            Challenge
          </dt>
          <dd>{{ project.challenge }}</dd>
        </div>

        <div>
          <dt>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path :d="mdiCheckDecagramOutline" />
              </svg>
            </span>
            Outcome
          </dt>
          <dd>{{ project.outcome }}</dd>
        </div>
      </dl>

      <ul
        class="featured-project-card__links"
        :aria-label="`${project.title} placeholder links`"
      >
        <li
          v-for="(link, index) in project.links"
          :key="`${link.label}-${link.href}`"
        >
          <a
            v-if="link.external"
            :class="{
              'featured-project-card__link--primary':
                index === 0,
            }"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${link.label} for ${project.title} (opens in a new tab)`"
          >
            <span>{{ link.label }}</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="mdiOpenInNew" />
            </svg>
          </a>

          <NuxtLink
            v-else
            :class="{
              'featured-project-card__link--primary':
                index === 0,
            }"
            :to="link.href"
            :aria-label="`${link.label} for ${project.title}`"
          >
            <span>{{ link.label }}</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="mdiArrowRight" />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import {
  mdiArrowRight,
  mdiCheckDecagramOutline,
  mdiFolderOutline,
  mdiHammerWrench,
  mdiOpenInNew,
} from '@mdi/js'

interface FeaturedProjectLink {
  label: string
  href: string
  external?: boolean
}

interface FeaturedProject {
  id: string
  title: string
  category: string
  description: string
  image: {
    src: string
    alt: string
  }
  icon: string
  technologies: string[]
  challenge: string
  outcome: string
  links: FeaturedProjectLink[]
}

defineProps<{
  project: FeaturedProject
}>()
</script>

<style scoped lang="scss">
.featured-project-card {
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid var(--projects-border);
  border-radius: 1rem;
  background: rgba(0, 47, 64, 0.58);
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.featured-project-card:hover {
  border-color: var(--projects-accent-border);
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.18);
  transform: translateY(-0.2rem);
}

.featured-project-card__visual {
  position: relative;
  overflow: hidden;
  aspect-ratio: 8 / 5;
  margin: 0.9rem 0.9rem 0;
  border: 1px solid var(--projects-border);
  border-radius: 0.8rem;
  background: var(--projects-background-deep);
}

.featured-project-card__visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-project-card__category {
  position: absolute;
  z-index: 1;
  top: 0.8rem;
  left: 0.8rem;
  display: inline-flex;
  min-height: 2.15rem;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.7rem;
  border: 1px solid var(--projects-accent-border);
  border-radius: 0.6rem;
  background: rgba(0, 47, 64, 0.92);
  color: var(--projects-soft);
  font-size: 0.78rem;
  font-weight: 750;
  line-height: 1.2;
  backdrop-filter: blur(8px);
}

.featured-project-card__category svg {
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
  fill: var(--projects-accent);
}

.featured-project-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem 1.2rem 1.15rem;
}

.featured-project-card__heading {
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr);
  gap: 0.9rem;
  align-items: start;
}

.featured-project-card__icon {
  display: grid;
  width: 3.5rem;
  height: 3.5rem;
  place-items: center;
  border: 1px solid var(--projects-accent-border);
  border-radius: 0.75rem;
  background: var(--projects-accent-soft);
  color: var(--projects-accent);
}

.featured-project-card__icon svg {
  width: 1.9rem;
  height: 1.9rem;
  fill: currentColor;
}

.featured-project-card__heading h3 {
  color: var(--projects-text);
  font-size: 1.28rem;
  font-weight: 750;
  line-height: 1.3;
}

.featured-project-card__heading p {
  margin-top: 0.35rem;
  color: var(--projects-muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

.featured-project-card__technologies,
.featured-project-card__links {
  padding: 0;
  margin: 0;
  list-style: none;
}

.featured-project-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.featured-project-card__technologies li {
  min-height: 2rem;
  padding: 0.35rem 0.65rem;
  border: 1px solid var(--projects-accent-border);
  border-radius: 999px;
  background: var(--projects-accent-soft);
  color: var(--projects-soft);
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.3;
}

.featured-project-card__summary {
  display: grid;
  gap: 0.9rem;
  padding: 1rem 0;
  margin: 1rem 0 0;
  border-top: 1px solid var(--projects-border);
  border-bottom: 1px solid var(--projects-border);
}

.featured-project-card__summary > div {
  display: grid;
  grid-template-columns: 6.25rem minmax(0, 1fr);
  gap: 0.65rem;
}

.featured-project-card__summary dt {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  color: var(--projects-accent);
  font-size: 0.8rem;
  font-weight: 750;
  line-height: 1.5;
}

.featured-project-card__summary dt span {
  display: grid;
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  background: var(--projects-accent-soft);
}

.featured-project-card__summary dt svg {
  width: 0.9rem;
  height: 0.9rem;
  fill: currentColor;
}

.featured-project-card__summary dd {
  margin: 0;
  color: var(--projects-muted);
  font-size: 0.82rem;
  line-height: 1.55;
}

.featured-project-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin-top: auto;
  padding-top: 1rem;
}

.featured-project-card__links li {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  border-left: 1px solid var(--projects-border);
}

.featured-project-card__links li:first-child {
  border-left: 0;
}

.featured-project-card__links a {
  display: inline-flex;
  min-height: 2.75rem;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.55rem 0.7rem;
  color: var(--projects-soft);
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.featured-project-card__links a:hover,
.featured-project-card__links
  a.featured-project-card__link--primary {
  color: var(--projects-accent-hover);
}

.featured-project-card__links a:hover {
  background: var(--projects-accent-soft);
}

.featured-project-card__links a:focus-visible {
  z-index: 1;
  border-radius: 0.35rem;
  outline: 3px solid var(--projects-soft);
  outline-offset: 1px;
}

.featured-project-card__links svg {
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
  fill: currentColor;
}

@media (max-width: 1279px) {
  .featured-project-card__visual {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 599px) {
  .featured-project-card__visual {
    margin: 0.65rem 0.65rem 0;
  }

  .featured-project-card__category {
    top: 0.6rem;
    left: 0.6rem;
  }

  .featured-project-card__body {
    padding: 0.9rem 1rem 1rem;
  }

  .featured-project-card__heading {
    grid-template-columns: 3.1rem minmax(0, 1fr);
  }

  .featured-project-card__icon {
    width: 3.1rem;
    height: 3.1rem;
  }

  .featured-project-card__summary > div {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }

  .featured-project-card__links {
    gap: 0.45rem;
  }

  .featured-project-card__links li {
    flex-basis: 100%;
    border: 1px solid var(--projects-border);
    border-radius: 0.55rem;
  }

  .featured-project-card__links li:first-child {
    border-left: 1px solid var(--projects-border);
  }
}
</style>
