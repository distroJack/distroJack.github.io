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

<div class="look">Look</div>
<div class="at">at</div>
<div class="the">the</div>
<div class="pretty">pretty</div>
<div class="colors">colors</div>

<style>
	:global(body),
	:global(html) {
		height: 100%;
	}
	:root {
		--g1: #70d6ff;
		--g2: #ff70a6;
		--g3: #ff9770;
		--g4: #ffd670;
		--g5: #e9ff70;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		width: 100%;
		font-family: Ubuntu, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* bookends a double dose of gradient 1 color to allow for animation to loop without jaring gradient jumps */
		background: linear-gradient(var(--g1), var(--g2), var(--g3), var(--g4), var(--g5));
		background-size: 800% 800%;
		animation: bg-gradient 15s ease infinite;
		/* color: whitesmoke; */
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

	:global(body) .look {
		color: var(--g1);
	}

	:global(body) .at {
		color: var(--g2);
	}

	:global(body) .the {
		color: var(--g3);
	}

	:global(body) .pretty {
		color: var(--g4);
	}

	:global(body) .colors {
		color: var(--g5);
	}
</style>
