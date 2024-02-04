<script setup lang="ts">
import { ref } from 'vue';

defineProps({
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

const declined = ref(false);

const onUserChoice = (accepted: boolean) => {
  if (!accepted) {
    declined.value = true;
  } else {
    emits('updateGuestAccepted', accepted);
  }
};

const onConfirmDecline = () => {
  emits('updateGuestAccepted', false);
};

const onDeclineDecline = () => {
  declined.value = false;
};
</script>

<template>
  <section class="headerBox" v-if="!declined">
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
  <section class="headerBox" v-else>
    <p class="declineText">To nás mrzí 🥺</p>
    <p class="declinedQuestion">
      Si si tým ale istý? Túto voľbu budeš môcť zmeniť len veľmi nepríjemným telefonátom niekomu z
      (budúcich) manželov!
    </p>
    <div class="declinedButtonsGroup">
      <button
        v-on:click="onDeclineDecline()"
        class="button biggerButton"
        :disabled="guestAccepted !== null"
      >
        Nie len som skúšal čo sa stane keď to stlačím
      </button>
      <button v-on:click="onConfirmDecline()" class="button" :disabled="guestAccepted !== null">
        Áno, bohužiaľ sa nemôžem zúčastniť
      </button>
    </div>
  </section>
</template>

<style scoped>
.headerBox {
  position: relative;
  font-family: 'Agatha', cursive;
  color: var(--c-white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
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
  font-size: var(--font-agatha-s);
  line-height: 50px;
  font-family: 'Agatha', cursive;
  font-size: var(--font-agatha-s);
}

.button {
  border: none;
  background: none;
  color: var(--c-white);
  transition: all 0.3s ease-in-out;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-bottom: 1px solid var(--c-white);
  border-radius: 5px;
  margin: auto;
}

.button:hover {
  color: var(--c-gold);
  cursor: pointer;
}

.button:disabled {
  cursor: default;
}

.declineText {
  font-family: playfair, serif;
  text-align: center;
  font-size: var(--font-size-xxl);
  padding-bottom: 16px;
}

.declinedQuestion {
  font-family: playfair, serif;
  text-align: center;
}

.declinedButtonsGroup {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  gap: 20px;
  padding-top: 50px;
  font-family: playfair, serif;
}

.biggerButton {
  font-size: var(--font-size-xl) !important;
}
</style>
