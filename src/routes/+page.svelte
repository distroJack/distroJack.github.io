<script lang="ts">
	import { onMount } from 'svelte';

	let emoji: String;

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

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>what about this thing?</p>

<svelte:head>
	<meta charset="utf-8" />
	<link
		id="favicon"
		rel="icon"
		href="data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">{emoji}</text></svg>"
	/>
</svelte:head>
