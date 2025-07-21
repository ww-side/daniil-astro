<template>
  <ul class="list-inside list-disc">
    <li
      v-for="item in props.values"
      :key="item"
      class="text-base text-[#32302c]"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  values: string[];
}>();
</script>
