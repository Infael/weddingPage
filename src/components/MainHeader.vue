<script setup lang="ts"></script>

<template>
  <div class="headerBox">
    <h2 class="header">Danielka a Miško</h2>
    <h3 class="subHeader">13.7.2024 v Brezne</h3>
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
  /* tablet */
  @media (min-width: 768px) {
    font-size: 100px;
  }
  /* desktop */
  @media (min-width: 1024px) {
    font-size: 140px;
  }
}
.subHeader {
  font-family: 'Agatha', cursive;
  color: white;

  /* mobile first */
  font-size: 42px;
  /* tablet */
  @media (min-width: 768px) {
    align-self: flex-end;
    font-size: 60px;
  }
  /* desktop */
  @media (min-width: 1024px) {
    font-size: 80px;
  }
}
</style>
