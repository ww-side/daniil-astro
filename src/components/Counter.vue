<template>
  <div class="flex flex-col items-center gap-4">
    <p class="text-xl font-bold">Count: {{ count }}</p>
    <button
      class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      @click="count++"
    >
      Increment
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
</script>
