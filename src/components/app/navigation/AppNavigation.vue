<template>
  <v-navigation-drawer
    class="bg-transparent above-everything"
    :style="style"
    :location="drawerLocation"
    @update:model-value="useNavStore.setDrawer"
    v-model="drawer">
    <v-card class="pa-0 ma-0 h-100 rounded-0 d-flex flex-column">
      <v-toolbar
        class="px-2 d-flex flex-shrink-1 flex-grow-0 bg-transparent"
        v-if="isMobile">
        <v-spacer></v-spacer>
        <v-hover v-if="isMobile">
          <template #default="{ isHovering, props }">
            <BaseBtn
              :class="`${isHovering ? 'bg-grey-lighten-5' : 'bg-default'}`"
              nuxt-icon="mdi:backburger"
              :nuxt-icon-alt="`${drawer ? 'Menu Opened' : 'Menu Closed'}`"
              v-bind="props"
              @click="useNavStore.toggleDrawer()" />
          </template>
        </v-hover>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text class="pa-2 d-flex flex-column flex-shrink-1 flex-grow-1">
        <v-list nav selectable>
          <v-list-item></v-list-item>
        </v-list>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-0 d-flex flex-column flex-shrink-1 flex-grow-0">
        <v-container fluid class="pa-2">
          <v-row>
            <v-col cols="12" class="d-flex">
              <v-spacer></v-spacer>
              Action btn's go here
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useDisplay } from "vuetify"

import { useNavigationStore } from "@/stores/navigation"

const display = useDisplay()
const useNavStore = useNavigationStore()

const isMobile = computed(() => display.smAndDown.value)
const drawer = computed(() => useNavStore.drawer)
const drawerLocation = computed(() => (isMobile.value ? "bottom" : "left"))
const style = computed(() => {
  if (drawer.value && isMobile.value) {
    return { height: "100vh" }
  }
  return {}
})
</script>
