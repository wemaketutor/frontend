<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <app-header></app-header>

  <main>
    <router-view></router-view>
  </main>

  <app-footer></app-footer>
</template>

<style scoped>

</style>
