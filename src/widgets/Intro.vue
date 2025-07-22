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
        ><Button><CalendarIcon /> Book a call</Button></a
      >
    </section>
    <img src="/face.png" alt="face" class="h-[300px] w-[300px]" />
  </main>
</template>

<script lang="ts" setup>
import Button from '../shared/ui/kit/Button.vue';
import Text from '../shared/ui/kit/Text.vue';
import Title from '../shared/ui/kit/Title.vue';
import CalendarIcon from '../shared/ui/icons/Calendar.vue';
</script>
