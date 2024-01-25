<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import MyLoading from '@/components/MyLoading.vue';
import TimeLine from '@/components/TimeLine.vue';
import { getUrlParam } from '@/utils/getUrlParam';
import { useFetch } from '@/utils/useFetch';
import { onMounted, ref } from 'vue';

// Variables
const key = ref<string | null>(null);

// Scrolling
const onScroll = () => {
  // when the first screen is scrolled down parallax blur should be enhanced
  if (window.scrollY > 0 && window.scrollY < window.innerHeight) {
    const blur = 5 + (window.scrollY / window.innerHeight) * 10;
    const background = document.querySelector('.parallax') as HTMLElement;
    if (background) background.style.filter = `blur(${blur}px)`;
  }
};
window.addEventListener('scroll', onScroll);

// Api
key.value = getUrlParam('key');

// Hooks
const { data, isLoading, isError, isSuccess, trigger } = useFetch(
  `${import.meta.env.VITE_API_ENDPOINT}/guest-invite/`
);

onMounted(() => {
  if (key.value) {
    trigger({ headers: { Authorization: key.value }, method: 'GET' });
  }
});
</script>

<template>
  <main>
    <div v-if="key" style="color: red">
      <MyLoading v-if="isLoading" />
      <div v-else>
        {{ data }}
        <!-- <div class="parallax" /> -->
        <div class="content">
          <MainHeader />
          <TimeLine />
        </div>
      </div>
    </div>
    <div v-else>
      <!-- <div class="parallax" /> -->
      <div class="content">
        <MainHeader />
        <TimeLine />
      </div>
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
