<template>
  <v-row>
    <HomeHero />
    <HomeCredibility />
    <HomeFeaturedProjects />
    <HomeHowIWork />
    <HomeNow />
    <HomeContact />
  </v-row>
</template>

<script setup lang="ts">
//const display = useDisplay()

useHead({
  title: 'Home',
})

//const isMobile = computed(() => display.smAndDown.value)

/*
<div
          :style="isMobile ? { height: '100dvh' } : { height: '40vh' }"
          class="d-flex justify-center align-center">
          <v-card class="pa-4 d-flex flex-column ga-4">
            <v-card-text>
              <h1 class="text-h1 text-center">Full-Stack Developer | Cloud & AI Specialist</h1>
              <p class="text-subtitle">
                I build modern web solutions with cloud and AI integration—no project is too
                challenging. Let’s bring your ideas to life.
              </p>
            </v-card-text>
            <v-card-actions
              class="px-4 py-0 d-flex justify-center ga-4"
              style="border: 4px solid purple">
              <BaseBtn width="150" bg-blue class="bg-blue" text="See my Work" />
              <v-hover v-if="!isMobile">
                <template #default="{ isHovering, props }">
                  <BaseBtn
                    :class="`${isHovering ? 'bg-blue' : ''}`"
                    variant="outlined"
                    width="150"
                    text="Let’s Talk"
                    v-bind="props" />
                </template>
              </v-hover>
            </v-card-actions>
          </v-card>
        </div>
*/

/*
<!-- Hero Section -->
  <v-row dense style="border: 4px solid red">
    <v-col class="pa-0" style="border: 4px solid blue">Hero Section</v-col>
  </v-row>

  <!-- The Rest -->
  <v-row dense style="border: 4px solid red">
    <v-col class="pa-0" style="border: 4px solid blue">
      <v-container style="border: 4px solid black">
        <v-row style="border: 4px solid red">
          <v-col style="border: 4px solid blue"> Recent Projects Section </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
*/
</script>
