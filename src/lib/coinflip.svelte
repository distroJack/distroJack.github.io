<script>
	import { onDestroy, onMount } from 'svelte';
	import '../styles/coinflip.scss';

	let isFlipping = false;

	let coinSide = '/heads.svg';
	const heads = '/heads.svg';
	const tails = '/tails.svg';

	let headsInARow = 0;
	let longestStreak = 0;
	let showStreak = false;

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	onMount(() => {
		document.body.classList = 'coinflip-body';
		const saved = localStorage.getItem('longestStreak');
		if (saved) {
			longestStreak = parseInt(saved);
		}
	});

	onDestroy(() => {
		document.body.classList.remove('coinflip-body');
	});

	async function flipMultipleTimes(times = 10, delay = 400) {
		isFlipping = true;
		let isHeads;
		for (let i = 0; i < times; i++) {
			isHeads = Math.random() < 0.5;
			coinSide = isHeads ? heads : tails;
			await sleep(delay);
		}
		isFlipping = false;

		if (isHeads) {
			headsInARow++;
			showStreak = true;

			if (headsInARow > longestStreak) {
				longestStreak = headsInARow;
				localStorage.setItem('longestStreak', longestStreak.toString());
			}
		} else {
			headsInARow = 0;
			showStreak = false;
		}
	}

	function flipCoin() {
		flipMultipleTimes(4, 500);
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="coin {isFlipping ? 'flip' : ''}" style="background-image: url({coinSide});"></div>

<div class="scoreboard">
	<div class="score-item">
		<span class="label">🏆 Longest Streak:</span>
		<span class="value">{longestStreak}</span>
	</div>

	{#if showStreak}
		<div class="score-item">
			<span class="label">🔥 Heads in a Row:</span>
			<span class="value">{headsInARow}</span>
		</div>
	{/if}
</div>

<button class="button" on:click={flipCoin} disabled={isFlipping}> Flip the Coin </button>
