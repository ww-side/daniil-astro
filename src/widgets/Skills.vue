<template>
  <section class="flex flex-col gap-3">
    <Title as="h2">Skills</Title>
    <Tabs :tabs="tabItems">
      <template #software>
        <div class="grid grid-cols-4 gap-3 max-md:grid-cols-2">
          <Chip v-for="software in software" :key="software.name">
            {{ software.name }}
          </Chip>
        </div>
      </template>
      <template #expertise>
        <div class="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          <Chip
            v-for="expertise in expertise"
            :key="expertise.name"
            class="cursor-pointer"
            @click="downloadFile(expertise.url)"
          >
            {{ expertise.name }}
            <DownloadIcon />
          </Chip>
        </div>
      </template>
      <template #language>
        <section class="flex items-center gap-3">
          <Chip v-for="language in languages" :key="language.name">
            {{ language.name }} - {{ language.level }}
          </Chip>
        </section>
      </template>
    </Tabs>
  </section>
</template>

<script lang="ts" setup>
import Tabs from '../shared/ui/kit/Tabs.vue';
import Chip from '../shared/ui/kit/Chip.vue';
import Title from '../shared/ui/kit/Title.vue';
import { downloadFile } from '../shared/lib/utils/download-file';
import DownloadIcon from '../shared/ui/icons/Download.vue';

const tabItems = [
  { label: 'Software', value: 'software' },
  { label: 'Expertise', value: 'expertise' },
  { label: 'Language', value: 'language' },
];

const expertise = [
  {
    url: '/files/certificate-javascript-fwdays-2025.pdf',
    name: 'JavaScript fwdays’25 conference',
  },
];

const languages = [
  { name: 'English', level: 'B2' },
  { name: 'Ukrainian', level: 'Native' },
];

const software = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next' },
  { name: 'Angular' },
  { name: 'Redux' },
  { name: 'MobX' },
  { name: 'Zustand' },
  { name: 'Jotai' },
  { name: 'RxJS' },
  { name: 'NodeJS' },
  { name: 'Express' },
  { name: 'Nest' },
  { name: 'GraphQL' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB' },
  { name: 'Jest' },
  { name: 'Vitest' },
  { name: 'React Testing Lib.' },
  { name: 'Git' },
  { name: 'GitHub Actions' },
  { name: 'Docker' },
  { name: 'SCSS/SASS' },
  { name: 'Tailwind' },
  { name: 'Material UI' },
  { name: 'Ant Design' },
];
</script>
