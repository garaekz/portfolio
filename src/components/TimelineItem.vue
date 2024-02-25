<script setup lang="ts">
import type { PropType } from 'vue';
import type { Experience } from '@/types/experience';

defineProps({
  item: {
    type: Object as PropType<Experience>,
    required: true,
  },
});

const parseDate = (date: string) => new Date(date).toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
});
</script>
<template>
    <div class="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
        <div
            class="flex items-center justify-center size-4 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 translate-x-3 lg:order-1 lg:group-odd:-translate-x-8 lg:group-even:translate-x-8">
        </div>
        <div class="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 rounded border-2 border-zinc-300">
            <div class="flex justify-between space-x-2 mb-1">
                <div class="text-zinc-900 dark:text-zinc-400 text-lg flex flex-col">
                    {{ item.company }}
                    <span class="font-light text-sm">{{ item.role }}</span>
                </div>
                <time class="text-emerald-600 dark:text-emerald-400"> {{ parseDate(item.startDate) }} - {{ item.endDate ? parseDate(item.endDate) : "Present" }}</time>
            </div>
            <p class="font-light">
                {{ item.description }}
            </p>
        </div>
    </div>
</template>