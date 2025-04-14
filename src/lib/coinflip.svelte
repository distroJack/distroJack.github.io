<script>
	let isFlipping = false;
	let coinSide = '/heads.png';
	const heads = '/heads.png';
	const tails = '/tails.png';

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function flipMultipleTimes(times = 10, delay = 400) {
		isFlipping = true;
		for (let i = 0; i < times; i++) {
			const isHeads = Math.random() < 0.5;
			coinSide = isHeads ? heads : tails;
			await sleep(delay);
		}
		isFlipping = false;
	}

	function flipCoin() {
		flipMultipleTimes(4, 500);
	}
</script>

<div class="coin {isFlipping ? 'flip' : ''}" style="background-image: url({coinSide});"></div>

<button class="button" on:click={flipCoin} disabled={isFlipping}> Flip the Coin </button>

<style>
	:global(body) {
		margin: 0;
		height: 100vh;
		background: linear-gradient(145deg, #1e1e2f, #2d2d44);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Segoe UI', sans-serif;
		color: white;
		overflow: hidden;
	}

	.coin {
		width: 300px;
		height: 300px;
		background-size: 150%;
		background-repeat: no-repeat;
		background-position: center;
		border-radius: 50%;
		background-color: goldenrod;
		box-shadow: 0 0 25px grey;
		transition: transform 0.6s ease-in-out;
	}

	.flip {
		animation: flip 2s cubic-bezier(0.23, 1, 0.32, 1);
	}

	@keyframes flip {
		0% {
			transform: translateY(0) rotateY(0);
		}
		25% {
			transform: translateY(-200px) rotateY(720deg);
		}
		50% {
			transform: translateY(0) rotateY(1440deg);
		}
		75% {
			transform: translateY(-100px) rotateY(2160deg);
		}
		100% {
			transform: translateY(0) rotateY(2880deg);
		}
	}

	.button {
		position: absolute;
		bottom: 40px;
		padding: 15px 40px;
		font-size: 1.2rem;
		background: #00bcd4;
		border: none;
		border-radius: 50px;
		box-shadow: 0 5px 15px rgba(0, 188, 212, 0.4);
		color: white;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.button:hover {
		background: #0097a7;
	}
</style>
