<script setup lang="ts">
const props = defineProps({
  guestAccepted: {
    type: Boolean,
    required: false,
    default: null
  },
  unauthorized: {
    type: Boolean,
    required: false,
    default: false
  }
});

const emits = defineEmits(['updateGuestAccepted']);

const onUserChoice = (accepted: boolean) => {
  emits('updateGuestAccepted', accepted);
};
</script>

<template>
  <section class="headerBox">
    <h2 class="header">Danielka a Miško</h2>
    <h3 class="subHeader">13.7.2024 v Brezne</h3>
    <div
      v-if="!unauthorized"
      class="acceptingQuestionBox"
      :class="{ acceptingQuestionBoxBeforeAccept: guestAccepted === null }"
    >
      <p class="acceptingQuestion">Prijímaš pozvanie k svadobnému stolu?</p>
      <div class="buttonGroup">
        <button v-on:click="onUserChoice(true)" class="button" :disabled="guestAccepted !== null">
          Áno
        </button>
        <button v-on:click="onUserChoice(false)" class="button" :disabled="guestAccepted !== null">
          Nie
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.headerBox {
  font-family: 'Agatha', cursive;
  color: var(--c-white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;

  @media (min-width: 768px) {
    height: 95vh;
  }
}

.header {
  /* mobile first */
  font-size: var(--font-agatha-xs);
  line-height: var(--font-agatha-s);
  /* tablet */
  @media (min-width: 768px) {
    font-size: var(--font-agatha-m);
    line-height: var(--font-agatha-l);
  }
  /* desktop */
  @media (min-width: 1024px) {
    font-size: var(--font-agatha-xl);
    line-height: var(--font-agatha-xxl);
  }
}
.subHeader {
  font-family: 'Agatha', cursive;
  color: var(--c-white);
  text-align: center;

  /* mobile first */
  font-size: var(--font-agatha-xxs);
  /* tablet */
  @media (min-width: 768px) {
    font-size: var(--font-agatha-s);
  }
  /* desktop */
  @media (min-width: 1024px) {
    font-size: var(--font-agatha-xm);
  }

  padding-bottom: 24px;
}

.acceptingQuestionBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 0px;
  opacity: 0;

  transition:
    opacity 0.8s ease-in-out,
    height 1.6s ease-in-out;
}

.acceptingQuestionBoxBeforeAccept {
  opacity: 1;
  height: 200px;
}
.acceptingQuestion {
  text-align: center;

  font-size: var(--font-agatha-xxs);
  padding-bottom: 24px;

  /* tablet */
  @media (min-width: 768px) {
    font-size: var(--font-agatha-s);
  }
}

.buttonGroup {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  font-size: 64px;
}

.button {
  border: none;
  background: none;
  font-family: 'Agatha', cursive;
  font-size: var(--font-agatha-s);
  color: var(--c-white);
  transition: all 0.3s ease-in-out;
}

.button:hover {
  color: var(--c-gold);
  cursor: pointer;
}

.button:disabled {
  cursor: default;
}
</style>
