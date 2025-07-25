<template>
  <section class="mt-6 flex flex-col gap-3">
    <Title as="h2">Experience</Title>
    <section class="flex flex-col gap-10">
      <div
        v-for="item in experience"
        :key="item.companyName"
        class="flex flex-col gap-2"
      >
        <div class="flex items-center gap-3">
          <a :href="item.url"
            ><img :src="item.iconUrl" :alt="item.companyName" class="h-12 w-12"
          /></a>
          <div class="flex flex-col">
            <Text size="sm" weight="500">{{ item.position }}</Text>
            <Text size="sm"
              >{{ item.companyName }} · {{ item.workType }} ·
              {{ item.cooperationType }}</Text
            >
            <Text size="sm">{{ item.period }}</Text>
          </div>
        </div>
        <Text size="sm">{{ item.summary }}</Text>
        <List :values="item.experience" />
        <div class="flex flex-wrap gap-1">
          <Text size="sm"
            ><span class="font-semibold">Skills:</span>
            {{ item.skills.join(', ') }}</Text
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import Title from '../shared/ui/kit/Title.vue';
import Text from '../shared/ui/kit/Text.vue';
import List from '../shared/ui/kit/List.vue';

const experience = [
  {
    iconUrl: '/images/companies/born2be.webp',
    url: 'https://www.linkedin.com/company/born2be.media/',
    position: 'Full Stack Developer',
    companyName: 'Born2Be',
    workType: 'Remote',
    cooperationType: 'Full-time',
    period: 'Feb 2025 - Present',
    summary:
      'I developed platforms for our clients from start to finish, handling everything from initial project setup to deployment and post-production support. This included configuring GitHub Actions for CI/CD, designing and building platforms from scratch and ensuring seamless operations. Notable projects include a multi-product platform for marketing courses and a FinTech platform for money transfers.',
    experience: [
      'Designed and developed a full-featured E-Commerce marketing platform from the scratch.',
      'Architected the database schema and applied domain expertise to optimize data structure and performance.',
      'Implemented GraphQL to streamline data fetching, reducing over-fetching and improving efficiency.',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'Zustand',
      'Radix UI',
      'Nest.js',
      'GraphQL',
      'PostgreSQL',
      'Payload CMS',
      'Docker',
    ],
  },
  {
    iconUrl: '/images/companies/graintrack.webp',
    url: 'https://www.linkedin.com/company/graintrack/',
    position: 'Full Stack Developer',
    companyName: 'Graintack',
    workType: 'Remote',
    cooperationType: 'Full-time',
    period: 'Jun 2024 - Feb 2025 · 9 mos',
    summary:
      'I was involved in the development of a new CTRM system based on an existing application. I contributed to the design of the new application architecture and built the front-end from scratch using React. I also implemented key features such as an Excel view for seamless data import/export and efficient data manipulation.',
    experience: [
      'Developed and implemented inline editing for a data grid, allowing users to modify values directly within the table. Focused on minimizing re-renders to optimize performance and improve the user experience.',
      'Developed and designed a view configurator that allows users to switch between different data display formats, such as table, list, or kanban board, using the adapter pattern to customize data.',
      'Developed a custom solution to interact with a spreadsheet like Excel (copy, paste, etc.) using the univer.js library.',
      'Developed and designed a data display tool using TanStack Table and TanStack Virtual for grid-based data visualisation',
      'Designed and implemented new modules in the application, ensuring a modular and maintainable architecture.',
      'Developed RESTful APIs for various modules, focusing on robust error handling, data validation, and adherence to REST principles.',
      'Used Test-Driven Development (TDD) to ensure robust and reliable code, writing extensive unit tests using Vitest.',
      'Developed declaratively the store layer using RxJS to implement a reactive behaviour model.',
      'Applied SOLID principles and clean code practices to component and system development, ensuring maintainability and scalability.',
      'Worked with the team to implement Domain-Driven Design (DDD) principles to ensure that our software architecture was closely aligned with business objectives.',
    ],
    skills: [
      'TypeScript',
      'React',
      'Tailwind',
      'Radix',
      'RxJS',
      'Vitest',
      'React Testing Library',
      'Nest.js',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    iconUrl: '/images/companies/nikcode.webp',
    url: 'https://www.linkedin.com/company/nikcode/',
    position: 'Front-end Developer',
    companyName: 'NikCode',
    workType: 'Remote',
    cooperationType: 'Contact',
    period: 'Mar 2024 - Jun 2024 · 4 mos',
    summary:
      'I contributed to an AI voice startup, developing a feature-rich platform with audio call tracking and building functionality to customize AI voice assistant logic. I implemented a system for building voice bot interactions using pre-built templates, improving efficiency and user experience.',
    experience: [
      'Implemented an auth service using next auth to provide secure authentication and authorization for the application.',
      'Developed an application from scratch using Isomorphic Furyroad template, Next.js 14 and Tailwind.',
      'Developed dashboards using recharts library to show users statistics about their issues, incoming calls, and other information.',
      'Used server actions and mutations in Next.js 14 to efficiently handle server-side logic and data mutations.',
      'Developed tables to help businesses to track customer issues with clients that occurred during a conversation with an agent and view recordings of conversations in text.',
      'Designed and developed a workspace for customizing bot logic using React Flow. Configured logic for linking between user-created blocks and adding new blocks. Implemented a template library that allows the user to create a flow using a pre-built template. Also created an integration library that allows the user to select or create a custom block that interacts with a third-party service.',
      'Developed a widget based on open source code in three.js that consists of a sphere that smoothly shimmers and warps as you speak and responds to speech.',
    ],
    skills: ['TypeScript, Next.js', 'Tailwind', 'Jotai', 'Docker'],
  },
  {
    iconUrl: '/images/companies/open-tech.webp',
    url: 'https://www.linkedin.com/company/open-tech-io/',
    position: 'Full Stack Developer',
    companyName: 'OpenTech',
    workType: 'On-site',
    cooperationType: 'Full-time',
    period: 'Jan 2023 - Jan 2024 · 1 yr 1 mo',
    summary:
      "I've worked on various outsourced projects of varying sizes, ranging from small startups to large enterprises. Notable projects include a booking platform for vacation homes in Europe and a large e-commerce platform for auto parts.",
    experience: [
      'Developed program logic for new applications based on fresh coding and revamped logic from existing applications.',
      'Adapted the user interface to meet the specific needs of the project, ensuring optimal accessibility and responsiveness of the application.',
      "Helped with integrating third-party APIs and services to enhance the web application's functionality.",
      "Implement new pages according to customer's design and requirements using React.",
      'Optimized the web application for speed and performance using techniques such as code splitting and lazy loading, thereby reducing response time by 30% and improving the client experience.',
      'Migrated entities from Next API to Express.js proxy server, resulting in a 20% increase in request speed.',
      'Designed user-friendly applications using modern UI kits such as Material UI, Ant Design etc.',
      'Implemented comprehensive SEO best practices across website content, metadata, and technical structure.',
    ],
    skills: [
      'TypeScript',
      'React',
      'Next.js',
      'Material UI',
      'Ant Design',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'MobX',
      'Redux Toolkit',
    ],
  },
];
</script>
