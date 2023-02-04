<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="w-50 mx-auto">
	<h1>My profile</h1>
	<form method="POST" action="?/profile">
		<div class="form-outline mb-4">
			<Input name="username" label="Username" value={data.user.username} />
		</div>
		<div class="form-outline mb-4">
			<Input type="password" name="password" label="Password" />
		</div>
		<button formaction="?/profile" class="btn btn-warning btn-lg mb-3"
			>Update</button
		>
		<button formaction="?/disconnect" class="btn btn-danger btn-lg mb-3"
			>Disconnect</button
		>
	</form>
</div>
