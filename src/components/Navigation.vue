<script setup>
import { RouterLink } from 'vue-router';
import { supabase } from '../supabase/init';
import { store } from '../store/index';
import {useRouter} from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

const logout = async () => {
  await supabase.auth.signOut();
  router.push({ name: 'Login' });
};
const isLoggedIn = computed(() => store.state.user !== null);

</script>

<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
        <img src="../assets/images/dumbbell-light.png" alt="Logo" class="w-14" />
        <h1 class="text-lg">Active Tracker</h1>
      </div>

      <ul class="flex flex-1 justify-end gap-x-10">
        <RouterLink class="cursor-pointer" :to="{ name: 'Home' }">Home</RouterLink>

        <RouterLink v-if="isLoggedIn" class="cursor-pointer" :to="{ name: '' }">Create</RouterLink>
        <RouterLink  class="cursor-pointer" :to="{ name: 'Login' }">Login</RouterLink>
        <li v-if="isLoggedIn" @click="logout" class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>