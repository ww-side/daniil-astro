<template>
  <p
    :class="[
      'font-normal text-[#32302c]',
      {
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-base': size === 'base',
        'font-normal': weight === '400',
        'font-semibold': weight === '500',
      },
    ]"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
type Props = {
  size?: 'xs' | 'sm' | 'base';
  weight?: '400' | '500';
};

withDefaults(defineProps<Props>(), {
  size: 'base',
  weight: '400',
});
</script>
