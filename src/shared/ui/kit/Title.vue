<template>
  <component
    :is="as"
    :class="['font-bold text-[#32302c]', variantClass, className]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type TitleProps = {
  as?: keyof Pick<HTMLElementTagNameMap, 'h1' | 'h2'>;
  className?: string;
};

const props = withDefaults(defineProps<TitleProps>(), {
  as: 'h2',
  className: '',
});

const variantMap: Record<
  keyof Pick<HTMLElementTagNameMap, 'h1' | 'h2'>,
  string
> = {
  h1: 'text-4xl',
  h2: 'text-2xl',
};

const variantClass = computed(() => variantMap[props.as] ?? 'text-base');
</script>
