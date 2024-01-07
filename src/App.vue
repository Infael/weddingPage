<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
#wrapper {
  padding: 15px;
}

@font-face {
  font-family: Agatha;
  src: url('@/assets/fonts/Tangerine.ttf');
}
</style>
