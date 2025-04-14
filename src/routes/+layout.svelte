<script lang="ts">
	import { onMount } from 'svelte';

	let href_string: string = '/favicon.ico';

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

		let emoji = icons[Math.floor(Math.random() * icons.length)];
		href_string =
			'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">' +
			emoji +
			'</text></svg>';
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<!-- prettier-ignore -->
	<link
        rel="icon"
        href='{href_string}'
    >
</svelte:head>

<slot />
