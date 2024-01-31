<script setup lang="ts">
const copyMail = () => {
  const mail = 'michalstefanak22@gmail.com';
  navigator.clipboard.writeText(mail);
};
</script>

<template>
  <section class="footerWrapper">
    <p>Michal Štefaňák</p>
    <p>© 2024</p>
    <p class="mail" v-on:click="copyMail">contact me: michalstefanak22@gmail.com</p>
  </section>
</template>

<style scoped>
.footerWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
  margin-top: 10vh;

  font-family: Playfair, serif;
  font-size: var(--font-size-s);
  /* color: var(--c-white); */
  color: var(--c-white);
}

.mail {
  cursor: copy;
}

.mail:hover {
  text-decoration: underline;
}
</style>
