<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Pagination from '$lib/components/Pagination.svelte';
	import { MAX_PAGES } from '$lib/constants';
	import type { PageData } from './$types';
	export let data: PageData;

	$: MAX_PAGES;
	$: p = data.index;
	// URL PATH FORCE TO `MAX_PAGES`
	$: if (browser && p >= MAX_PAGES) {
		goto(`/locations?page=${MAX_PAGES}`);
	}
</script>

<h1>Locations</h1>
{#if data?.user?.role === 'admin'}
	<a class="btn btn-primary mb-2" href="/locations/add">New Location</a>
{/if}
{#if data}
	{#if data.locations}
		<table class="table table-hover">
			<!-- Headers row -->
			<tr>
				{#each Object.keys(data.locations[0]) as key}
					{#if key !== 'id'}
						<th scope="col">{key}</th>
					{/if}
				{/each}
				<th scope="col">More</th>
				{#if data.user.role === 'admin'}
					<th scope="col">Edit</th>
				{/if}
			</tr>
			<!-- Data rows -->
			{#each data.locations as location}
				<tr>
					{#each Object.entries(location) as [key, value]}
						{#if key !== 'id'}
							<td>{value}</td>
						{/if}
					{/each}
					<td
						><a class="text-primary" href="/locations/{location.id}"
							>More</a
						></td
					>
					{#if data.user.role === 'admin'}
						<td
							><a
								class="text-warning"
								href="/locations/{location.id}/edit">Edit</a
							></td
						>
					{/if}
				</tr>
			{/each}
		</table>
		<Pagination
			pages={MAX_PAGES}
			{p}
			href={(p) => `/locations?page=${p}`}
		/>
	{:else}
		<p>No location found</p>
	{/if}
{/if}
