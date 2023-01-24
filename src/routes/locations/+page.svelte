<script lang="ts">
	import type { PageData } from './$types';
	import type { FilteredLocationProps } from '$lib/types/location';
	export let data: PageData;
</script>

<h1>Locations</h1>
<form method="GET" action="/add" class="col-md-auto w-30">
	<div class="form-outline">
		<input
		type="submit"
		value="Add"
		class="btn btn-primary mb-3"
	/>
	</div>
</form>
{#if data}
	{#if data.locations}
		<table class="table table-striped">
			<!-- Headers row -->
			<tr>
			{#each Object.keys(data.locations[0]) as key}
				<th scope="col">{key}</th>
			{/each}
			{#if data.user.role === 'admin'}
				<th scope="col">More</th>
				<th scope="col">Edit</th>
			{/if}
			</tr>

			<!-- Data rows -->
			{#each data.locations as location}
			<tr>
			{#each Object.values(location) as value}
				<td>{value}</td>
			{/each}
			{#if data.user.role === 'admin'}
				<td><a class="text-primary" href="/locations/{location.id}">More</a></td>
				<td><a class="text-warning" href="/locations/edit/{location.id}">Edit</a></td>
			{/if}
			</tr>
			{/each}
		</table>
	{:else}
		<p>No location found</p>
	{/if}
{/if}
