<template>
  <div :class="`text-inverted d-flex ga-4 ${computed_class}`">
    <v-hover v-for="(navItem, index) in navLinks" :key="index">
      <template #default="{ isHovering, props }">
        <BaseBtn
          :width="`${isMobile ? '150' : '100'}`"
          :class="`${computed_classBtn} ${isHovering ? 'bg-grey-lighten-5' : ''}`"
          :prepend-icon="`${isMobile ? navItem.prependIcon : undefined}`"
          :text="navItem.text"
          :to="navItem.link"
          v-bind="props" />
      </template>
    </v-hover>
  </div>
</template>

<script setup lang="ts">
const display = useDisplay()
const navLinks = useNavLinks()

const props = defineProps({
  class: { type: String, required: false },
  classBtn: { type: String, required: false },
})

const isMobile = computed(() => display.smAndDown.value)
const computed_class = computed(() => {
  const arr: string[] = []
  if (props.class) arr.push(props.class)
  return arr.join(' ')
})
const computed_classBtn = computed(() => {
  const arr: string[] = []
  if (props.classBtn) arr.push(props.classBtn)
  if (isMobile.value) arr.push('justify-start')
  return arr.join(' ')
})
</script>
