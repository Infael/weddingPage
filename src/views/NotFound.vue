<script setup lang="ts">
import ErrorView from '@/components/ErrorView.vue';
</script>

<template>
  <div class="notFoundWrapper">
    <ErrorView />
  </div>
</template>

<style scoped>
.notFoundWrapper {
  position: relative;
  min-height: 100vh;

  background-color: var(--c-black);
}
</style>
