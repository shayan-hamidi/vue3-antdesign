<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavigationBar />
  <router-view :key="$route.path" />
  <Footer />
</template>

<style scoped></style>
