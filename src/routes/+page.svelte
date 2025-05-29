<script>
	import { onDestroy, onMount } from 'svelte';
	import '../styles/index.scss';

	let isReady = false;
	let coinFace = '/heads.svg';
	let position = { top: 0, left: 0 };
	let speed = { x: 0, y: 0 };
	let vals = { g: 10, dt: 0.02, res: 0.8 };

	onMount(() => {
		document.body.classList.add('index-body');
		coinFace = Math.random() < 0.5 ? '/heads.svg' : 'tails.svg';
		speed.x = (Math.random() - 0.5) * 4; // random between -2 and +2

		const startLeft = Math.floor(Math.random() * (window.innerWidth - 120));
		position.left = startLeft;
		position.top = 10;
		isReady = true;

		requestAnimationFrame(animateFall);
	});

	onDestroy(() => {
		document.body.classList.remove('index-body');
	});

	function animateFall() {
		speed.y += vals.g * vals.dt;
		console.log('Speed is : ', speed.y);

		let leftPadding = 10;
		let rightPadding = 100;
		let newLeft = position.left + speed.x;
		if (newLeft < leftPadding || newLeft > window.innerWidth - rightPadding) {
			speed.x *= -1;
		}
		position.left = newLeft;
		position.top += speed.y * vals.dt;

		let lowerPadding = 100;
		if (position.top >= window.innerHeight - lowerPadding) {
			speed.y *= -vals.res; // reverse and dampen the velocity
			speed.x *= vals.res;
		}
		requestAnimationFrame(animateFall);
	}
</script>

{#if isReady}
	<div class="index-div">
		<a
			href="/coinflip"
			class="coin-link"
			style="top: {position.top}px; left: {position.left}px; background-image: url({coinFace});"
		>
		</a>
	</div>
{/if}
