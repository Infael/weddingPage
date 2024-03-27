<script setup lang="ts">
import type { Question } from '@/models/Question';
import { ref, type PropType } from 'vue';
import SingleQuestion from '@/components/questions/SingleQuestion.vue';
import MyButton from '@/components/MyButton.vue';
import { useFetch } from '@/utils/useFetch';

const props = defineProps({
  auth: {
    type: String,
    required: true
  },
  questions: {
    type: Object as PropType<Question[]>,
    required: true
  }
});

const inputError = ref<string | null>(null);

const answers = ref(new Map<number, string | string[] | null>());
props.questions.forEach((question) => {
  answers.value.set(question.id, null);
});

const onUpdateGuestAnswer = (questionId: number, answer: string) => {
  answers.value.set(questionId, answer);
  console.log(answers.value);
};

const {
  trigger: triggerSendAnswer,
  error,
  isLoading,
  isSuccess
} = useFetch<void>(`${import.meta.env.VITE_API_ENDPOINT}/responses/`);

const onSubmit = () => {
  console.log(answers.value);
  const values = Array.from(answers.value.values());
  if (values.some((value) => value === null)) {
    inputError.value = 'Prosím, vyplň všetky otázky.';
    return;
  }
  answers.value.forEach((value, key) => {
    triggerSendAnswer({
      method: 'POST',
      // @ts-ignore
      body: JSON.stringify({ response_to: key, value }),
      headers: { Authorization: props.auth, 'Content-Type': 'application/json' }
    });
  });
};
</script>

<template>
  <section v-if="questions && questions.length !== 0" class="questionList">
    <div v-if="isLoading" class="centeredMessage">
      <p>Odosielam odpovede...</p>
    </div>
    <div v-else-if="isSuccess" class="centeredMessage">
      <p>Odpovede uložené.</p>
      <p>Ďakujeme!</p>
    </div>
    <div v-bind:class="isLoading || isSuccess ? 'hiddenContent' : ''">
      <div v-if="questions.length === 1">
        <h2 class="header">Máme jednu otázku:</h2>
        <p>
          <SingleQuestion :question="questions[0]" @update-guest-answer="onUpdateGuestAnswer" />
        </p>
      </div>
      <div v-else>
        <h2 class="header">Máme na teba pár otázok:</h2>
        <div class="questions">
          <div v-for="question in questions" :key="question.id">
            <SingleQuestion :question="question" @update-guest-answer="onUpdateGuestAnswer" />
          </div>
        </div>
      </div>
      <div class="sendButton">
        <p v-if="inputError">{{ inputError }}</p>
        <MyButton text="Odoslať" @click="onSubmit" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.questionList {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Playfair, 'Courier New', Courier, monospace;
  background-color: var(--c-white-soft);
  box-shadow:
    inset -20px -20px 60px #bebebe,
    inset 20px 20px 60px #ffffff;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 10px;
  width: clamp(250px, 100%, 800px);
}

.header {
  margin-bottom: 1rem;
}

.questions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hiddenContent {
  opacity: 0;
  pointer-events: none;
}

.centeredMessage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.sendButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
}
</style>
