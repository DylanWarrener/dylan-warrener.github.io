<template>
  <section
    id="featured-projects"
    class="featured-projects"
    aria-labelledby="featured-projects-title"
  >
    <v-container
      fluid
      class="featured-projects__content"
    >
      <header class="featured-projects__header">
        <div class="featured-projects__intro">
          <p class="featured-projects__eyebrow">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path :d="mdiFolderMultipleOutline" />
            </svg>
            <span>FEATURED PROJECTS</span>
          </p>

          <h2
            id="featured-projects-title"
            class="featured-projects__title"
          >
            Solutions that solve
            <span>real problems.</span>
          </h2>

          <p class="featured-projects__description">
            A selection of projects I’ve designed and built
            end-to-end.
            <span>
              Each one demonstrates practical engineering,
              thoughtful architecture, and solutions built
              around real problems.
            </span>
          </p>
        </div>

        <v-btn
          class="featured-projects__cta"
          size="large"
          variant="outlined"
          to="/projects"
          :ripple="false"
        >
          <span>View all projects</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path :d="mdiArrowRight" />
          </svg>
        </v-btn>
      </header>

      <ul
        class="featured-projects__grid"
        aria-label="Placeholder featured projects"
      >
        <li
          v-for="project in projects"
          :key="project.id"
        >
          <HomeFeaturedProjectCard :project="project" />
        </li>
      </ul>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import {
  mdiArrowRight,
  mdiCodeTags,
  mdiFolderMultipleOutline,
  mdiImageOutline,
  mdiViewGridOutline,
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

const projects = [
  {
    id: 'placeholder-project-one',
    title: 'Project Title Placeholder',
    category: 'Placeholder Category',
    description:
      'Placeholder project description to be replaced with approved public portfolio copy.',
    image: {
      src: '/images/projects/placeholders/project-placeholder-01.svg',
      alt: 'Clearly labelled placeholder visual for the first featured project',
    },
    icon: mdiViewGridOutline,
    technologies: [
      'Technology 01',
      'Technology 02',
      'Technology 03',
    ],
    challenge:
      'Placeholder challenge summary. Replace with an approved, public-safe problem statement.',
    outcome:
      'Placeholder outcome summary. Replace with a verified result without invented metrics.',
    links: [
      {
        label: 'View placeholder',
        href: '/projects',
      },
      {
        label: 'Placeholder link',
        href: '/projects',
      },
    ],
  },
  {
    id: 'placeholder-project-two',
    title: 'Project Title Placeholder',
    category: 'Placeholder Category',
    description:
      'Placeholder project description to be replaced with approved public portfolio copy.',
    image: {
      src: '/images/projects/placeholders/project-placeholder-02.svg',
      alt: 'Clearly labelled placeholder visual for the second featured project',
    },
    icon: mdiCodeTags,
    technologies: [
      'Technology 01',
      'Technology 02',
      'Technology 03',
      'Technology 04',
    ],
    challenge:
      'Placeholder challenge summary. Replace with an approved, public-safe problem statement.',
    outcome:
      'Placeholder outcome summary. Replace with a verified result without invented metrics.',
    links: [
      {
        label: 'View placeholder',
        href: '/projects',
      },
      {
        label: 'Placeholder link',
        href: '/projects',
      },
    ],
  },
  {
    id: 'placeholder-project-three',
    title: 'Project Title Placeholder',
    category: 'Placeholder Category',
    description:
      'Placeholder project description to be replaced with approved public portfolio copy.',
    image: {
      src: '/images/projects/placeholders/project-placeholder-03.svg',
      alt: 'Clearly labelled placeholder visual for the third featured project',
    },
    icon: mdiImageOutline,
    technologies: [
      'Technology 01',
      'Technology 02',
      'Technology 03',
    ],
    challenge:
      'Placeholder challenge summary. Replace with an approved, public-safe problem statement.',
    outcome:
      'Placeholder outcome summary. Replace with a verified result without invented metrics.',
    links: [
      {
        label: 'View placeholder',
        href: '/projects',
      },
      {
        label: 'Placeholder link',
        href: '/projects',
      },
    ],
  },
] satisfies FeaturedProject[]
</script>

<style scoped lang="scss">
.featured-projects {
  --projects-background: #002f40;
  --projects-background-deep: #012635;
  --projects-accent: #40c4ff;
  --projects-accent-hover: #80d8ff;
  --projects-accent-soft: rgba(64, 196, 255, 0.08);
  --projects-accent-border: rgba(64, 196, 255, 0.24);
  --projects-border: rgba(178, 217, 234, 0.14);
  --projects-text: #ffffff;
  --projects-soft: #eaf6ff;
  --projects-muted: #b2d9ea;
  --projects-gradient: linear-gradient(
    90deg,
    #3b82f6 0%,
    #60a5fa 40%,
    #38bdf8 100%
  );

  width: 100%;
  background:
    linear-gradient(
      45deg,
      rgba(64, 196, 255, 0.045),
      transparent 40%
    ),
    linear-gradient(
      180deg,
      var(--projects-background) 0%,
      var(--projects-background-deep) 100%
    );
  color: var(--projects-text);
}

.featured-projects__content {
  max-width: 1360px;
  padding: 5rem 2rem;
}

.featured-projects__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 3rem;
}

