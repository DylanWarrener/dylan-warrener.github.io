<template>
  <v-chip
    class="base-status-chip"
    :class="`base-status-chip--${color}`"
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
.base-status-chip {
  font-weight: 600;
  backdrop-filter: blur(6px);
  border-width: 1px;
}

/* Success */

.base-status-chip--success {
  color: #21d07a;
  border-color: rgba(33, 208, 122, 0.35) !important;
  background: rgba(33, 208, 122, 0.08);

  :deep(.v-icon) {
    color: #21d07a;
  }
}

/* Warning */

.base-status-chip--warning {
  color: #f5b942;
  border-color: rgba(245, 185, 66, 0.35) !important;
  background: rgba(245, 185, 66, 0.08);

  :deep(.v-icon) {
    color: #f5b942;
  }
}

/* Error */

.base-status-chip--error {
  color: #ff6b6b;
  border-color: rgba(255, 107, 107, 0.35) !important;
  background: rgba(255, 107, 107, 0.08);

  :deep(.v-icon) {
    color: #ff6b6b;
  }
}

/* Info */

.base-status-chip--info {
  color: #40c4ff;
  border-color: rgba(64, 196, 255, 0.35) !important;
  background: rgba(64, 196, 255, 0.08);

  :deep(.v-icon) {
    color: #40c4ff;
  }
}
</style>
