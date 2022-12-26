<script lang="ts">
	let title = 'About';

	const changeTitle = () => {
		title = [...title].reverse().join('');
	};
</script>

<div class="about">
	<h2>{title}</h2>
	<p>
		Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<button on:click={changeTitle}>Change Title</button>
	<input type="text" bind:value={title} placeholder="Type Something Here" />

    <a href="/app/guides">View Guides</a>
    <a href="/app">Home</a>
</div>

<style>
	.about {
		text-align: center;
		background-color: aquamarine;
		display: block;
		margin: 20px auto;
	}
</style>
