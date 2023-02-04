<script lang="ts">
	import Pagination from '$lib/components/Pagination.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Locations</h1>
<form method="GET" action="/locations/add" class="col-md-auto w-30">
	<div class="form-outline">
		<input type="submit" value="Add" class="btn btn-primary mb-3" />
	</div>
</form>
{#if data}
	{#if data.locations}
		<table class="table table-striped">
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
	{:else}
		<p>No location found</p>
	{/if}
{/if}
