<template>
  <div :class="['coin', { flip: isFlipping }]" :style="{ backgroundImage: `url(${coinSide})` }"></div>

  <div class="scoreboard">
    <div class="score-item">
      <span class="label">🏆 Longest Streak:</span>
      <span class="value">{{ longestStreak }}</span>
    </div>
    <div class="score-item" v-if="showStreak">
      <span class="label">🔥 Heads in a Row:</span>
      <span class="value">{{ headsInARow }}</span>
    </div>
  </div>

  <button class="button" @click="flipCoin" :disabled="isFlipping">
    Flip the Coin
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isFlipping = ref(false)
const coinSide = ref('/heads.svg')
const heads = '/heads.svg'
const tails = '/tails.svg'
const headsInARow = ref(0)
const longestStreak = ref(0)
const showStreak = ref(false)

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

onMounted(() => {
  const saved = localStorage.getItem('longestStreak')
  if (saved) longestStreak.value = parseInt(saved)
})

async function flipMultipleTimes(times = 10, delay = 400) {
  isFlipping.value = true
  let isHeads = false
  for (let i = 0; i < times; i++) {
    isHeads = Math.random() < 0.5
    coinSide.value = isHeads ? heads : tails
    await sleep(delay)
  }
  isFlipping.value = false

  if (isHeads) {
    headsInARow.value++
    showStreak.value = true

    if (headsInARow.value > longestStreak.value) {
      longestStreak.value = headsInARow.value
      localStorage.setItem('longestStreak', longestStreak.value.toString())
    }
  } else {
    headsInARow.value = 0
    showStreak.value = false
  }
}

function flipCoin() {
  flipMultipleTimes(4, 500)
}
</script>

<style scoped>
:global(body) {
  margin: 0;
  height: 100vh;
  background: linear-gradient(145deg, #1e1e2f, #2d2d44);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  color: white;
  overflow: hidden;
}

.coin {
  width: 300px;
  height: 300px;
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  background-color: goldenrod;
  box-shadow: 0 0 25px grey;
  transition: transform 0.6s ease-in-out;
  margin-bottom: 3rem;
}

.flip {
  animation: flip 2s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes flip {
  0% {
    transform: translateY(0) rotateY(0);
  }
  25% {
    transform: translateY(-200px) rotateY(720deg);
  }
  50% {
    transform: translateY(0) rotateY(1440deg);
  }
  75% {
    transform: translateY(-100px) rotateY(2160deg);
  }
  100% {
    transform: translateY(0) rotateY(2880deg);
  }
}

.button {
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  padding: 1em 2em;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  background: #00bcd4;
  border: none;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 188, 212, 0.4);
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}


.button:hover {
  background: #0097a7;
}

.scoreboard {
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 188, 212, 0.2);
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  backdrop-filter: blur(6px);
}

.score-item {
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.label {
  font-weight: 500;
  color: #00e5ff;
}

.value {
  font-weight: bold;
  color: #ffffff;
}
</style>
