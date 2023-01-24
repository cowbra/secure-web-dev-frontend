<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Locations</h1>
<<<<<<< HEAD
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
			<tr>
			{#each Object.keys(data.locations[0]) as key}
				<th scope="col">{key}</th>
			{/each}
				<th scope="col">More</th>
				<th scope="col">Edit</th>
				<th scope="col">Delete</th>
=======

{#if data}
	{#if data.locations}
		<table>
			<tr>
				{#each Object.keys(data.locations[0]) as key}
					<th>{key}</th>
				{/each}
>>>>>>> a513c27e417e95a67c777ff0ea9b68df1814bc59
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
<<<<<<< HEAD
					<!-- Additional features -->
					<td>
						<button type="button" class="btn btn-primary btn-floating">
						<i class="fas fa-magic"></i>
					  </button>
					</td>
					<td>
						<button type="button" class="btn btn-warning btn-floating">
						<i class="fas fa-magic"></i>
					  	</button>
					</td>
					<td>
						<button type="button" class="btn btn-danger btn-floating">
						<i class="fas fa-magic"></i>
					  	</button>
					</td>
=======
>>>>>>> a513c27e417e95a67c777ff0ea9b68df1814bc59
				</tr>
			{/each}
		</table>
	{:else}
		<p>No location found</p>
	{/if}
<<<<<<< HEAD
{/if}
=======
{/if}
>>>>>>> a513c27e417e95a67c777ff0ea9b68df1814bc59
