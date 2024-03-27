<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
});

const model = defineModel();
</script>

<template>
  <textarea class="textArea" v-bind:name="name" v-model="model as unknown as string"></textarea>
</template>

<style scoped>
.textArea {
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}

.textArea:focus {
  outline: none !important;
  border-color: var(--c-metalic-gold);
}
</style>
