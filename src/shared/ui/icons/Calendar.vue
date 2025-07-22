<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    :class="['h-5 w-5', className]"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    className?: string;
  }>(),
  {
    className: '',
  },
);
</script>
