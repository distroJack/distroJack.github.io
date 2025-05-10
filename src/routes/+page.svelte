<script>
	import { onMount } from 'svelte';
	import '../styles/index.scss';

	let isReady = false;
	let coinFace = '/heads.svg';
	let position = { top: 0, left: 0 };
	let speed = { x: 0, y: 0 };

	onMount(() => {
		// document.body.className = 'index-body';

		coinFace = Math.random() < 0.5 ? '/heads.svg' : 'tails.svg';
		speed.x = (Math.random() - 0.5) * 4; // random between -2 and +2

		const startLeft = Math.floor(Math.random() * (window.innerWidth - 120));
		position.left = startLeft;
		position.top = 10;
		isReady = true;

		requestAnimationFrame(animateFall);
	});

	function animateFall() {
		let newLeft = position.left + speed.x;
		if (newLeft > 20 && newLeft < window.innerWidth - 120) {
			position.left = newLeft;
		} else {
			speed.x *= -1;
		}

		position.top += speed.y;
		speed.y += 0.03;

		if (position.top < window.innerHeight - 150) {
			requestAnimationFrame(animateFall);
		} else {
			speed.y = -2;
			requestAnimationFrame(animateFall);
		}
	}
</script>

<body class="main-body">
	{#if isReady}
		<a
			href="/coinflip"
			class="coin-link"
			style="top: {position.top}px; left: {position.left}px; background-image: url({coinFace});"
		>
		</a>
	{/if}
</body>
