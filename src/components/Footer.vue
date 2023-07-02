<script setup lang="ts"></script>
<template>
  <a-layout-footer class="footer">
    <div class="language-image-container">
      <div>
        <img :width="30" src="../assets/IRflag.png" alt="Iran flag" />
      </div>
      <div>
        <img :width="30" src="../assets/USflag.png" alt="USA flag" />
      </div>
    </div>
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
.language-image-container img {
  margin: 0px 10px;
  cursor: pointer;
}
</style>
