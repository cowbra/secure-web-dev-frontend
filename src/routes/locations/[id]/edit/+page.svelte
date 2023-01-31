<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data);
</script>

<div class="w-50 mx-auto">
	<h1>Edit location</h1>
	<p>Go <a href='/locations'>back</a></p>
	<form method="POST" class="col-md-auto">
		<div class="form-outline mb-3">
			<Input name="filmType" label="Type"/>
		</div>
        <div class="row">
            <div class="col form-outline mb-3">
				<Input name="filmProducerName" label="Producer Name"/>
            </div>
            <div class="col form-outline mb-3">
				<Input name="filmDirectorName" label="Director Name"/>
            </div>
        </div>
        <div class="form-outline mb-3">
			<Input name="filmName" label="Film Name"/>
		</div>
        <div class="row">
            <div class="col form-outline mb-3">
				<Input name="startDate" label="Start date"/>
            </div>
            <div class="col form-outline mb-3">
				<Input name="endDate" label="End date"/>
            </div>
        </div>
        <div class="form-outline mb-3">
			<Input name="district" label="District"/>
		</div>
        <div class="form-outline mb-3">
			<Input name="sourceLocationId" label="Source Location Id"/>
		</div>

		<label class="form-label" for="geolocation">Geolocation</label>
		<div class="row">
			<div class="col form-outline mb-3">
				<Input name="geolocationX" label="X"/>
			</div>
			<div class="col form-outline mb-3">
				<Input name="geolocationY" label="Y"/>
			</div>
			<div class="col form-outline mb-3">
				<Input name="geolocationType" label="Type" value="Point"/>
			</div>
		</div>
        <div class="form-outline mb-3">
			<Input name="address" label="Address"/>
		</div>
        <div class="form-outline mb-1">
			<Input name="year" label="Year" />
		</div>
		<button formaction="?/edit" class="btn btn-warning btn-lg mb-3">Update</button>
		<button formaction="?/delete" class="btn btn-danger btn-lg mb-3">Delete</button>

	</form>
</div>