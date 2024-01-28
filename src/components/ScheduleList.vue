<script setup lang="ts">
import IconHeart from './icons/IconHeart.vue';
</script>

<template>
  <div class="schedule-list">
    <div class="topRightBorder">
      <div class="innerTopRightBorder"></div>
      <div class="outerTopRightBorder"></div>
    </div>
    <div class="bottomLeftBorder">
      <div class="innerBottomLeftBorder"></div>
      <div class="outerBottomLeftBorder"></div>
    </div>
    <h3 class="header">Harmonogram</h3>
    <div class="content">
      <p>Svadobný obrad <span class="divider">-</span> <span class="time">14:00</span></p>
      <IconHeart class="heart" />
      <p>Spoločné fotenie <span class="divider">-</span> <span class="time">16:00</span></p>
      <IconHeart class="heart" />
      <p>Svadobná večera <span class="divider">-</span> <span class="time">17:00</span></p>
      <IconHeart class="heart" />
      <p>Krájanie torty <span class="divider">-</span> <span class="time">18:00</span></p>
      <IconHeart class="heart" />
      <p>Zábava! <span class="divider">-</span> <span class="time">18:30</span></p>
      <IconHeart class="heart" />
      <p>Druhá večera <span class="divider">-</span> <span class="time">22:00</span></p>
      <IconHeart class="heart" />
      <p>Zavíjanka <span class="divider">-</span> <span class="time">00:00</span></p>
    </div>
  </div>
</template>

<style scoped>
.schedule-list {
  min-height: 95vh;
  width: clamp(250px, 80%, 650px);
  position: relative;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  color: var(--c-white);
}

.topRightBorder {
  position: absolute;
  top: 25px;
  right: 0;
  width: 48px;
  height: 80px;

  /* desktop */
  @media (min-width: 1024px) {
    width: 186px;
    height: 186px;
  }
}

.innerTopRightBorder {
  position: absolute;
  top: 8px;
  right: 8px;
  border-top: 1px solid var(--c-white);
  border-right: 1px solid var(--c-white);
  width: 60%;
  height: 60%;

  /* desktop */
  @media (min-width: 1024px) {
    border-top: 3px solid var(--c-white);
    border-right: 3px solid var(--c-white);
    width: 80%;
    height: 80%;
  }
}

.outerTopRightBorder {
  position: absolute;
  border-top: 3px solid var(--c-white);
  border-right: 3px solid var(--c-white);
  width: 100%;
  height: 100%;

  /* desktop */
  @media (min-width: 1024px) {
    border-top: 3px solid var(--c-white);
    border-right: 3px solid var(--c-white);
  }
}

.bottomLeftBorder {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 48px;
  height: 80px;

  /* desktop */
  @media (min-width: 1024px) {
    width: 186px;
    height: 186px;
  }
}

.innerBottomLeftBorder {
  position: absolute;
  bottom: 8px;
  left: 8px;
  border-bottom: 1px solid var(--c-white);
  border-left: 1px solid var(--c-white);
  width: 60%;
  height: 60%;

  /* desktop */
  @media (min-width: 1024px) {
    border-bottom: 3px solid var(--c-white);
    border-left: 3px solid var(--c-white);
    width: 80%;
    height: 80%;
  }
}

.outerBottomLeftBorder {
  position: absolute;
  border-bottom: 3px solid var(--c-white);
  border-left: 3px solid var(--c-white);
  width: 100%;
  height: 100%;

  /* desktop */
  @media (min-width: 1024px) {
    border-bottom: 3px solid var(--c-white);
    border-left: 3px solid var(--c-white);
  }
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Agatha', cursive;

  /* mobile first */
  font-size: var(--font-agatha-xs);
  /* tablet */
  @media (min-width: 768px) {
    font-size: var(--font-agatha-m);
  }
  /* desktop */
  @media (min-width: 1024px) {
    font-size: var(--font-agatha-m);
  }

  transform: rotate(-16deg) translateX(-35px);
}

.content {
  padding: 30px;
  padding-top: 85px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  width: 100%;

  /* desktop */
  @media (min-width: 1024px) {
    padding-top: 120px;
  }

  font-family: Playfair, serif;
}

.heart {
  transform: scale(0.6);
}

.time {
  font-size: var(--font-size-xl);
  display: block;

  /* desktop */
  @media (min-width: 1024px) {
    display: inline;
  }
}

.divider {
  display: none;

  /* desktop */
  @media (min-width: 1024px) {
    padding: 0 15px;
    display: inline;
  }
}
</style>
