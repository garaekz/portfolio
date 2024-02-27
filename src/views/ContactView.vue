<script setup lang="ts">
import { ref } from 'vue';
import { useChallengeV2 } from 'vue-recaptcha'
import emailjs from '@emailjs/browser';

const cleanForm = {
  name: '',
  email: '',
  message: '',
};

const { root, execute, onVerify } = useChallengeV2({
  options: {
    size: 'invisible',
  }
})

const form = ref(cleanForm);
const sending = ref<boolean>(false);

onVerify(async (response) => {
  sending.value = true;

  const { name, email, message } = form.value;
  if (!name || !email || !message) {
    alert('Please, fill all the fields');
    return;
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    'g-recaptcha-response': response,
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );
    alert('Message sent successfully!');
    form.value = cleanForm;
  } catch (error) {
    alert('An error occurred while sending the message');
  } finally {
    sending.value = false;
  }
})
</script>
<template>
  <main class="mt-10 md:mt-20 px-2 md:px-12">
    <h1 class="text-6xl font-bold">
      Contact Me<span class="text-7xl text-emerald-400">.</span>
    </h1>
    <p class="text-2xl mt-4">
      Leave me a message and I'll get back to you as soon as possible.
    </p>
    <form class="mt-20" netlify>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col md:flex-row w-full gap-4 md:gap-6">
          <div class="flex flex-col gap-2 w-full">
            <label for="name" class="text-xl">Name</label>
            <input type="text" id="name" v-model="form.name" placeholder="John Doe"
              class="p-4 rounded bg-transparent border-2 border-zinc-800 dark:border-zinc-200" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="email" class="text-xl">Email</label>
            <input type="email" id="email" v-model="form.email" placeholder="john@doe.io"
              class="p-4 rounded bg-transparent border-2 border-zinc-800 dark:border-zinc-200" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="message" class="text-xl">Message</label>
          <textarea id="message" v-model="form.message" rows="10"
            class="p-4 rounded bg-transparent border-2 border-zinc-800 dark:border-zinc-200"
            placeholder="Please, explain in detail the purpose of this message. I'll get back to you as soon as possible."></textarea>
        </div>
        <div>
          <button v-if="!sending" type="submit"
            class="bg-transparent border-2 border-zinc-800 dark:border-zinc-200 text-zinc-800 dark:text-zinc-200 p-4 rounded-lg hover:scale-105 transition-transform hover:border-emerald-500 hover:text-emerald-500 dark:hover:border-emerald-300 dark:hover:text-emerald-300">
            Send Message
          </button>
          <button v-else disabled
            class="bg-zinc-600/10 dark:bg-zinc-200/10 border-2 border-zinc-400 dark:border-zinc-500 text-zinc-400 dark:text-zinc-500 p-4 rounded-lg cursor-not-allowed flex items-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-600 dark:text-zinc-500"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg> Sending Message
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

