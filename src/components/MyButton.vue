<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <button class="button">{{ text }}</button>
</template>

<style scoped>
.button {
  color: var(--c-black);
  background-color: var(--c-white-soft);
  border: 2px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  font-family: Playfair, 'Courier New', Courier, monospace;
  cursor: pointer;
}

.button:hover {
  background-color: var(--c-metalic-gold);
  color: var(--c-white-soft);
  border-color: var(--c-metalic-gold);
}
</style>
