<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="w-25 mx-auto">
	<h1>My profile</h1>
	<form method="POST" action="?/profile">
		<div class="form-outline mb-4">
			<label class="form-label" for="username">Username</label>
			<input
				type="text"
				name="username"
				id="username"
				class="form-control form-control-lg"
				value={data.user.username}
			/>
		</div>
		<div class="form-outline mb-4">
			<label class="form-label" for="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				class="form-control form-control-lg"
			/>
		</div>
		<button formaction="?/profile" class="btn btn-warning btn-lg">Update</button>
		<button formaction="?/disconnect" class="btn btn-danger btn-lg">Disconnect</button>
	</form>
</div>


