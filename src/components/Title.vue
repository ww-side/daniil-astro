<template>
  <component :is="as" :class="computedClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type TitleProps = {
  as?: keyof HTMLElementTagNameMap;
  className?: string;
};

const props = withDefaults(defineProps<TitleProps>(), {
  as: 'h2',
  capitalize: false,
});

const titleVariants = (opts: { as?: string }) => {
  const classes = [];
  if (opts.as === 'h1') classes.push('text-4xl');
  if (opts.as === 'h2') classes.push('text-2xl');
  return classes.join(' ');
};

const computedClass = computed(
  () => `${titleVariants({ as: props.as })} font-bold text-[#32302c]`,
);
</script>
