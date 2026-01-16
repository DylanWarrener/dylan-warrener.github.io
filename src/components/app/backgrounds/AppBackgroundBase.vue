<template>
  <div class="position-fixed top-0 left-0 w-100 h-100">
    <v-img
      cover
      class="fade-bottom"
      style="height: 100%"
      aria-hidden="true"
      :src="firstBgSrc"
      :alt="firstBgAlt"></v-img>
  </div>
  <div class="position-fixed top-0 left-0 w-100 h-100">
    <v-img
      cover
      class="fade-top"
      style="height: 100%"
      aria-hidden="true"
      :src="secondBgSrc"
      :alt="secondBgAlt"></v-img>
  </div>
</template>

<script setup lang="ts">
defineProps({
  firstBgSrc: { type: String, required: true },
  firstBgAlt: { type: String, required: true },
  secondBgSrc: { type: String, required: true },
  secondBgAlt: { type: String, required: true },
})
</script>
