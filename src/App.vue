<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, RouterView } from 'vue-router';
import { useHead } from '@unhead/vue'
import { useDark, useToggle } from '@vueuse/core';
import { ArrowUpIcon, MoonIcon, SunIcon, Cross1Icon } from '@radix-icons/vue';
import { useRecaptchaProvider } from 'vue-recaptcha'
import { useRomanConverter } from '@/composables/roman';
import SVGLogo from './components/SVGLogo.vue';

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { romanYear, convertToRoman } = useRomanConverter();
const currentYear = new Date().getFullYear();
convertToRoman(currentYear);
useRecaptchaProvider()

const route = useRoute()

const computedTitle = computed(() => {
  switch (route.name) {
    case 'about':
      return 'About Me - David Garay';
    case 'contact':
      return 'Contact Me - David Garay';
    default:
      return 'David Garay - Senior Software Engineer';
  }
})

useHead({
  title: () => computedTitle.value
})

const menuList = [
  { name: 'Home', path: '#' },
  { name: 'About', path: '#about' },
  { name: 'Contact', path: '#contact' }
]
console.log(route)
const isMenuOpen = ref(false)
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value
</script>

<template>
  <div id="app" class="bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 min-h-screen">
    <div class="flex flex-col w-full max-w-7xl mx-auto px-6">
      <header class="w-full flex justify-between items-center h-20 sticky top-0 bg-gray-100 dark:bg-zinc-950 z-30">
        <a href="#" class="">
          <SVGLogo class="size-16 hover:scale-110" />
        </a>
        <div>
          <nav class="hidden md:flex gap-8">
            <a v-for="menu in menuList" :key="menu.name" :href="menu.path"
              :class="{
                'scale-110 text-emerald-600 dark:text-emerald-300': (route.hash === menu.path) || (menu.path === '#' && route.hash === '')
              }"
              class="hover:scale-110 hover:text-zinc-500 dark:hover:text-zinc-300 lowercase">
              {{ `./${menu.name}` }}
            </a>
            <button @click="toggleDark()" class="hover:scale-125 hover:text-zinc-500 dark:hover:text-zinc-300">
              <SunIcon v-if="isDark" class="size-4" />
              <MoonIcon v-else class="size-4" />
            </button>
          </nav>
          <transition enter-active-class="transition-opacity duration-500"
            leave-active-class="transition-opacity duration-300" enter-class="opacity-0" enter-to-class="opacity-100"
            leave-class="opacity-100" leave-to-class="opacity-0">
            <nav v-show="isMenuOpen"
              class="absolute gap-16 top-0 left-0 h-screen w-full bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 z-40">
              <button @click="toggleMenu" class="absolute top-8 right-4">
                <Cross1Icon class="size-8" />
              </button>
              <div class="flex flex-col justify-center items-center gap-16 h-screen">
                <a @click="toggleMenu" v-for="(menu, index) in menuList" :key="menu.name" :href="menu.path"
                  active-class="scale-1 text-emerald-600 dark:text-emerald-300"
                  :class="`transition-transform transform duration-500 delay-${index * 100} ease-in-out`"
                  class="hover:scale-110 hover:text-zinc-500 dark:hover:text-zinc-300 font-bold text-5xl">
                  {{ menu.name }}
                </a>
              </div>
            </nav>
          </transition>
          <div class="flex gap-8" :class="isMenuOpen ? 'hidden' : 'md:hidden'">
            <button @click="toggleDark()" class="hover:scale-125 hover:text-zinc-500 dark:hover:text-zinc-300">
            <SunIcon v-if="isDark" class="size-4" />
            <MoonIcon v-else class="size-4" />
          </button>
          <button @click="toggleMenu">
            <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          </div>
        </div>
      </header>
      <RouterView />
    </div>

    <footer class="min-h-20">
      <div
        class="flex py-8 md:py-0 md:fixed md:origin-bottom-left md:bottom-6 md:left-10 justify-center items-center text-emerald-500 dark:text-emerald-300 md:-rotate-90">
        <div class="hidden md:flex bg-emerald-400 w-20 mr-4 h-[1px]" />
        <p class="text-sm text-left font-extralight">
          &copy; {{ romanYear }} David Garay. All rights reserved.
        </p>
      </div>
      <!-- lets create a go up button at the other side fixed too -->
      <a
        href="#app"
        class="fixed z-50 origin-bottom-right bottom-5 right-5 justify-center items-center text-emerald-100 dark:text-emerald-300 bg-emerald-400 dark:bg-emerald-600 rounded p-2 hover:scale-110 transition-transform">
        <ArrowUpIcon class="size-6" />

      </a>
    </footer>
  </div>
</template>