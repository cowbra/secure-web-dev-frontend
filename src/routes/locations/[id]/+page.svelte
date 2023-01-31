<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.user.role === 'admin' && data.location}
	<p>> Go <a href="/locations">back</a></p>
	{#each Object.entries(data.location) as [key, value]}
		<p>{key}: {value}</p>
	{/each}
{:else}
	<p>Location not found</p>
{/if}