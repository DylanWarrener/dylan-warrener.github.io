<template>
  <v-app-bar class="px-4" color="blue-darken-3" elevation="0" scroll-behavior="hide">
    <NuxtLink class="text-inverted text-button text-decoration-none" to="/">
      Dylan Warrener
    </NuxtLink>
    <v-spacer></v-spacer>
    <v-hover v-if="isMobile">
      <template #default="{ isHovering, props }">
        <BaseBtn
          icon="mdi:hamburger-menu"
          :class="`${isHovering ? 'bg-grey-lighten-5' : 'bg-transparent'}`"
          :icon-alt="nuxtIconAlt"
          v-bind="props"
          @click="toggleDrawer" />
      </template>
    </v-hover>
    <AppLinks v-else class="mr-4" />
    <v-hover v-if="!isMobile">
      <template #default="{ isHovering, props }">
        <BaseBtn
          :class="`${isHovering ? 'bg-inverted text-default' : ''}`"
          variant="outlined"
          width="150"
          text="Download CV"
          v-bind="props" />
      </template>
    </v-hover>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useNavDrawer } from '@/composables/useUI'

const display = useDisplay()
const navDrawer = useNavDrawer()

const isMobile = computed(() => display.smAndDown.value)
const nuxtIconAlt = computed(() => `${navDrawer.value ? 'Menu Opened' : 'Menu Closed'}`)

const toggleDrawer = () => (navDrawer.value = !navDrawer.value)
</script>
