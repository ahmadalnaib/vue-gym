<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase/init.js';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMsg = ref('');

const router = useRouter();

const login = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      throw new Error(error.message);
    }
    router.push({ name: 'Home' });
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
  }
};
</script>
<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- error Handling -->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!-- Register -->
    <form @submit.prevent="login" class="p-8 flex flex-col bg-light-grey shadow-lg">
      <h1 class="text-3xl text-at-light-green mb-4">Login</h1>
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm text-at-light-green"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          class="p-2 rounded-md text-gray-500 focus:outline-none"
          required
        />
      </div>
      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm text-at-light-green"
          >Password</label
        >
        <input
          type="password"
          id="password"
          v-model="password"
          class="p-2 rounded-md text-gray-500 focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
      >
        Login
      </button>
      <router-link :to="{ name: 'Register' }" class="mt-6 text-sm"
        >Don't have an account?
        <span class="text-at-light-green">Register</span></router-link
      >
    </form>
  </div>
</template>
