<template>
  <div :class="`d-flex ga-4 ${computed_class}`" style="border: 2px solid red">
    <v-hover :key="index" v-for="(navItem, index) in navLinks">
      <template #default="{ props }">
        <BaseBtn
          class="text-default"
          style="border: 2px solid blue"
          width="150"
          prepend-icon-size="24"
          :prepend-icon="navItem.prependIcon"
          :text="navItem.text"
          :to="navItem.link"
          v-bind="props" />
      </template>
    </v-hover>
  </div>
</template>

<script setup lang="ts">
const navLinks = useNavLinks()

const props = defineProps({
  class: { type: String, required: false },
})

const computed_class = computed(() => {
  const arr: string[] = []
  if (props.class) arr.push(props.class)
  return arr.join(" ")
})
</script>
