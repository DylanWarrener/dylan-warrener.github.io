<template>
  <BaseSection
    section-class=""
    content-class=""
  >
    <!-- Background image -->
    <div
      class="position-absolute left-0 top-0 h-screen w-100 bg-primary"
      style="z-index: -1; border: 4px solid purple"
    />

    <!-- Content -->
    <div style="border: 4px solid orange">Hero Content</div>

    <!-- Scroll indicator -->
    <div style="border: 4px solid lightblue">
      Scroll indicator
    </div>
  </BaseSection>
</template>

<script setup lang="ts"></script>
