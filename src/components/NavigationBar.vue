<script setup lang="ts">
import { ref } from "vue";
import { CompassOutlined, UnorderedListOutlined } from "@ant-design/icons-vue";

const selectedKeys = ref(["todoApp"]);
const asghar = 2;
</script>
<template>
  <a-layout class="layout">
    <a-layout-header>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        :onchange="(e:any) => console.log(e)"
      >
        <a-menu-item key="todoApp" class="menu-item"
          ><unordered-list-outlined style="margin: 0px 5px" />
          todoApp</a-menu-item
        >
        <a-menu-item key="weatherDetector"
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
