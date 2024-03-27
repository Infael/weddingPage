<script setup lang="ts">
import type { Question } from '@/models/Question';
import CheckboxInput from '@/components/input/CheckboxInput.vue';
import { ref, type PropType } from 'vue';
import RadioInput from '../input/RadioInput.vue';
import TextareaInput from '../input/TextareaInput.vue';

defineProps({
  question: {
    type: Object as PropType<Question>,
    required: true
  }
});

const emits = defineEmits(['updateGuestAnswer']);

const userInput = ref([]);
</script>

<template>
  <p>{{ question.text }}</p>
  <div v-if="question.multichoice === undefined">
    <TextareaInput
      v-bind:name="question.id.toString()"
      v-model="userInput"
      @update:model-value="emits('updateGuestAnswer', question.id, userInput)"
    />
  </div>
  <div
    v-else-if="question.multichoice"
    :class="question.values.length >= 3 ? 'answers-column' : 'answers-row'"
  >
    <div v-for="answer in question.values" :key="answer">
      <CheckboxInput
        :id="answer"
        :name="question.id.toString()"
        :value="answer"
        :label="answer"
        v-model="userInput"
        @update:model-value="emits('updateGuestAnswer', question.id, userInput.join(','))"
      />
    </div>
  </div>
  <div
    v-else-if="!question.multichoice"
    :class="question.values.length >= 3 ? 'answers-column' : 'answers-row'"
  >
    <div v-for="answer in question.values" :key="answer">
      <RadioInput
        :id="answer"
        :name="question.id.toString()"
        :value="answer"
        :label="answer"
        v-model="userInput"
        @update:model-value="emits('updateGuestAnswer', question.id, userInput)"
      />
    </div>
  </div>
</template>

<style scoped>
.answers-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.answers-column {
  display: flex;
  flex-direction: column;
}
</style>
