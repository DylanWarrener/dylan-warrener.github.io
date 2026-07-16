<template>
  <article class="credibility-stat-card">
    <span
      class="credibility-stat-card__icon"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24">
        <path :d="icon" />
      </svg>
    </span>

    <p class="credibility-stat-card__value">
      {{ value }}
    </p>

    <h3 class="credibility-stat-card__title">
      {{ title }}
    </h3>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  value: string
}>()
</script>

<style scoped lang="scss">
.credibility-stat-card {
  display: flex;
  min-height: 18.9rem;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  border: 1px solid var(--credibility-border);
  border-radius: 1rem;
  background: var(--credibility-surface);
  backdrop-filter: blur(10px);
}

.credibility-stat-card__icon {
  display: inline-grid;
  width: 4rem;
  height: 4rem;
  place-items: center;
  border-radius: 0.75rem;
  background: var(--credibility-accent-soft);
  color: var(--credibility-accent);
}

.credibility-stat-card__icon svg {
  width: 2.15rem;
  height: 2.15rem;
  fill: currentColor;
}

.credibility-stat-card__value {
  margin: 1.15rem 0 0;
  color: var(--credibility-accent);
  font-size: clamp(2rem, 2.25vw, 2.35rem);
  font-weight: 800;
  line-height: 1.08;
}

.credibility-stat-card__title {
  max-width: 13rem;
  margin-top: 0.65rem;
  color: var(--credibility-text);
  font-size: 1.16rem;
  font-weight: 700;
  line-height: 1.45;
}

@media (max-width: 1279px) {
  .credibility-stat-card {
    min-height: 14rem;
  }
}

@media (max-width: 599px) {
  .credibility-stat-card {
    min-height: auto;
  }

  .credibility-stat-card__title {
    max-width: none;
  }
}
</style>
