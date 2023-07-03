<script setup lang="ts">
import { ref } from "vue";
import { CompassOutlined, UnorderedListOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedKeys = ref([
  window.location.pathname ? window.location.pathname : "/",
]);
</script>
<template>
  <a-layout class="layout">
    <a-layout-header>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/" class="menu-item" :onclick="() => router.push('/')"
          ><unordered-list-outlined style="margin: 0px 5px" />
          todoApp</a-menu-item
        >
        <a-menu-item
          key="/weather-app"
          :onclick="() => router.push('/weather-app')"
          ><compass-outlined style="margin: 0px 5px" /> Weather
          Detector</a-menu-item
        >
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>
<style scoped>
.menu-item {
  display: flex;
  align-items: center;
}
</style>
