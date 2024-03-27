<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});

const model = defineModel();
</script>

<template>
  <div class="radio-wrapper">
    <input
      type="radio"
      class="radio"
      v-bind:id="id"
      v-bind:value="value"
      v-bind:name="name"
      v-model="model"
    />
    <label v-bind:for="id" class="label">{{ label }}</label>
  </div>
</template>

<style scoped>
.radio-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}

.radio {
  display: none;
}

.label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.label:hover {
  font-weight: 600;
}

.label:active {
  color: var(--c-gold);
  font-weight: 600;
}

.label::before {
  display: block;
  content: ' ';
  width: 15px;
  height: 15px;
  border: 2px solid black;
  border-radius: 50%;
}

.label::after {
  display: none;
  position: absolute;
  left: 8px;
  top: 2px;
  content: ' ';
  width: 6px;
  height: 15px;
  rotate: 50deg;
  border: 2px solid var(--c-metalic-gold);
  border-top: none;
  border-left: none;
  box-shadow: 1px 0px 0px var(--c-white-soft);
}

.radio:checked + .label,
.radio:checked + .label::before {
  color: var(--c-metalic-gold);
  border-color: var(--c-metalic-gold);
}

.radio:checked + .label::after {
  display: block;
}
</style>
