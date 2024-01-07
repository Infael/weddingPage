<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import TimeLine from '@/components/TimeLine.vue'

const onScroll = () => {
  // when the first screen is scrolled down parallax blur should be enhanced
  if (window.scrollY > 0 && window.scrollY < window.innerHeight) {
    const blur = 5 + (window.scrollY / window.innerHeight) * 10
    const background = document.querySelector('.parallax') as HTMLElement
    if (background) background.style.filter = `blur(${blur}px)`
  }
}

window.addEventListener('scroll', onScroll)
</script>

<template>
  <main>
    <div class="parallax" />
    <div class="content">
      <MainHeader />
      <TimeLine />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background-image: url('@/assets/images/headerPhoto.jpg');
  z-index: -1;

  /* Set a specific height */
  min-height: 600vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
}
.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: clamp(270px, 80%, 1023px);
}
</style>
