<script setup lang="ts">
import IconHeart from './icons/IconHeart.vue';
</script>

<template>
  <div class="errorWrapper">
    <div class="faceWrapper">
      <div class="leftEyeOne"></div>
      <div class="leftEyeTwo"></div>
      <div class="rightEye"><IconHeart /></div>
      <div class="mouth"></div>
    </div>
    <p class="errorText" title="500: Something went wrong at server side...">
      500: Something went wrong at server side...
    </p>
  </div>
</template>

<style scoped>
.errorWrapper {
  position: relative;
  background-color: var(--c-black);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.errorText {
  max-width: clamp(270px, 70%, 600px);
  position: relative;
  color: var(--c-white);
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Fira Mono', monospace;
}

.errorText::before,
.errorText::after {
  content: attr(title);
  position: absolute;
  left: 0;
  top: 0;
}

.errorText::before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
  2%,
  64% {
    transform: translate(1px, -1px);
  }
  4%,
  60% {
    transform: translate(-1px, 1px);
  }
  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

.errorText::after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {
  2%,
  64% {
    transform: translate(-2px, 0);
  }
  4%,
  60% {
    transform: translate(-2px, 0);
  }
  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}

.faceWrapper {
  position: relative;
  width: 250px;
  height: 250px;

  --eyes-height: 35%;
  --eyes-gap: 25%;
  --mouth-height: 75%;
  --eye-animation-duration: 0.5s;
}

.leftEyeOne {
  position: absolute;
  top: var(--eyes-height);
  left: calc(50% - var(--eyes-gap));
  transform: translate(-50%, -50%) rotate(45deg);

  width: 130px;
  height: 30px;
  border-radius: 0 0 20px 0;
  background-color: var(--c-white);

  animation: LeftEyeOneAnimation var(--eye-animation-duration) ease-in;
  animation-iteration-count: 1;
}

@keyframes LeftEyeOneAnimation {
  0% {
    top: -200%;
    left: -200%;
  }
  100% {
    top: var(--eyes-height);
    left: calc(50% - var(--eyes-gap));
  }
}

.leftEyeTwo {
  position: absolute;
  top: var(--eyes-height);
  left: calc(50% - var(--eyes-gap));
  transform: translate(-50%, -50%) rotate(-45deg);

  width: 130px;
  height: 30px;
  background-color: var(--c-white);

  animation: LeftEyeTwoAnimation var(--eye-animation-duration) ease-in;
  animation-iteration-count: 1;
}

@keyframes LeftEyeTwoAnimation {
  0% {
    top: 200%;
    left: -200%;
  }
  100% {
    top: var(--eyes-height);
    left: calc(50% - var(--eyes-gap));
  }
}

.rightEye {
  position: absolute;
  top: calc(5% + var(--eyes-height));
  left: calc(50% + var(--eyes-gap));
  transform: translate(-50%, -50%) scale(5);
  color: var(--c-white);

  animation: RightEyeAnimation 2.3s linear 1.2s infinite alternate;
}

@keyframes RightEyeAnimation {
  0% {
    filter: none;
    color: var(--c-white);
  }
  4% {
    filter: drop-shadow(1px 3px 0 var(--c-gold));
  }
  4.1% {
    filter: none;
    clip-path: none;
  }
  4.2% {
    filter: drop-shadow(-1px -3px 0 var(--c-gold));
    clip-path: polygon(
      0 11%,
      60% 11%,
      60% 15%,
      0% 15%,
      0% 20%,
      39% 20%,
      39% 24%,
      0 24%,
      0 50%,
      54% 50%,
      54% 56%,
      0 56%,
      0 100%,
      100% 100%,
      100% 0,
      0 0
    );
  }
  4.3% {
    filter: none;
    clip-path: none;
  }
  11% {
    color: var(--c-white);
    clip-path: none;
  }
  12% {
    color: var(--c-gold);
    clip-path: polygon(
      0 11%,
      27% 11%,
      27% 21%,
      5% 22%,
      5% 34%,
      39% 33%,
      39% 40%,
      0 40%,
      0 50%,
      59% 50%,
      59% 53%,
      0 53%,
      0 100%,
      100% 100%,
      100% 0,
      0 0
    );
  }
  13% {
    color: var(--c-white);
    clip-path: none;
  }

  35% {
    filter: none;
  }
  35.1% {
    filter: drop-shadow(-3px 2px 0 var(--c-gold));
  }
  35.2% {
    filter: none;
  }
  35.3% {
    filter: drop-shadow(1px -3px 0 var(--c-gold));
  }
  35.4% {
    filter: none;
  }
  35.5% {
    filter: drop-shadow(1px -3px 0 var(--c-gold));
  }
  35.6% {
    filter: none;
  }

  59% {
    color: var(--c-white);
    filter: none;
  }
  59.2% {
    filter: drop-shadow(-3px -1px 0 var(--c-gold));
  }
  59.3% {
    filter: none;
  }
  59.4% {
    filter: drop-shadow(1px 4px 0 var(--c-gold));
  }
  59.6% {
    filter: none;
    clip-path: none;
  }
  60% {
    color: var(--c-gold);
    clip-path: polygon(
      0 0,
      0 100%,
      100% 100%,
      100% 47%,
      54% 47%,
      54% 43%,
      100% 43%,
      100% 38%,
      80% 38%,
      80% 36%,
      100% 36%,
      100% 34%,
      68% 34%,
      68% 25%,
      100% 25%,
      100% 0
    );
  }
  61% {
    color: var(--c-white);
    clip-path: none;
  }

  85% {
    filter: none;
  }
  85.1% {
    filter: drop-shadow(6px -1px 0 var(--c-metalic-gold));
    color: var(--c-white);
  }
  85.2% {
    filter: none;
    color: var(--c-gold);
  }
  85.3% {
    filter: drop-shadow(6px -1px 0 var(--c-gold));
  }
  85.4% {
    filter: none;
    color: var(--c-white);
  }
  85.5% {
    filter: drop-shadow(1px -3px 0 var(--c-gold));
  }
  85.7% {
    filter: none;
  }
}

.mouth {
  position: absolute;
  top: var(--mouth-height);
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--c-white);
  background-color: var(--c-white);
  width: 200px;
  height: 30px;
}
</style>
