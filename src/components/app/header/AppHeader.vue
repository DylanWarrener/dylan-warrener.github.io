<template>
  <v-app-bar
    class="px-2"
    elevation="0"
    scroll-behavior="hide"
    density="comfortable">
    <span class="text-h4">Dylan Warrener</span>
    <v-divider vertical class="my-4 px-2"></v-divider>
    <v-hover>
      <template #default="{ isHovering, props }">
        <BaseBtn
          :class="`${isHovering ? 'bg-grey-lighten-5' : 'bg-default'}`"
          :nuxt-icon="menuIcon"
          :nuxt-icon-alt="`${useNavStore.drawer ? 'Menu Opened' : 'Menu Closed'}`"
          v-bind="props"
          @click="useNavStore.toggleDrawer()" />
      </template>
    </v-hover>
    <v-spacer></v-spacer>
    <v-hover :key="index" v-for="(navItem, index) in navItems">
      <template #default="{ isHovering, props }">
        <BaseBtn class="text-default" :text="navItem.text" v-bind="props" />
      </template>
    </v-hover>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useDisplay } from "vuetify"
import { useNavigationStore } from "@/stores/navigation"

const display = useDisplay()

const useNavStore = useNavigationStore()

const navItems = ref([
  {
    text: "Pojects",
    link: "/projects",
  },
  {
    text: "Skills",
    link: "/skills",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "/contact",
  },
])

const isMobile = computed(() => display.smAndDown.value)
const menuIcon = computed(() => {
  if (!isMobile.value && useNavStore.drawer) return "mdi:backburger"
  return "mdi:hamburger-menu"
})
</script>
