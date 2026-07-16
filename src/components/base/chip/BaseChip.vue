<template>
  <v-chip
    class="base-chip"
    :class="`base-chip--${color}`"
    :variant="variant"
    :size="size"
    :rounded="rounded"
  >
    <v-icon
      v-if="icon"
      :icon="icon"
      start
    />

    <slot />
  </v-chip>
</template>

<script setup lang="ts">
interface Props {
  color?: 'success' | 'warning' | 'error' | 'info'
  icon?: string
  variant?:
    | 'flat'
    | 'outlined'
    | 'elevated'
    | 'text'
    | 'tonal'
    | 'plain'
  rounded?: string | number | boolean
  size?:
    | 'x-small'
    | 'small'
    | 'default'
    | 'large'
    | 'x-large'
}

withDefaults(defineProps<Props>(), {
  color: 'success',
  icon: 'mdi-circle-medium',
  variant: 'outlined',
  rounded: 'pill',
  size: 'default',
})
</script>

<style scoped lang="scss">
.base-chip {
  font-weight: 600;
  border-width: 1px;
  backdrop-filter: blur(6px);
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;
}

/* =======================
   Success
======================= */

.base-chip--success {
  color: #21d07a;
  border-color: rgba(33, 208, 122, 0.35) !important;
  background: rgba(33, 208, 122, 0.08);

  :deep(.v-icon) {
    color: inherit;
  }
}

/* =======================
   Warning
======================= */

.base-chip--warning {
  color: #f5b942;
  border-color: rgba(245, 185, 66, 0.35) !important;
  background: rgba(245, 185, 66, 0.08);

  :deep(.v-icon) {
    color: inherit;
  }
}

/* =======================
   Error
======================= */

.base-chip--error {
  color: #ff6b6b;
  border-color: rgba(255, 107, 107, 0.35) !important;
  background: rgba(255, 107, 107, 0.08);

  :deep(.v-icon) {
    color: inherit;
  }
}

/* =======================
   Info
======================= */

.base-chip--info {
  color: #40c4ff;
  border-color: rgba(64, 196, 255, 0.35) !important;
  background: rgba(64, 196, 255, 0.08);

  :deep(.v-icon) {
    color: inherit;
  }
}
</style>
