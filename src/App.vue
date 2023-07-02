<script setup>
import { ref } from "vue";
import NavigationBar from "./components/NavigationBar.vue";
import TodoApp from "./components/TodoApp.vue";
import Footer from "./components/Footer.vue";
import { createWebHistory, createRouter } from "vue-router";
</script>

<template>
  <NavigationBar />
  <router-view :key="$route.path" />
  <Footer />
</template>

<style scoped></style>
