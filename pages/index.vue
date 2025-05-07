<template>
  <div class="center">
    <h1><span class="look">Look</span> <span class="at">at</span> <span class="the">the</span> <span class="pretty">pretty</span> <span class="colors">colors</span></h1>
    <NuxtLink
      v-if="isReady"
      to="/coinflip"
      class="coin-link"
      :style="{
        backgroundImage: `url(${coinFace})`,
        top: `${position.top}px`,
        left: `${position.left}px`
      }"
    />
  </div>
</template>


<script setup lang="ts">

import { ref, onMounted } from 'vue'

useHead({
  bodyAttrs: {
    class: 'index-body'
  }
})

const coinFace = ref('/heads.svg')

const isReady = ref(false)
const position = ref({ top: 0, left: 0 })

let vx = 0 // horizontal velocity
let vy = -2 // vertical velocity

onMounted(() => {
  coinFace.value = Math.random() < 0.5 ? '/heads.svg' : '/tails.svg'

  vx = Math.random() - 0.5 * 4 // random between -2 and +2

  const startLeft = Math.floor(Math.random() * (window.innerWidth - 120))
  position.value.left = startLeft
  position.value.top = 0
  isReady.value = true

  requestAnimationFrame(animateFall);
})

function animateFall() {
  
  let new_left = position.value.left + vx;
  console.log(new_left)
  if ((new_left > 20) && (new_left < window.innerWidth - 120)) {
    position.value.left = new_left
  } else {
    vx *= -1
  }
  
  // Stop if it's hit the bottom
  position.value.top += vy
  vy += 0.03
  if (position.value.top < window.innerHeight - 140) {
    requestAnimationFrame(animateFall)
  }
}
</script>

<style scoped lang="scss">
:global(.index-body) {
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(var(--g1), var(--g2), var(--g3), var(--g4), var(--g5));
  background-size: 800% 800%;
  animation: bg-gradient 15s ease infinite;
}

:global(:root) {
  --g1: #70d6ff;
  --g2: #ff70a6;
  --g3: #ff9770;
  --g4: #ffd670;
  --g5: #e9ff70;
}

@keyframes bg-gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

div {
  text-align: center;
  font-size: 70px;
}

.look {
  color: var(--g1);
}

.at {
  color: var(--g2);
}

.the {
  color: var(--g3);
}

.pretty {
  color: var(--g4);
}

.colors {
  color: var(--g5);
}

.spacers {
  margin: 10px;
}

div .center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  vertical-align: middle;
  margin-top: -5%;
}

.coin-link {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: goldenrod;
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin-top: 2rem;
  transition: transform 0.3s ease;
  z-index: 0;
}

.coin-link:hover {
  transform: scale(1.1);
}
</style>
