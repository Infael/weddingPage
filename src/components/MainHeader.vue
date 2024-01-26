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
  <div class="headerBox">
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
  </div>
</template>

<style scoped>
.headerBox {
  font-family: 'Agatha', cursive;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
}

.header {
  /* mobile first */
  font-size: 50px;
  line-height: 70px;
  /* tablet */
  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 120px;
  }
  /* desktop */
  @media (min-width: 1024px) {
    font-size: 140px;
    line-height: 160px;
  }
}
.subHeader {
  font-family: 'Agatha', cursive;
  color: white;
  text-align: center;

  /* mobile first */
  font-size: 42px;
  /* tablet */
  @media (min-width: 768px) {
    font-size: 60px;
  }
  /* desktop */
  @media (min-width: 1024px) {
    font-size: 80px;
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

  font-size: 42px;
  padding-bottom: 24px;

  /* tablet */
  @media (min-width: 768px) {
    font-size: 64px;
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
  font-size: 64px;
  color: white;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  color: rgb(255, 215, 0);
  cursor: pointer;
}

.button:disabled {
  cursor: default;
}
</style>
