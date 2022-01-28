<script>
	import Header from '$lib/header/Header.svelte';
	import Search from '$lib/search/Search.svelte';
	import '../app.css';
</script>

<Header />

<Search />

<main>
	<slot />
</main>

<footer>
	<p>롤 리그 지표는 보는 곳 <strong class="lck-monster"><a href="https://www.lck.monster">LCK.MONSTER</a></strong></p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		margin-top: 3.5em;
	}
	footer {
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 5em;
	}
	footer a {
		color: white;
		font-weight: bold;
	}
	@media (min-width: 480px) {
		footer {
			padding: 5em 0;
		}
	}
	.lck-monster {
		font-family: 'Orbitron', sans-serif;
		font-weight: bolder;
	}
</style>
