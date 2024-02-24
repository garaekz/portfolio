<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
import { MoonIcon, SunIcon } from '@radix-icons/vue';
import { useRecaptchaProvider } from 'vue-recaptcha'
import { useRomanConverter } from '@/composables/roman';
import SVGLogo from './components/SVGLogo.vue';

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { romanYear, convertToRoman } = useRomanConverter();
const currentYear = new Date().getFullYear();
convertToRoman(currentYear);
useRecaptchaProvider()
</script>

<template>
  <div id="app" class="bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 min-h-screen">
    <div class="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="w-full flex justify-between items-center h-24">
        <RouterLink to="/" class="">
          <SVGLogo class="size-16 hover:scale-110" />
        </RouterLink>
        <nav class="flex gap-8">
          <RouterLink to="/" class="hover:scale-110 hover:text-zinc-500 dark:hover:text-zinc-300">
            ./home
          </RouterLink>
          <RouterLink to="/about" class="hover:scale-110 hover:text-zinc-500 dark:hover:text-zinc-300">
            ./about
          </RouterLink>
          <RouterLink to="/contact" class="hover:scale-110 hover:text-zinc-500 dark:hover:text-zinc-300">
            ./contact
          </RouterLink>
          <button @click="toggleDark()" class="hover:scale-125 hover:text-zinc-500 dark:hover:text-zinc-300">
            <SunIcon v-if="isDark" class="size-4" />
            <MoonIcon v-else class="size-4" />
          </button>
        </nav>
      </header>
      <RouterView />
    </div>
  </div>
  <div class="fixed origin-bottom-left bottom-6 left-10 flex items-center text-emerald-500 dark:text-emerald-300 -rotate-90">
    <div class="bg-emerald-400 w-20 mr-4 h-[1px]" />
    <p class="text-sm text-left font-extralight">
      &copy; {{ romanYear }} David Garay. All rights reserved.
    </p>
  </div>
</template>