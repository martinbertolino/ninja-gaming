<script lang="ts">
	import Title from '$lib/title.svelte';
	import '../../styles/global.css';
</script>

<header>
	<nav>
		<Title title="Ninja Gamin Guides" />
		<div class="links">
			<a href="/app">Home</a>
			<a href="/app/about">About</a>
			<a href="/app/guides">Guides</a>
		</div>
	</nav>
</header>

<main>
	<!-- ? -->
	<slot />
</main>

<footer>
	<p>Copyright 2022</p>
</footer>

<style>
	header {
		text-align: center;
		background-color: rgba(0, 0, 0, 0.1);
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
	.links {
		margin-left: auto;
	}
	a {
		margin-left: 10px;
	}
	nav {
		display: flex;
		align-items: center;
		max-width: 960px;
		margin: 0 auto;
	}
</style>
