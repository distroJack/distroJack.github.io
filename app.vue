<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '#imports'

const emojiFavicon = ref('/favicon.ico') // fallback

onMounted(() => {
  // BUG: NUXT will still view /favicon.ico as THE proper ico to use and add it back. The emoji icon SHOULD win out though
  const icons = [
    '🤖', '👋', '🧙', '👑', '🏊', '💪🏼', '🐋',
    '🦈', '🐲', '🍔', '🎮', '🎰', '🎲', '⚓️', '🃏'
  ]

  const emoji = icons[Math.floor(Math.random() * icons.length)]
  const emojiDataUrl = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`

  emojiFavicon.value = emojiDataUrl
})

useHead(() => ({
  title: "Jack Humphries",
  link: [
    {
      rel: 'icon',
      href: emojiFavicon.value,
    },
  ]
}))
</script>


<!-- app.vue -->
<template>
  <NuxtPage />
</template>
