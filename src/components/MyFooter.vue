<script setup lang="ts">
const copyMail = () => {
  const mail = 'michalstefanak22@gmail.com';
  navigator.clipboard.writeText(mail);
};
</script>

<template>
  <section class="footerWrapper">
    <div class="splitter"></div>
    <p>Michal Štefaňák</p>
    <p>© 2024</p>
    <p class="mail" v-on:click="copyMail">contact me: michalstefanak22@gmail.com</p>
  </section>
</template>

<style scoped>
.footerWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  text-align: center;

  min-height: 100vh;
  background-image: url('@/assets/images/headerPhoto.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  font-family: Playfair, serif;
  font-size: var(--font-size-xs);
  color: var(--c-white);
}

.splitter {
  position: absolute;
  width: 100%;
  height: 2px;
  top: -2px;
  background-color: var(--c-white);
}

.mail {
  cursor: copy;
}

.mail:hover {
  text-decoration: underline;
}
</style>
