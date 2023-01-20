<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Locations</h1>

{#if data}
	{#if data.locations}
		<table>
			<tr>
				{#each Object.keys(data.locations[0]) as key}
					<th>{key}</th>
				{/each}
			</tr>
			{#each data.locations as location}
				<tr>
					{#each Object.entries(location) as [key, value]}
						{#if key === 'geolocation'}
							<td> {value[0]}, {value[1]}</td>
						{:else}
							<td>{value}</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</table>
	{:else}
		<p>No location found</p>
	{/if}
{/if}
