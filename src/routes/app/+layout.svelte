<script lang="ts">
	import Title from '$lib/title.svelte';
	import '../styles/global.css';
</script>

<header>
	<Title title="Ninja Gamin Guides" />
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
		display: flex;
		justify-content: center;
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
</style>
