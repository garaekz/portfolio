<script setup lang="ts">
import ExperienceTimeline from '@/components/ExperienceTimeline.vue';


</script>
<template>
  <div class="px-4 md:px-8 lg:px-12">
    <main class="mt-40">
      <h1 class="text-6xl font-bold">
        About Me<span class="text-7xl text-emerald-400">.</span>
      </h1>
      <p class="text-2xl mt-4">
        I am a Software Engineer from Tijuana, Mexico, passionate about development and technology since 2006. My
        professional career began in 2016, specializing in web development with Laravel, with which I have over 8 years of
        experience. I quickly adopted Vue.js and TailwindCSS, loving the seamless integration and ease of creating
        responsive and attractive interfaces. Although I started with Python, my curiosity led me to explore various
        technologies like Ruby on Rails, Node.js, React, and Svelte.
      </p>
      <p class="text-2xl mt-4">
        In 2019, I embarked on a new adventure with Go, appreciating its efficiency in developing fast and reliable
        services, as well as its synergy with Docker and Kubernetes. I am continually looking to expand my knowledge in Go
        and other technologies, driven by my love for learning and continuous improvement.
      </p>
    </main>
    <section id="skills" class="w-full flex flex-col mt-20">
      <div class="w-full flex flex-col my-12">
        <h2 class="text-6xl text-emerald-600 dark:text-emerald-300 font-bold">Skills<span
            class="text-7xl text-zinc-400 dark:text-gray-300 font-bold">.</span></h2>
        <p class="text-2xl mt-4 mb-8">
          What can I do and using what<span class="text-3xl text-emerald-600 dark:text-emerald-400">?</span>  
        </p>
        <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div>
            <h3 class="text-4xl font-bold">Languages</h3>
            <ul class="text-2xl mt-4">
              <li>PHP</li>
              <li>TypeScript</li>
              <li>Go</li>
              <li>Python <span class="text-sm text-emerald-400">(Basic)</span></li>
              <li>Ruby <span class="text-sm text-emerald-400">(Basic)</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-4xl font-bold">Frameworks</h3>
            <ul class="text-2xl mt-4">
              <li>Laravel</li>
              <li>Vue.js</li>
              <li>TailwindCSS</li>
              <li>React</li>
              <li>Ruby on Rails <span class="text-sm text-emerald-400">(Basic)</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-4xl font-bold">Databases</h3>
            <ul class="text-2xl mt-4">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
          <div>
            <h3 class="text-4xl font-bold">Soft Skills</h3>
            <ul class="text-2xl mt-4">
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>English Proficient <span class="text-emerald-400">(C2)</span></li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="experience" class="w-full flex flex-col">
      <div class="w-full flex flex-col my-12">
        <h2 class="text-6xl font-bold">Experience<span
            class="text-7xl text-emerald-400">.</span></h2>
      </div>
      <experience-timeline />
    </section>
  </div>
</template>

