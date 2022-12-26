<script lang="ts">
	export let data;

	console.log(data);
</script>

<div class="guides">
	<ul>
		<li><a href="/app">guide 1</a></li>
		<li><a href="/app">guide 2</a></li>
		{#each data.guides as guide}
			<li><a href={`/app/guides/${guide.id}`}>{guide.id} - {guide.title}</a></li>
		{/each}
	</ul>
</div>

<style>
	.guides {
		margin-top: 20px;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px;
		border: 1px dotted rgba(255, 255, 255, 0.2);
	}
</style>
