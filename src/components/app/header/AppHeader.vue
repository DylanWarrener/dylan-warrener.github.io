<template>
  <v-app-bar
    class="px-2"
    color="blue-darken-3"
    elevation="0"
    scroll-behavior="hide">
    <span class="text-h4">Dylan Warrener</span>
    <v-spacer></v-spacer>
    <v-hover v-if="isMobile">
      <template #default="{ isHovering, props }">
        <BaseBtn
          nuxt-icon="mdi:hamburger-menu"
          :class="`${isHovering ? 'bg-grey-lighten-5' : 'bg-default'}`"
          :nuxt-icon-alt="nuxtIconAlt"
          v-bind="props"
          @click="toggleDrawer" />
      </template>
    </v-hover>
    <AppLinks v-else />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useNavDrawer } from "@/composables/useUI"

const display = useDisplay()
const navDrawer = useNavDrawer()

const isMobile = computed(() => display.smAndDown.value)
const nuxtIconAlt = computed(
  () => `${navDrawer.value ? "Menu Opened" : "Menu Closed"}`,
)

const toggleDrawer = () => (navDrawer.value = !navDrawer.value)
</script>
