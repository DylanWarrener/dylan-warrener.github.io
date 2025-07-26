<template>
  <div class="d-flex flex-column align-start ga-4" style="border: 4px solid red">
    <!------------ Base Buttons ------------>
    <div class="w-100 d-flex flex-column justify-center" style="border: 4px solid blue">
      <p class="text-center">Base Buttons</p>
      <br />
      <div class="d-flex flex-wrap justify-center ga-4" style="border: 4px solid green">
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 4px solid orange">
          <p>Button Text</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <BaseBtn
                text="Normal Button"
                :class="`bg-primary ${isHovering ? 'bg-secondary' : ''}`"
                v-bind="props" />
            </template>
          </v-hover>
        </div>
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 4px solid yellow">
          <p>Button Icon</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <BaseBtn
                icon="mdi-home"
                variant="flat"
                :class="`${isHovering ? 'bg-secondary' : 'bg-primary'}`"
                v-bind="props" />
            </template>
          </v-hover>
        </div>
      </div>
    </div>

    <!-- Specific Buttons -->
    <div class="w-100 d-flex flex-column justify-center" style="border: 4px solid blue">
      <p class="text-center">Specific Buttons</p>
      <br />
      <div class="d-flex flex-wrap justify-center ga-4" style="border: 4px solid green">
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 4px solid orange">
          <p>To a Section</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <BaseBtn
                variant="flat"
                size="small"
                text="Normal Button"
                :class="`${isHovering ? 'bg-secondary' : 'bg-primary'}`"
                v-bind="props" />
            </template>
          </v-hover>
        </div>
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 4px solid orange">
          <p>To a Page</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <BaseBtn
                variant="flat"
                size="small"
                text="To Page"
                icon-append="mdi-arrow-right"
                :icon-append-class="`btn-icon-transition ${isHovering ? 'btn-icon-move' : ''}`"
                :class="`${isHovering ? 'bg-secondary' : 'bg-primary'}`"
                v-bind="props" />
            </template>
          </v-hover>
        </div>
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 4px solid orange">
          <p>Back to Top</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <BaseBtn
                icon="mdi-chevron-up"
                variant="flat"
                size="x-small"
                :class="`${isHovering ? 'bg-secondary' : 'bg-primary'}`"
                v-bind="props" />
            </template>
          </v-hover>
        </div>
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 4px solid orange">
          <p>Social Button</p>
          <div v-for="(svg, index) in socials" :key="index">
            <v-hover>
              <template #default="{ isHovering, props }">
                <BaseBtn
                  rel="noopener"
                  target="_blank"
                  variant="flat"
                  size="x-small"
                  :aria-label="svg.alt"
                  :href="svg.href"
                  :class="`mb-2 ${isHovering ? 'bg-secondary' : 'bg-primary'}`"
                  :nuxt-icon="svg.icon"
                  :nuxt-icon-alt="svg.alt"
                  v-bind="props" />
              </template>
            </v-hover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const socials = reactive([
  {
    icon: 'mdi:facebook',
    alt: 'Facebook Logo Icon',
    href: 'https://www.facebook.com/profile.php?id=61551522434899',
  },
  {
    icon: 'mdi:instagram',
    alt: 'Instagram logo icon',
    href: 'https://www.instagram.com/dylanswork/',
  },
  {
    icon: 'mdi:youtube',
    alt: 'YouTube logo icon',
    href: 'https://www.youtube.com/@dylanwarrener5857',
  },
  {
    icon: 'mdi:linkedin',
    alt: 'LinkedIn logo icon',
    href: 'https://www.linkedin.com/in/dylan-w-a523a112a/',
  },
])
</script>

<style scoped></style>
