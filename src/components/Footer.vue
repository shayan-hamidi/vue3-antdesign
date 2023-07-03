<script setup lang="ts">
import { ref } from "vue";

const lng = ref<any>("USflag");
</script>
<template>
  <a-layout-footer class="footer">
    <a-radio-group v-model:value="lng" class="language-image-container">
      <a-radio-button class="language-button" value="IRflag"
        ><img :width="30" src="../assets/IRflag.png" alt="Iran flag"
      /></a-radio-button>
      <a-radio-button value="USflag"
        ><img :width="30" src="../assets/USflag.png" alt="USA flag"
      /></a-radio-button>
    </a-radio-group>
  </a-layout-footer>
</template>
<style scoped>
.footer {
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
}
.language-image-container {
  display: flex;
}
.language-button {
  margin: 0px 10px;
  cursor: pointer;
}
</style>
