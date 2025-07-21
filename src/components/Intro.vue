<script lang="ts" setup>
import Button from './Button.vue';
import Text from './Text.vue';
import Title from './Title.vue';
</script>

<template>
  <main class="flex items-center gap-10 max-md:flex-col max-md:gap-1">
    <section class="flex flex-col gap-3">
      <Title as="h1">Hello, I'm Daniil.</Title>
      <Text
        >"I'm a certified expert in Notion, helping busy people like you be more
        organized and productive."</Text
      >
      <Text
        >I design and optimize Notion templates to be clutter-free, so you can
        focus on what's important and get things done</Text
      >
      <a href="https://cal.com/daniil-metelia/30min" target="_blank"
        ><Button
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
            />
          </svg>
          Book a call</Button
        ></a
      >
    </section>
    <img src="/face.png" alt="face" class="h-[300px] w-[300px]" />
  </main>
</template>
