<template>
  <div class="center">
    <h1><span class="look">Look</span> <span class="at">at</span> <span class="the">the</span> <span class="pretty">pretty</span> <span class="colors">colors</span></h1>
    <NuxtLink
      v-if="isReady"
      to="/coinflip"
      class="coin-link"
      :style="{
        backgroundImage: `url(${coinFace})`,
        top: `${top}px`,
        left: `${left}px`
      }"
    />
  </div>
</template>


<script setup>
// pages/my-cool-page.vue or app.vue
import { ref, onMounted } from 'vue'

useHead({
  bodyAttrs: {
    class: 'index-body'
  }
})

const coinFace = ref('/heads.svg')
const top = ref(0)
const left = ref(0)
const isReady = ref(false)

onMounted(() => {
  coinFace.value = Math.random() < 0.5 ? '/heads.svg' : '/tails.svg'

  const maxTop = window.innerHeight - 120
  const maxLeft = window.innerWidth - 120

  top.value = Math.floor(Math.random() * maxTop)
  left.value = Math.floor(Math.random() * maxLeft)

  isReady.value = true // only show coin once it's positioned
})
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
