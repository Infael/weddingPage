<script setup lang="ts"></script>

<template>
  <section class="invite">
    <h4 class="text">Tešíme sa na Vás v kostole Nanebovzatia Panny Márie v Brezne.</h4>
  </section>
</template>

<style scoped>
.invite {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text {
  outline: 2px solid var(--c-white);
  outline-offset: 3px;
  border: 1px solid var(--c-white);
  font-family: PlayfairItalic, serif;
  font-size: var(--font-size-xl);
  color: var(--c-white);
  margin: 15vh 0;
  padding: 30px;
  text-align: center;

  align-self: center;
  max-width: clamp(250px, 90%, 650px);

  /* desktop */
  @media (min-width: 1024px) {
    font-size: var(--font-size-xxl);
  }
}
</style>
