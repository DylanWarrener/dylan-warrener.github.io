<template>
  <v-btn
    :variant="computed_variant"
    :icon="icon"
    :size="computed_size"
    :color="computed_color"
    :class="computed_class"
    :style="computed_style"
    :to="to"
    v-ripple="{ class: rippleColor }">
    <template #prepend>
      <v-icon
        :color="iconPrependColor"
        :icon="iconPrepend"
        v-if="iconPrepend"></v-icon>
    </template>

    <!-- Default -->
    <span
      :class="textClass"
      :style="textStyle"
      v-text="text"
      v-if="text"></span>

    <v-icon :class="iconClass" :color="iconColor" :icon="icon" v-if="icon" />

    <v-img :src="src" :alt="alt" v-if="src && alt"></v-img>

    <slot name="custom-svg" class="custom-svg"></slot>

    <template #append>
      <v-icon
        :class="computed_classIconAppend"
        :color="iconAppendColor"
        :icon="iconAppend"
        v-if="iconAppend"></v-icon>
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
  style: { type: String, required: false },
  to: { type: String, required: false },
  rippleColor: { type: String, required: false, default: "text-accent" },

  // Append
  iconAppendClass: { type: String, required: false },
  iconAppend: { type: String, required: false },
  iconAppendColor: { type: String, required: false },

  // Default
  textClass: { type: String, required: false },
  textStyle: { type: String, required: false },
  text: { type: String, required: false },
  iconClass: { type: String, required: false },
  iconStyle: { type: String, required: false },
  icon: { type: String, required: false },
  iconColor: { type: String, required: false },
  src: { type: String, required: false },
  alt: { type: String, required: false },

  // Loader
  loader: { type: String, required: false },

  // Prepend
  iconPrepend: { type: String, required: false },
  iconPrependColor: { type: String, required: false },
})

// --- Computed props for derived values ---

const computed_variant = computed<VBtnVariant>(() => {
  if (props.variant) return props.variant as VBtnVariant
  if (props.text) return "text"
  if (props.icon) return "flat"
  return undefined
})

const computed_size = computed(() => {
  if (props.size) return props.size
  if (props.text) return "large"
  if (props.icon) return "default"
  return undefined
})

const computed_color = computed(() => {
  if (props.color) return props.color
  if (props.text || props.icon) return "primary"
  return undefined
})

const computed_class = computed(() => {
  const arr: string[] = []
  if (props.class) arr.push(...props.class.split(" "))
  return arr
})

const computed_style = computed(() => props.style || "")

const computed_classIconAppend = computed(() => {
  const arr: string[] = []
  if (props.iconAppendClass) arr.push(...props.iconAppendClass.split(" "))
  return arr
})
</script>
