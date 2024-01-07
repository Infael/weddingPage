<script setup lang="ts">
import IconHeart from './icons/IconHeart.vue'
import { ref, onMounted } from 'vue'

/* function for determinig if the element is on screen in the bottom half  */
const isVisable = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.top >= window.innerHeight / 2 - rect.height / 2
}

const firstImg = ref<HTMLElement>()
const secondImg = ref<HTMLElement>()
const thirdImg = ref<HTMLElement>()
const fourthImg = ref<HTMLElement>()

const imgs = [firstImg, secondImg, thirdImg, fourthImg]

onMounted(() => {
  imgs.forEach((img) => {
    img.value?.style.setProperty('opacity', '0')
  })
})

const onScroll = () => {
  imgs.forEach((img) => {
    if (img.value === undefined) return
    if (isVisable(img.value)) {
      const rect = img.value.getBoundingClientRect()
      // opacity should be 0 when the element is at the bottom of the screen and 1 when it is in the middle
      const opacity = 1 - (rect.top - window.innerHeight / 2) / (window.innerHeight / 2)
      img.value.style.setProperty('opacity', opacity.toString())
    }
  })
}

window.addEventListener('scroll', onScroll)
</script>

<template>
  <div class="wrapper">
    <IconHeart class="heart" />
    <span class="line"></span>
    <div class="photoWrapper">
      <p class="text">
        <span>Miško</span>
        <span>22.1.2000</span>
      </p>
      <IconHeart class="heart h_center" />
      <img src="../assets/images/placeholder.jpg" alt="placeholder" class="img" ref="firstImg" />
    </div>
    <div class="photoWrapper">
      <p class="text">
        <span>9.2.2000</span>
        <span>Danielka</span>
      </p>
      <IconHeart class="heart h_center" />

      <img src="../assets/images/placeholder.jpg" alt="placeholder" class="img" ref="secondImg" />
    </div>
    <div class="photoWrapper">
      <p class="text">
        <span>Spolu&nbsp;od</span>
        <span>24.3.2016</span>
      </p>
      <IconHeart class="heart h_center" />

      <img src="../assets/images/placeholder.jpg" alt="placeholder" class="img" ref="thirdImg" />
    </div>
    <div class="photoWrapper">
      <p class="text">
        <span>8.7.2023</span>
        <span>Zásnuby</span>
      </p>
      <IconHeart class="heart h_center" />

      <img src="../assets/images/placeholder.jpg" alt="placeholder" class="img" ref="fourthImg" />
    </div>
    <IconHeart class="heart h_last" />

    <p class="wedding">
      <span>Svadba</span>
      <span class="date">13.7.2024</span>
      <IconHeart class="heart h_last" />
    </p>
  </div>
</template>

<style scoped>
.wrapper {
  color: white;
  font-family: 'Agatha', cursive;
  font-size: 32px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex: 1;
}

.line {
  position: absolute;
  top: 15px;
  left: calc(50% - 1px);
  width: 2px;
  height: 100%;
  background-color: white;
  z-index: -1;
}

.heart {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.h_last {
  top: calc(100% + 35px);
}

.h_center {
  top: 50%;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3)) drop-shadow(0px -1px 2px rgba(0, 0, 0, 0.3))
    drop-shadow(1px 0px 2px rgba(0, 0, 0, 0.3)) drop-shadow(-1px 0px 2px rgba(0, 0, 0, 0.3));
  z-index: -1;
}

.photoWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* laptop */
  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    align-self: center;
    justify-content: space-between;
  }
}

.photoWrapper:first-of-type {
  margin-top: 100px;
}

.photoWrapper:last-of-type {
  margin-bottom: 100px;
}

.photoWrapper:nth-child(2n) {
  /* laptop */
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
}

.text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 15%;

  /* laptop */
  @media (min-width: 1024px) {
    flex-direction: column;
    font-size: 48px;
    width: 350px;
    padding: 0;
    text-align: center;
  }
}

.img {
  width: 100%;
  height: auto;
  border: 1px solid red;

  /* laptop */
  @media (min-width: 1024px) {
    width: 350px;
  }
}

.wedding {
  position: absolute;
  top: calc(100% + 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  font-size: 64px;
  line-height: 48px;

  /* laptop */
  @media (min-width: 1024px) {
    font-size: 128px;
    line-height: 102px;
  }
}

.date {
  font-size: 42px;

  /* laptop */
  @media (min-width: 1024px) {
    font-size: 82px;
  }
}
</style>
