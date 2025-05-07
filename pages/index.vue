<template>
  <div class="center">
    <h1><span class="look">Look</span> <span class="at">at</span> <span class="the">the</span> <span class="pretty">pretty</span> <span class="colors">colors</span></h1>
  </div>
</template>

<script setup lang="ts">
// No special logic needed
</script>

<style scoped lang="scss">
:global(html),
:global(body) {
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
</style>
