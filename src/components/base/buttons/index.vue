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
    <small
      :class="textClass"
      :style="textStyle"
      v-text="text"
      v-if="text"></small>
    <v-icon
      :class="iconClass"
      :color="iconColor"
      :icon="icon"
      v-if="icon"></v-icon>
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
