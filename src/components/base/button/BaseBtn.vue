<template>
  <v-btn
    :class="computed_class"
    :color="computed_color"
    :variant="computed_variant"
    :size="computed_size"
    :width="computed_width"
    :icon="!!icon"
    v-ripple="{ class: rippleColor }">
    <template #prepend v-if="prependIcon">
      <Icon
        :class="computed_prependIconClass"
        :size="prependIconSize"
        :name="prependIcon"
        v-if="prependIcon" />
    </template>

    <!-- Default -->
    <span
      :class="textClass"
      :style="textStyle"
      v-text="text"
      v-if="text"></span>

    <Icon
      :class="computed_iconClass"
      :size="iconSize"
      :name="icon"
      :alt="iconAlt"
      v-if="icon" />

    <v-img :src="src" :alt="alt" v-if="src && alt"></v-img>

    <slot name="custom-svg" class="custom-svg"></slot>

    <template #append v-if="appendIcon">
      <Icon
        :class="computed_appendIconClass"
        :size="appendIconSize"
        :name="appendIcon"
        :alt="appendIconAlt"
        v-if="appendIcon" />
    </template>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from "vue"

type VBtnVariant =
  | "text"
  | "flat"
  | "elevated"
  | "tonal"
  | "outlined"
  | "plain"
  | undefined

const props = defineProps({
  variant: { type: String as PropType<VBtnVariant>, required: false },
  size: { type: String, required: false },
  color: { type: String, required: false },
  class: { type: String, required: false },
  width: { type: String, required: false },
  rippleColor: { type: String, required: false, default: "text-accent" },

  // Append
  appendIconClass: { type: String, required: false },
  appendIconSize: { type: String, required: false },
  appendIconAlt: { type: String, required: false },
  appendIcon: { type: String, required: false },
  iconAppendColor: { type: String, required: false },

  // Default
  textClass: { type: String, required: false },
  textStyle: { type: String, required: false },
  text: { type: String, required: false },
  iconClass: { type: String, required: false },
  iconSize: { type: String, required: false, default: "24" },
  icon: { type: String, required: false },
  iconAlt: { type: String, required: false },
  iconColor: { type: String, required: false },
  src: { type: String, required: false },
  alt: { type: String, required: false },

  // Loader
  loader: { type: String, required: false },

  // Prepend
  prependIconClass: { type: String, required: false },
  prependIconSize: { type: String, required: false },
  prependIcon: { type: String, required: false },
  prependIconColor: { type: String, required: false },
})

const computed_variant = computed<VBtnVariant>(() => {
  if (props.variant) return props.variant as VBtnVariant
  if (props.text) return "text"
  if (props.icon) return "flat"
  return undefined
})

const computed_size = computed(() => {
  if (props.size) return props.size
  else if (props.text) return "small"
  else if (props.icon) return "x-small"
  return undefined
})

const computed_color = computed(() => {
  if (props.color) return props.color
  else if (props.text || props.icon) return "default"
  return undefined
})

const computed_class = computed(() => {
  const arr: string[] = ["d-flex"]
  if (props.class) arr.push(props.class)
  if (props.text) arr.push("pa-4")
  else if (props.icon) arr.push("pa-2")
  return arr.join(" ")
})

const computed_width = computed(() => {
  if (props.width) return props.width
  else if (props.text) return "100"
  return undefined
})

const computed_prependIconClass = computed(() => {
  const arr: string[] = []
  if (props.prependIconClass) arr.push(props.prependIconClass)
  return arr.join(" ")
})

const computed_iconClass = computed(() => {
  const arr: string[] = []
  if (props.iconClass) arr.push(props.iconClass)
  return arr.join(" ")
})

const computed_appendIconClass = computed(() => {
  const arr: string[] = []
  if (props.appendIconClass) arr.push(props.appendIconClass)
  return arr.join(" ")
})
</script>
