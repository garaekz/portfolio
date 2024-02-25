<script setup lang="ts">
</script>

<template>
  <main class="my-10 lg:my-40 w-full flex flex-col-reverse lg:flex-row">
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 md:px-14">
      <h1 class="text-4xl md:text-6xl">
        Hi!👋 You can call me <span class="text-emerald-500 dark:text-emerald-300 font-bold text-6xl md:text-7xl">David</span>!
      </h1>
      <p class="text-2xl mt-4">
        I'm a <span class="text-zinc-400 dark:text-slate-300 font-bold">Senior Software Engineer</span> and <span
          class="text-zinc-400 dark:text-slate-300 font-bold">Laravel Expert</span> from <span
          class="text-emerald-500 dark:text-emerald-300 font-bold">México 🌮🌵</span>
      </p>
    </div>
    <div class="w-full lg:w-1/2">
      <div class="flex justify-center lg:justify-end relative w-full h-full pb-20">
        <img src="@/assets/logo.svg" alt="David Logo" class="size-72 md:size-80 lg:size-96 rounded-3xl object-cover z-[1]" />
        <div class="hidden md:flex rounded-3xl size-72 md:size-80 lg:size-96 absolute top-16 right-[36%] lg:right-[4.5rem] dark:bg-emerald-700 bg-emerald-300" />
        <div class="hidden md:flex rounded-3xl size-72 md:size-80 lg:size-96 absolute top-10 right-[34%] lg:right-12 dark:bg-emerald-800 bg-emerald-400" />
        <div class="hidden md:flex rounded-3xl size-72 md:size-80 lg:size-96 absolute top-5 right-[31%] lg:right-6 dark:bg-emerald-900 bg-emerald-500" />
      </div>
    </div>
  </main>
  <div class="relative h-[15rem] flex flex-col items-center mt-10 lg:mt-0">
    <a href="#laravel"
      class="animate-bounce bg-white dark:bg-zinc-800 p-2 w-10 h-10 ring-1 ring-zinc-900/5 dark:ring-zinc-200/20 shadow-lg rounded-full flex items-center justify-center">
      <svg class="w-6 h-6 text-emerald-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </a>
    <div class="absolute left-[50%] top-14 w-px h-full bg-current opacity-45"></div>
  </div>
  <section id="laravel" class="px-6 md:px-14">
    <div class="w-full md:w-1/2 flex flex-col mt-40 mb-28">
      <h2 class="text-6xl font-bold"><span class="text-emerald-400 dark:text-emerald-300 font-bold">Laravel</span> Expert</h2>
      <p class="text-xl mt-4">
        I've been working with Laravel for over 8 years now. I've built a lot of projects with it focusing on escability,
        performance and security. I have lots of experience with Laravel ecosystem, testing practices, queues, commands,
        and design patterns.
      </p>
    </div>
  </section>
  <div class="relative h-[10rem] flex flex-col items-center">
    <div class="absolute left-[50%] top-0 w-px h-full bg-current opacity-45"></div>
  </div>
  <section id="vue" class="w-full flex flex-col items-end px-6 md:px-14">
    <div class="w-full md:w-1/2 flex flex-col my-12">
      <h2 class="text-6xl font-bold text-right"><span class="text-emerald-400 dark:text-emerald-300 font-bold">Vue.js</span> and <span class="text-emerald-400 dark:text-emerald-300 font-bold">TailwindCSS</span> Lover</h2>
      <p class="text-xl mt-4 text-right">
        What do you use to complement your Laravel projects? Vue.js and TailwindCSS are my go-to tools. I've been working
        with Vue.js for over 7 years now, I just love how it integrates with Laravel. TailwindCSS is my favorite CSS
        framework, I love how it helps me
        to build beautiful and responsive UIs with ease.
      </p>
    </div>
  </section>
  <div class="relative h-[10rem] flex flex-col items-center">
    <div class="absolute left-[50%] top-0 w-px h-full bg-current opacity-45"></div>
  </div>
  <section id="more" class="px-6 md:px-14">
    <div class="w-full md:w-1/2 flex flex-col my-12">
      <h2 class="text-6xl font-bold">Want to know me better?</h2>
      <p class="text-xl mt-4">
        You can see my linkedin profile, my github repositories, or just send me an email. I'm always open to new projects. Or you can navigate to my about page to know more about me.
      </p>
      <div class="my-12">
        <RouterLink to="/about" class="text-xl text-emerald-400 dark:text-emerald-300 py-4 px-8 rounded-2xl border-2 border-emerald-400 dark:border-emerald-300 mt-4 hover:text-emerald-500 hover:border-emerald-500">
        About me
      </RouterLink>
      </div>
    </div>
  </section>
</template>
