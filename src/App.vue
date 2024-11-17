<script setup>
import AppHeader from "./components/AppHeader.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <app-header></app-header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
