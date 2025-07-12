<template>
  <div
    class="d-flex flex-column align-start ga-4"
    style="border: 2px solid red">
    <!------------ Base Buttons ------------>
    <div
      class="w-100 d-flex flex-column justify-center"
      style="border: 2px solid blue">
      <p class="text-center">Base Buttons</p>
      <br />
      <div
        class="d-flex flex-wrap justify-center ga-4"
        style="border: 2px solid green">
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 2px solid orange">
          <p>Button Text</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-btn
                variant="flat"
                size="small"
                :class="`bg-primary ${isHovering ? 'bg-secondary' : ''}`"
                v-bind="props">
                <span>Normal Button</span>
              </v-btn>
            </template>
          </v-hover>
        </div>
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 2px solid yellow">
          <p>Button Icon</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-btn
                icon
                variant="flat"
                size="x-small"
                :class="`bg-primary ${isHovering ? 'bg-secondary' : ''}`"
                v-bind="props">
                <v-icon>mdi-home</v-icon>
              </v-btn>
            </template>
          </v-hover>
        </div>
      </div>
    </div>

    <!-- Specific Buttons -->
    <div
      class="w-100 d-flex flex-column justify-center"
      style="border: 2px solid blue">
      <p class="text-center">Specific Buttons</p>
      <br />
      <div
        class="d-flex flex-wrap justify-center ga-4"
        style="border: 2px solid green">
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 2px solid orange">
          <p>To a Section</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-btn
                variant="flat"
                size="small"
                :class="`${isHovering ? 'bg-secondary' : 'bg-primary'}`"
                v-bind="props">
                <span>Normal Button</span>
              </v-btn>
            </template>
          </v-hover>
        </div>
        <div
          class="d-flex flex-column justify-center align-center"
          style="border: 2px solid orange">
          <p>To a Page</p>
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-btn
                variant="flat"
                size="small"
                :class="`${isHovering ? 'bg-secondary' : 'bg-primary'}`"
                v-bind="props">
                <span>To Page</span>
                <template #append>
                  <v-icon
                    :class="`btn-icon-transition ${isHovering ? 'btn-icon-move' : ''}`">
                    mdi-arrow-right
                  </v-icon>
                </template>
              </v-btn>
            </template>
          </v-hover>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
