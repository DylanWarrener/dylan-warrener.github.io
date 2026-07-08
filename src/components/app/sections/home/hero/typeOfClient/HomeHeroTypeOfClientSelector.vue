<template>
  <div
    class="d-flex ga-2 align-center w-100 justify-center justify-lg-start"
  >
    <p class="text-no-wrap text-subtitle-1">
      I'm here as a
    </p>

    <TypeOfClientSelectorMobileView v-if="isMobile" />
    <TypeOfClientSelectorDesktopView v-else />
  </div>
</template>

<script setup lang="ts">
const display = useDisplay()

const isMobile = computed(() => display.smAndDown.value)
</script>

<style lang="scss" scoped></style>
