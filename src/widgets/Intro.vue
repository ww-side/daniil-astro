<template>
  <main class="flex items-center gap-10 max-md:flex-col max-md:gap-1">
    <section class="flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <a
          v-for="social in socials"
          :key="social.url"
          :href="social.url"
          target="_blank"
          ><component :is="social.icon"
        /></a>
      </div>
      <Title as="h1">Hello, I'm Daniil.</Title>
      <Text
        >"I thrive on developing robust, scalable, and maintainable web
        applications that drive business success."</Text
      >
      <Text
        >I maintain a strong focus on clean, testable code and efficient
        architecture. My goal is to work with teams on long-term projects,
        promote a cohesive team environment, and apply my knowledge to
        projects.</Text
      >
      <a
        href="https://cal.com/daniil-metelia/30min"
        class="w-max"
        target="_blank"
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
import GitHubIcon from '../shared/ui/icons/GitHub.vue';
import LinkedInIcon from '../shared/ui/icons/LinkedIn.vue';
import TelegramIcon from '../shared/ui/icons/Telegram.vue';

const socials = [
  { url: 'https://github.com/ww-side', icon: GitHubIcon },
  { url: 'https://www.linkedin.com/in/daniil-metelia/', icon: LinkedInIcon },
  { url: 'https://t.me/side_culture', icon: TelegramIcon },
];
</script>
