<script setup lang="ts">
import ErrorView from '@/components/ErrorView.vue';
</script>

<template>
  <div class="notFoundWrapper">
    <ErrorView error-text="404: Page not Found" />
  </div>
</template>

<style scoped>
.notFoundWrapper {
  position: relative;
  min-height: 100vh;

  background-color: var(--c-black);
}
</style>
