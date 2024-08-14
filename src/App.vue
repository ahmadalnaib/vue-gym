<script setup>
import Navigation from './components/Navigation.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-full font-Poppins box-border">
    <Navigation />
    <RouterView />
  </div>
</template>

<style scoped></style>