.featured-projects__intro {
  max-width: 55rem;
}

.featured-projects__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1.35rem;
  color: var(--projects-accent);
  font-size: 0.96rem;
  font-weight: 750;
  line-height: 1.4;
}

.featured-projects__eyebrow svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;
  fill: currentColor;
}

.featured-projects__title {
  color: var(--projects-text);
  font-size: clamp(2.7rem, 3.7vw, 3.5rem);
  font-weight: 800;
  line-height: 1.07;
  letter-spacing: -0.025em;
}

.featured-projects__title span {
  background: var(--projects-gradient);
  background-clip: text;
  color: transparent;
}

.featured-projects__description {
  max-width: 49rem;
  margin-top: 1.15rem;
  color: var(--projects-muted);
  font-size: 1.05rem;
  line-height: 1.65;
}

.featured-projects__description span {
  display: block;
}

.featured-projects__cta {
  min-width: 14.25rem;
  min-height: 3.5rem;
  border-color: var(--projects-accent-border) !important;
  border-radius: 0.8rem;
  color: var(--projects-soft) !important;
  font-size: 1rem;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: none;
  transition:
    border-color 0.25s ease,
    background-color 0.25s ease,
    color 0.25s ease !important;
}

.featured-projects__cta svg {
  width: 1.35rem;
  height: 1.35rem;
  margin-left: 1.1rem;
  fill: currentColor;
}

.featured-projects__cta:hover {
  border-color: var(--projects-accent) !important;
  background: var(--projects-accent-soft) !important;
  color: var(--projects-accent-hover) !important;
}

.featured-projects__cta:focus-visible {
  outline: 3px solid var(--projects-soft);
  outline-offset: 3px;
}

.featured-projects__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
  padding: 0;
  margin: 2rem 0 0;
  list-style: none;
}

.featured-projects__grid > li {
  min-width: 0;
}

@media (max-width: 1279px) {
  .featured-projects__content {
    padding-block: 4.5rem;
  }

  .featured-projects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .featured-projects__grid > li:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 959px) {
  .featured-projects__content {
    padding-inline: 1.5rem;
  }

  .featured-projects__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.75rem;
  }
}

@media (max-width: 767px) {
  .featured-projects__grid {
    grid-template-columns: 1fr;
  }

  .featured-projects__grid > li:last-child {
    grid-column: auto;
  }
}

@media (max-width: 599px) {
  .featured-projects__content {
    padding: 3.5rem 1rem;
  }

  .featured-projects__title {
    font-size: 2.4rem;
  }

  .featured-projects__description {
    font-size: 1rem;
  }

  .featured-projects__cta {
    width: 100%;
    min-width: 0;
  }

  .featured-projects__grid {
    gap: 1rem;
    margin-top: 1.75rem;
  }
}
</style>
