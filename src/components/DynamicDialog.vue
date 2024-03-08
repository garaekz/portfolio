<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
} from '@headlessui/vue';

defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    cancelText: {
        type: String,
        required: false,
        default: 'Close',
    },
    acceptText: {
        type: String,
        required: false,
    },
});

const emit = defineEmits(['close']);
</script>
<template>
    <TransitionRoot appear :show="open" as="template">
        <Dialog @close="() => emit('close')" as="aria-modal">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed z-10 inset-0 bg-black/50" />
            </TransitionChild>
            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-center justify-center min-h-full p-4 text-center">
                    <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-lg border-2 border-transparet bg-white dark:bg-zinc-950 dark:border-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-zinc-900 dark:text-zinc-100">
                                {{ title }}
                            </DialogTitle>
                            <DialogDescription v-if="description" as="p" class="text-zinc-700 dark:text-zinc-400">
                                {{ description }}
                            </DialogDescription>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    {{ content }}
                                </p>
                            </div>

                            <div class="flex gap-2 justify-end mt-4">
                                <button 
                                    v-if="cancelText"
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="() => emit('close')">
                                    {{ cancelText }}
                                </button>
                                <button 
                                    v-if="acceptText"
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="() => emit('close')">
                                    {{ acceptText }}
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>