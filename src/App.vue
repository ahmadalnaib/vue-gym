<script setup>
import { ref } from 'vue';
import { supabase } from './supabase/init';
import { store } from './store/index';
import Navigation from './components/Navigation.vue';
import { RouterLink, RouterView } from 'vue-router';

const appReady = ref(null);

const user = supabase.auth.getUser();
if (!user) {
  appReady.value = true;
}
supabase.auth.onAuthStateChange((_, session) => {
  store.methods.setUser(session);
  appReady.value = true;
});
</script>

<template>
  <div v-if="appReady" class="min-h-full font-Poppins box-border">
    <Navigation />
    <RouterView />
  </div>
</template>

<style scoped></style>
