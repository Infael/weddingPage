<script setup lang="ts"></script>

<template>
  <div class="box">
    <span class="text-1">Loading...</span>
    <span class="text-2">Dada&Miško</span>
    <span class="text-3">Tešíme sa!</span>
    <span class="text-4">SVADBAAA ❤</span>
  </div>
</template>

<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  /* Variables */
  --w: 10ch;
  --move: -26px;

  font-weight: bold;
  font-family: monospace;
  font-size: calc(calc(var(--move) * -1) - 4px);
  line-height: calc(var(--move) * -1);
  letter-spacing: var(--w);
  width: var(--w);
  overflow: hidden;
  white-space: nowrap;
  color: #0000;

  max-height: calc(var(--move) * -1);
}

.text-1 {
  --color: #112;
  animation: a1 6s infinite;
}

.text-2 {
  --color: var(--c-metalic-gold);
  animation: a1 6s infinite;
}

.text-3 {
  --color: #112;
  animation: a1 6s infinite;
}

.text-4 {
  --color: var(--c-metalic-gold);
  animation: a1 6s infinite;
}

@keyframes a1 {
  /* First text waiting */
  0%,
  16% {
    text-shadow:
      calc(0 * var(--w)) 0 var(--color),
      calc(-1 * var(--w)) 0 var(--color),
      calc(-2 * var(--w)) 0 var(--color),
      calc(-3 * var(--w)) 0 var(--color),
      calc(-4 * var(--w)) 0 var(--color),
      calc(-5 * var(--w)) 0 var(--color),
      calc(-6 * var(--w)) 0 var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  /* First text movement */
  17% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) 0 var(--color),
      calc(-2 * var(--w)) 0 var(--color),
      calc(-3 * var(--w)) 0 var(--color),
      calc(-4 * var(--w)) 0 var(--color),
      calc(-5 * var(--w)) 0 var(--color),
      calc(-6 * var(--w)) 0 var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  18% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) 0 var(--color),
      calc(-3 * var(--w)) 0 var(--color),
      calc(-4 * var(--w)) 0 var(--color),
      calc(-5 * var(--w)) 0 var(--color),
      calc(-6 * var(--w)) 0 var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  19% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) 0 var(--color),
      calc(-4 * var(--w)) 0 var(--color),
      calc(-5 * var(--w)) 0 var(--color),
      calc(-6 * var(--w)) 0 var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  20% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) 0 var(--color),
      calc(-5 * var(--w)) 0 var(--color),
      calc(-6 * var(--w)) 0 var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  21% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) 0 var(--color),
      calc(-6 * var(--w)) 0 var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  22% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) 0 var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  23% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  24% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  25% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
  /* Second text waiting */
  26%,
  44% {
    text-shadow:
      calc(0 * var(--w)) var(--move) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  /* Second text movement */
  45% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) var(--move) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  46% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) var(--move) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  47% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) var(--move) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  48% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) var(--move) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  49% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) var(--move) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  50% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) var(--move) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  51% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) var(--move) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  52% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) var(--move) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  53% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) var(--move) var(--color);
  }
  /* Third text waiting */
  54%,
  72% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  /* Third text movement */
  73% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  74% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  75% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  76% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  77% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  78% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  79% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  80% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 2) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  81% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 2) var(--color);
  }
  /* Fourth text waiting */
  82%,
  95% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 3) #f00;
  }
  96% {
    text-shadow:
      calc(0 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-1 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-2 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-3 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-4 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-5 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-6 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-7 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-8 * var(--w)) calc(var(--move) * 3) var(--color),
      calc(-9 * var(--w)) calc(var(--move) * 3) var(--color);
  }
  /* Reset */
  100% {
    text-shadow:
      calc(0 * var(--w)) 0 var(--color),
      calc(-1 * var(--w)) 0 var(--color),
      calc(-2 * var(--w)) 0 var(--color),
      calc(-3 * var(--w)) 0 var(--color),
      calc(-4 * var(--w)) 0 var(--color),
      calc(-5 * var(--w)) 0 var(--color),
      calc(-6 * var(--w)) 0 var(--color),
      calc(-7 * var(--w)) 0 var(--color),
      calc(-8 * var(--w)) 0 var(--color),
      calc(-9 * var(--w)) 0 var(--color);
  }
}
</style>
