<script lang="ts">
	import { onMount } from 'svelte';

	let emoji: string;

	onMount(() => {
		let icons = [
			'🤖',
			'👋',
			'🧙',
			'👑',
			'🏊',
			'💪🏼',
			'🐋',
			'🦈',
			'🐲',
			'🍔',
			'🎮',
			'🎰',
			'🎲',
			'⚓️',
			'🃏'
		];
		emoji = icons[Math.floor(Math.random() * icons.length)];
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<!-- prettier-ignore -->
	<link
        rel="icon"
        href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">{emoji}</text></svg>'
    >
</svelte:head>

<slot />



