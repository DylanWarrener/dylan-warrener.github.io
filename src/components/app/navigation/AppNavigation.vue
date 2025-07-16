<template>
  <v-navigation-drawer
    temporary
    :style="{ height: `${navDrawer ? '100vh' : '0'}` }"
    class="bg-transparent above-everything"
    location="bottom"
    v-model="navDrawer">
    <v-card class="pa-0 ma-0 h-100 rounded-0 d-flex flex-column">
      <v-toolbar
        class="px-2 d-flex flex-shrink-1 flex-grow-0"
        color="blue-darken-3">
        <v-spacer></v-spacer>
        <v-hover>
          <template #default="{ isHovering, props: hoverProps }">
            <BaseBtn
              :class="`${isHovering ? 'bg-grey-lighten-5' : 'bg-default'}`"
              icon="mdi:backburger"
              :icon-alt="iconAlt"
              v-bind="hoverProps"
              @click="toggleDrawer" />
          </template>
        </v-hover>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text
        class="flex-shrink-1 flex-grow-1 pa-4 d-flex flex-column overflow-y-auto"
        style="border: 2px solid black">
        <AppLinks v-if="isMobile" class="flex-column align-center" />
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
import { useNavDrawer } from "@/composables/useUI"

const display = useDisplay()
const navDrawer = useNavDrawer()

const isMobile = computed(() => display.smAndDown.value)
const iconAlt = computed(
  () => `${navDrawer.value ? "Menu Opened" : "Menu Closed"}`,
)

const toggleDrawer = () => (navDrawer.value = !navDrawer.value)
</script>
