<template>
  <p :class="['text-[#32302c]', sizeMap[size], weightMap[weight]]">
    <slot />
  </p>
</template>

<script lang="ts" setup>
const sizeMap = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' };
const weightMap = {
  '400': 'font-normal',
  '500': 'font-medium',
  '600': 'font-semibold',
};

withDefaults(
  defineProps<{
    size?: keyof typeof sizeMap;
    weight?: keyof typeof weightMap;
  }>(),
  {
    size: 'base',
    weight: '400',
  },
);
</script>
