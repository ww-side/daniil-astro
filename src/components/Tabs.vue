<template>
  <div class="tabs">
    <div class="tab-headers flex gap-2">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="activeTab = tab.value"
        class="rounded-md px-2 py-1 transition"
        :class="
          activeTab === tab.value
            ? 'bg-[#f2f2f3] font-medium text-black'
            : 'bg-transparent text-gray-500 hover:bg-gray-100'
        "
      >
        <span class="flex items-center gap-2 text-sm">
          <component :is="tab.icon" v-if="tab.icon" class="h-4 w-4" />
          {{ tab.label }}
        </span>
      </button>
    </div>
    <div class="tab-content mt-4">
      <slot :name="activeTab"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const activeTab = ref(props.tabs[0]?.value || '');
</script>
