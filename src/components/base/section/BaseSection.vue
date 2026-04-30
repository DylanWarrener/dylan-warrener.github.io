<template>
  <section
    :class="sectionClass"
    style="border: 4px solid black"
  >
    <v-container
      fluid
      class="pa-0"
      style="border: 4px solid red"
    >
      <div
        :class="contentClass"
        style="border: 4px solid blue"
      >
        <slot />
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    sectionClass?: string
    contentClass?: string
  }>(),
  {
    sectionClass: 'py-20 max-w-100',
    contentClass: 'mx-auto max-w-6xl',
  }
)
</script>
